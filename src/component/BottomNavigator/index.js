import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HalamanHomeJuz1 from '../../pages/Juz1/HomeJuz1';
import colors from '../../utils/colors/colors';
const Tab = createBottomTabNavigator();


export default function BottomNavigator({state,navigation,descriptors}){

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false){
    return null;
  }

  return(
    <View style={{ backgroundColor:colors.ligtmode, flexDirection:'row'}}>

    {state.routes.map((route, index)=> {
      const {options} = descriptors[route.key];
      const label = 
      options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name

      const isFocused = state.index === index;

      const   onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
      
       if (!isFocused && event.defaultPrevented) {
        navigation.navigate(route.name);
       }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      let iconName = '../../assets/img/alquran.png'
      let labelName = 'Juz 1';
       
       if (label === 'Juz 1'){
        iconName = '../../assets/img/alquran.png'
       } else if (label === 'Juz 2') {
        iconName = '../../assets/img/alquran.png'
        labelName = 'Juz 2'
       } else if (label === 'Juz 3') {
        iconName = '../../assets/img/alquran.png'
        labelName = 'Juz 3'
       } else if (label === 'Juz 4') {
        iconName = '../../assets/img/alquran.png'
        labelName = 'Juz 4'
       } else if (label === 'Juz 5') {
        iconName = '../../assets/img/alquran.png'
        labelName = 'Juz 5'
       }
    
    return(
      <TouchableOpacity>
        
      </TouchableOpacity>
    )
    

    })}

    </View>
  )
}




const styles = StyleSheet.create({})