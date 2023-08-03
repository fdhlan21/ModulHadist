import React, {useState, useContext} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Book from '../assets/svg/alquran1.svg'
import colors from "../utils/colors/colors";
import themeContext from "../config/themeContext";
import HalamanHadist1 from "../pages/Juz1/Hadist1";
import HalamanHadist2 from "../pages/Juz1/Hadist2";
import HalamanHadist3 from '../pages/Juz1/Hadist3';
import LeftArrow from '../assets/svg/left-arrow.svg'
import RightArrow from '../assets/svg/right-arrow.svg'
const Tab = createBottomTabNavigator();

const HadistTabNavigation = () => {

       const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);
    const[selectedText, setSelectedText] = useState('');

    return(


           <Tab.Navigator   screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{backgroundColor:theme.topbar},}}>



 <Tab.Screen name='Hadist 1' component={HalamanHadist1} />

<Tab.Screen  name='Hadist 1' component={HalamanHadist2} options={{
    tabBarLabel : false,
    tabBarIconStyle: {display:"none"} }}  />

<Tab.Screen name="Hadist 2" component={HalamanHadist2} options={{

    tabBarIcon: ({color, size}) => (
        <RightArrow   fill="#fff" />

    ), 

}} />

    </Tab.Navigator>


    )

 
}

export default HadistTabNavigation;
 

