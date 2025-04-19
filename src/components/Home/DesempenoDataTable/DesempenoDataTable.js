import { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { DataTable, Button } from 'react-native-paper';
import { screensName } from "../../../utils";
import { styles } from "./DesempenoDataTable.styles";

export function DesempenoDataTable(props) {

    const { desempenios } = props;
    const navigation = useNavigation();

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([6, 7, 8]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, desempenios.length);

  const goToEditar = (desempenoId) => {
     navigation.navigate(screensName.home.desempenoEditar, { desempenoId: desempenoId });
  };

  const goToEliminar = (desempenoId) => {
    console.log("eliminar");
 };

    let nro=1;

  return (
    
    <DataTable>
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
            <DataTable.Header>
                <DataTable.Title style={{ width: 30 }}>N°</DataTable.Title>
                <DataTable.Title style={{ width: 400 }}>Evaluación</DataTable.Title>
                <DataTable.Title style={{ width: 100 }}>Editar</DataTable.Title>
                <DataTable.Title style={{ width: 100 }}>Eliminar</DataTable.Title>
            </DataTable.Header>
            
            {desempenios.slice(from, to).map((item) => (
                <DataTable.Row style={{ flex: 1, width: '100%', height: 50 }} key={item.id}  >
                <DataTable.Cell style={{ width: 30 }}>{`${nro++}`}</DataTable.Cell>    
                <DataTable.Cell style={{ width: 400 }}>{item.nombre}</DataTable.Cell>
                <DataTable.Cell style={{ width: 100 }}><Button mode="contained" onPress={() => goToEditar(item.id)} style={styles.btnEdit}>Editar</Button></DataTable.Cell>
                <DataTable.Cell style={{ width: 100 }}><Button mode="contained" onPress={() => goToEliminar(item.id)} style={styles.btnEdit}>Eliminar</Button></DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(desempenios.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${desempenios.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={''}
                style={{ alignSelf:"flex-start" }}
            />
            </ScrollView>
    </DataTable>
    
  )
}