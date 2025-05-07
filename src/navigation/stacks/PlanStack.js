import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanScreen, PlanSupervisionScreen, PlanSupervisionCrearScreen, PlanSupervisionEditarScreen } from "../../screens/Plan";
import { VerdesempenoScreen } from "../../screens/Verdesempeno";
import { ChecklistScreen, CheckListCrearScreen, CheckListEditarScreen,
  CheckListItemScreen, CheckListItemCrearScreen, CheckListItemEditarScreen,
  CheckListItemContenidoScreen, CheckListItemContenidoCrearScreen, CheckListItemContenidoEditarScreen,
  CheckListAplicarScreen, CheckListFechasScreen, CheckListMostrarScreen 
 } from "../../screens/Checklist";
import { MejorasScreen, MejorasCrearScreen, MejorasEditarScreen, 
  MejorasTomarFotoScreen, MejorasVerFotosScreen, MejorasPlanCrearScreen, 
 } from "../../screens/Mejoras"; 
import { screensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function PlanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.homeplan.homeplan} component={PlanScreen} />
      <Stack.Screen name={screensName.homeplan.plansupervision} component={PlanSupervisionScreen} />
      <Stack.Screen name={screensName.homeplan.plansupervisionCrear} component={PlanSupervisionCrearScreen} />
      <Stack.Screen name={screensName.homeplan.plansupervisionEditar} component={PlanSupervisionEditarScreen} />
      <Stack.Screen name={screensName.homeplan.verdesempenovergral} component={VerdesempenoScreen} />
      <Stack.Screen name={screensName.homeplan.checklist} component={ChecklistScreen} />
      <Stack.Screen name={screensName.homeplan.checklistCrear} component={CheckListCrearScreen} />
      <Stack.Screen name={screensName.homeplan.checklistEditar} component={CheckListEditarScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitem} component={CheckListItemScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitemCrear} component={CheckListItemCrearScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitemEditar} component={CheckListItemEditarScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitemcontenido} component={CheckListItemContenidoScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitemcontenidoCrear} component={CheckListItemContenidoCrearScreen} />
      <Stack.Screen name={screensName.homeplan.checklistitemcontenidoEditar} component={CheckListItemContenidoEditarScreen} />
      <Stack.Screen name={screensName.homeplan.checklistaplicar} component={CheckListAplicarScreen} />
      <Stack.Screen name={screensName.homeplan.checklistaplicarFechas} component={CheckListFechasScreen} />
      <Stack.Screen name={screensName.homeplan.checklistaplicarMostrar} component={CheckListMostrarScreen} />
      <Stack.Screen name={screensName.homeplan.mejoras} component={MejorasScreen} />
      <Stack.Screen name={screensName.homeplan.mejorasCrear} component={MejorasCrearScreen} />
      <Stack.Screen name={screensName.homeplan.mejorasEditar} component={MejorasEditarScreen} />
      <Stack.Screen name={screensName.homeplan.mejorasTomarfoto} component={MejorasTomarFotoScreen} />
      <Stack.Screen name={screensName.homeplan.mejorasVerFotos} component={MejorasVerFotosScreen} />
      <Stack.Screen name={screensName.homeplan.mejorasPlanCrear} component={MejorasPlanCrearScreen} />
    </Stack.Navigator>
  );
}