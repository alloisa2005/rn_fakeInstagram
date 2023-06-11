import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ImageList, NewImage } from "../screens";

const Stack = createNativeStackNavigator(); 

const InstaNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />      
      <Stack.Screen name="ImageList" component={ImageList} />      
      <Stack.Screen name="NewImage" component={NewImage} />    
    </Stack.Navigator>
  );
};

export default InstaNavigator;