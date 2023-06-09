import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import InstaNavigator from './navigation/instaNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <InstaNavigator />
    </NavigationContainer>
  );
}

