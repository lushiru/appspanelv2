import { useState, useEffect } from "react";
import { ToastAndroid, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { Layout } from "../../../layouts";
import { styles } from "./DesempenoRegistrarEvaluacionScreen.styles";
import { screensName } from "../../../utils";
import { desempeniosregistrarCtrl } from "../../../api";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { DesempenoDataTable } from "../../../components/Home";

const Item = Picker.Item;

export function DesempenoRegistrarEvaluacionScreen(props) {

    const {
        route: { params },
      } = props;

      const desempenoId = params?.id;
      const nombredes = params?.nombre;

  const [evaluar, setEvaluar] = useState(null);
  const [trabajadores, setTrabajadores] = useState(null);
  const [trabajador, setTrabajador] = useState(null);
  const isVisible = useIsFocused();
  const navigation = useNavigation();
  const [mostrarEvaluacion, setMostrarEvaluacion] = useState(false);

    useEffect(() => {
        if(isVisible){getDesempenios();}                     
    }, [isVisible]);

    useEffect(() => {
        if(desempenoId){ getEvaluar(); }                     
    }, [desempenoId]);

    useEffect(() => {
        if(trabajador){
            setMostrarEvaluacion(false);
            setMostrarEvaluacion(true);
        }        
    }, [trabajador]);

    const getDesempenios = async () => {
      try {
        const response = await desempeniosregistrarCtrl.verTrabajadores();
        setTrabajadores(response.arrpers);        
      } catch (error) {
          ToastAndroid.show( "Error al obtener colaboradores" , ToastAndroid.SHORT);
      }
    };

    const getEvaluar = async () => {
        try {
          const response = await desempeniosregistrarCtrl.verEvaluacion(desempenoId);
          setEvaluar(response.arrr);        
        } catch (error) {
            ToastAndroid.show( "Error al obtener colaboradores" , ToastAndroid.SHORT);
        }
      };

    const seguiraEvaluacion = (trabaj) => {

        if(trabaj!=""){
            setTrabajador(trabaj);
        }

    }

    const EscribirEvaluacion = () => {

        return (
                <View>
                { evaluar.map((item) => 
                     (      <>
                            <View><Text>{item.nombre} ponderacion {item.porcentaje}</Text></View>
                               { item.arrsub.map((item2) => 
                                        ( <>
                                            <View><Text>subcategoria {item2.nombre} ponderacion={item2.porcentaje}</Text></View>
                                            {
                                                item2.arrtar.map((item3) => 
                                                     (<View><Text>{item3.tarea}</Text></View>)
                                                )
                                            }                                    
                                    </>    )
                                )} 
                        </>    )
                 )}
                </View>

                     
        );
    }
    
  return (
    <Layout.Basic>
        <Text style={styles.titulo}>{nombredes}</Text>
        {trabajadores ? 
            <Picker
                selectedValue={""}
                onValueChange={(v)=> seguiraEvaluacion(v)}
                >
                <Item label="Seleccione Trabajador" value="" enabled={false} />  
                {
                    trabajadores.map((it) => { return <Item key={it.id} label={it.nombres + " " + it.apellidos1 + " " + it.apellidos2 } value={it.id} /> })
                }
            </Picker>

            : ""        
        }
        {
            mostrarEvaluacion && evaluar ? 
                    <EscribirEvaluacion />
            : ""
        }
        

    </Layout.Basic>
  )
}