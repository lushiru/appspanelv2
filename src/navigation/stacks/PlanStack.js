import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanScreen, PlanSupervisionScreen, PlanSupervisionCrearScreen, PlanSupervisionEditarScreen } from "../../screens/Plan";
import { VerdesempenoScreen } from "../../screens/Verdesempeno";
import { ChecklistScreen, CheckListCrearScreen, CheckListEditarScreen } from "../../screens/Checklist";
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
    </Stack.Navigator>
  );
}