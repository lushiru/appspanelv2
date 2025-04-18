import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ColaboradoresScreen, ColaboradoresCrearScreen, ColaboradoresEditarScreen } from "../../screens/Home";
import { screensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.home.home} component={HomeScreen} />
      <Stack.Screen name={screensName.home.colaboradores} component={ColaboradoresScreen} />
      <Stack.Screen name={screensName.home.colaboradoresCrear} component={ColaboradoresCrearScreen} />
      <Stack.Screen name={screensName.home.colaboradoresEditar} component={ColaboradoresEditarScreen} />
      <Stack.Screen name={screensName.home.gestionpersonas} component={HomeScreen} />
    </Stack.Navigator>
  );
}