import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HalamanHomeJuz1 from "../pages/Juz1/HomeJuz1";
import HalamanHomeJuz2 from "../pages/Juz2/HomeJuz2";
import HalamanHomeJuz3 from "../pages/Juz3/HomeJuz3";
import HalamanHomeJuz4 from "../pages/Juz4/HomeJuz4";
import HalamanHomeJuz5 from "../pages/Juz5/HomeJuz5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Book from '../assets/svg/book-opened-outline-from-top-view-svgrepo-com.svg'
import colors from "../utils/colors/colors";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return(


           <Tab.Navigator    screenOptions={({route}) => ({
            tabBarIcon : ({focused, color, size}) => {

                let iconName;

                if(route.name === 'Juz 1') {
                    iconName = focused
                    ? '../assets/svg/alquran1.svg' 
                    : '../assets/svg/alquran1.svg';
                } else if (route.name === 'Juz 2') {
                    iconName = focused ? '../assets/svg/alquran1.svg' : '../assets/svg/alquran1.svg';
                }

                return <Book name={iconName} size={size} color={color} fill={focused ? colors.textlogo : '#E2E2E2'} width={30} />;
            },
              tabBarActiveTintColor: colors.textlogo,
              tabBarInactiveTintColor: 'white',
              tabBarStyle : {backgroundColor:'black', height:55, width:'100%'},
              tabBarLabelStyle: {fontFamily:'Alata-Regular', fontSize:12}
              
                    
           }) } >


        <Tab.Screen  name="Juz 1" component={HalamanHomeJuz1} options={{
headerShown:false
        }} />
        <Tab.Screen name="Juz 2" component={HalamanHomeJuz2} options={{
headerShown:false
        }} />
        <Tab.Screen name="Juz 3" component={HalamanHomeJuz3} options={{
headerShown:false
        }} />
        <Tab.Screen name="Juz 4" component={HalamanHomeJuz4} options={{
headerShown:false
        }} />
        <Tab.Screen name="Juz 5" component={HalamanHomeJuz5} options={{
            headerShown:false
 }} />
    </Tab.Navigator>


    )

 
}

export default TabNavigation;
 

