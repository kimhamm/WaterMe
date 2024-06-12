/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Statistics from './src/screens/Statistics';
import Settings from './src/screens/Settings/Settings';
import OnBoarding from './src/screens/OnBoarding/OnBoarding'

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
