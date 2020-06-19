import React, { useState, useReducer } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GameStart from './screens/GameStart'
import GameEnd from './screens/GameEnd'
// import { Context, initialState, reducer } from './components/Store'

// TODO: Manage the score globally with Redux or useContext

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
const Stack = createStackNavigator();

export default function App() {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }



  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={GameStart} />
        <Stack.Screen name="End" component={GameEnd} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}


