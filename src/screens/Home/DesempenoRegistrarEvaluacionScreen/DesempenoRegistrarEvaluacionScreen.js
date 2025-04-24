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

  const [tareas, setTareas] = useState(null);

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
            cargarTareas();
            setTrabajador(trabaj);
        }

    }

    const cargarTareas = () => {

        setTareas(null);

        const array = [];

        evaluar.forEach(element => {            
            element.arrsub?.forEach(element2 => {
                element2.arrtar?.forEach(element3 => {
                            array.push({ idtarea : element3.id, valor: 0});
                        })
                });
        });
        setTareas(array);

    }

    const cambiarPorcentaje = (newvalor,id) =>{

        if(tareas == null){
            cargarTareas();
        }

        const array = [];
        tareas.forEach(element => {
            if(element.idtarea == id){
                array.push({ idtarea : id, valor: newvalor});
            }else{
                array.push({ idtarea : element.idtarea, valor: element.valor});
            }
        });
        setTareas(array);
        console.log(array);
    }

    const EscribirEvaluacion = () => {        
        
        return (
                <View key={Date.now()} style={styles.table}>
                { evaluar.map((item,index1) => 
                     (      <View key={"viewcat"+item.id+index1}>
                            <View key={"princat"+item.id+index1} style={styles.table_head}>
                                <View key={"cat"+item.id+index1} style={{width:"25%"}}>
                                    <Text key={"catt"+item.id+index1}>Categoria de competencia</Text>
                                </View>
                                <View key={"catnom"+item.id+index1} style={{width:"50%"}}>
                                    <Text key={"catnomt"+item.id+index1}>{item.nombre}</Text>
                                </View>
                                <View key={"catpond"+item.id+index1} style={{width:"25%"}}>
                                    <Text key={"catpondt"+item.id+index1}>Ponderacion {item.porcentaje}%</Text>
                                </View>
                            </View>
                               { item.arrsub?.map((item2,index2) => 
                                        ( <View key={"viewsub"+item2.id+index1+index2}>
                                            <View key={"prinsub"+item2.id+index1+index2} style={styles.table_sub}>
                                                <View key={"subc"+item2.id+index1+index2} style={{width:"25%"}}>
                                                    <Text key={"subct"+item2.id+index1+index2}>subcategoria</Text>
                                                </View>
                                                <View key={"subcnom"+item2.id+index1+index2} style={{width:"50%"}}>
                                                    <Text key={"subcnomt"+item2.id+index1+index2}>{item2.nombre}</Text>
                                                </View>
                                                <View key={"subcpon"+item2.id+index1+index2} style={{width:"10%"}}>
                                                    <Text key={"subcpont"+item2.id+index1+index2}>Ponderacion</Text>
                                                </View>      
                                                <View key={"subcporc"+item2.id+index1+index2} style={{width:"15%"}}>
                                                    <Text key={"subcporct"+item2.id+index1+index2} style={{ textAlign: "center"}}>{item2.porcentaje}%</Text>
                                                </View>
                                            </View>
                                            {
                                                item2.arrtar?.map((item3,index3) => 
                                                    (
                                                    <View key={"printar"+item3.id+index1+index2+index3} style={styles.table_tar}>
                                                        <View key={"tar"+item3.id+index1+index2+index3} style={{width:"85%"}}>
                                                            <Text key={"tart"+item3.id+index1+index2+index3} style={{fontSize: 18}}>{item3.tarea}</Text>
                                                        </View>
                                                        <View key={"tarpick"+item3.id+index1+index2+index3} style={{width:"15%"}}>
                                                            <Picker style={{height: 50}} key={"tarp"+item3.id+index1+index2+index3}
                                                                onValueChange={(v) => { cambiarPorcentaje(v, item3.id); } }
                                                                >
                                                                <Item label="Seleccione Puntaje" value="" enabled={false} />
                                                                <Item label="0%" value="0" />    
                                                                <Item label="25%" value="25" />
                                                                <Item label="50%" value="50" />
                                                                <Item label="75%" value="75" />
                                                                <Item label="100%" value="100" />
                                                            </Picker>
                                                        </View>
                                                    </View>)
                                                )
                                            }                                    
                                    </View>    )
                                )} 
                        </View>    )
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
                onValueChange={(v)=> { seguiraEvaluacion(v); }}
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