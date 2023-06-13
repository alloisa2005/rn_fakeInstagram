import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import InstaNavigator from './navigation/instaNavigator';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { init } from './db';

init()
  .then(() => console.log('Database inicialized.'))
  .catch(err => {
    console.log('Initialization failed.');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    'Oleo-Regular': require('./assets/fonts/OleoScript-Regular.ttf'),
    'Oleo-Bold': require('./assets/fonts/OleoScript-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={55} color="black" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <InstaNavigator />
      </NavigationContainer>
    </Provider>
  );
}

