// In App.js in a new project

import React, {useEffect, useState, } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from './config/theme';
import themeContext from './config/themeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenStack from './routes/SreenStack';
import ScreenNav from './routes/TabNavigation'
import colors from './utils/colors/colors';
import HalamanHomeJuz1 from './pages/Juz1/HomeJuz1';







const MyStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


 


export default function App() {

  

  

const [mode, setMode]  = useState(false);

useEffect(() => {

  let eventListener = EventRegister.addEventListener(
    "changeTheme",
    (data) => {
      setMode(data);
  
    }

  );

  return () => {
    EventRegister.removeEventListener(eventListener);
  };
});


  return (
<themeContext.Provider value={mode === true  ? theme.dark : theme.light }>
    <NavigationContainer theme={mode === true ?  DarkTheme: DefaultTheme}>
  
<ScreenStack/>


    </NavigationContainer>
    </themeContext.Provider>

  );
}





