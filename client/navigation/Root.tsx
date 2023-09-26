import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteStackParamList } from "../types";
import { ProductDetails} from "../screens";
import BottomTab from "./BottomTab";
import { ProductProvider } from "../context";

const Stack = createNativeStackNavigator<RouteStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="tab"
        component={BottomTab}
      />
      <Stack.Screen name="product" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigation;