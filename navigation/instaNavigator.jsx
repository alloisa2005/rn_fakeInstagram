import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator(); 

const InstaNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: true,}} />      
    </Stack.Navigator>
  );
};

export default InstaNavigator;