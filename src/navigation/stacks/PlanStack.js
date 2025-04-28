import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanScreen, PlanSupervisionScreen } from "../../screens/Plan";
import { screensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function PlanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.homeplan.homeplan} component={PlanScreen} />
      <Stack.Screen name={screensName.homeplan.plansupervision} component={PlanSupervisionScreen} />
    </Stack.Navigator>
  );
}