import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ColaboradoresScreen, ColaboradoresCrearScreen, ColaboradoresEditarScreen,
  DesempenoScreen, DesempenoCrearScreen, DesempenoEditarScreen, 
 } from "../../screens/Home";
import { screensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.home.home} component={HomeScreen} />
      <Stack.Screen name={screensName.home.colaboradores} component={ColaboradoresScreen} />
      <Stack.Screen name={screensName.home.colaboradoresCrear} component={ColaboradoresCrearScreen} />
      <Stack.Screen name={screensName.home.colaboradoresEditar} component={ColaboradoresEditarScreen} />
      <Stack.Screen name={screensName.home.desempeno} component={DesempenoScreen} />
      <Stack.Screen name={screensName.home.desempenoCrear} component={DesempenoCrearScreen} />
      <Stack.Screen name={screensName.home.desempenoEditar} component={DesempenoEditarScreen} />
    </Stack.Navigator>
  );
}