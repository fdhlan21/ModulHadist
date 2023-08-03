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

const Hadistduanav = () => {

       const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);
    const[selectedText, setSelectedText] = useState('');

    return(


           <Tab.Navigator   screenOptions={({route}) =>  ({
            tabBarIcon : ({focused, color, size}) => {

                let iconName;

                if(route.name === 'Hadist 1') {
                    iconName = focused
                    ? "arrowright" 
                    : "arrowleft";
                } else if (route.name === 'Hadist 2') {
                    iconName = focused ? '../assets/svg/alquran1.svg' : '../assets/svg/alquran1.svg';
                }

                return <Icon name={iconName} size={size} color={color}/>;
            },
              tabBarActiveTintColor: colors.textlogo,
              tabBarInactiveTintColor: 'white',
              tabBarStyle : {backgroundColor:'black', height:55, width:'100%'},
              tabBarLabelStyle: {fontFamily:'Alata-Regular', fontSize:12}
              
                    
           })  
           }>


<Tab.Screen name='Hadist 1' component={HalamanHadist1} options={{headerShown:false}} />
<Tab.Screen  name='Hadist 2' component={HalamanHadist2} options={{headerShown:false}}  />
<Tab.Screen name="Hadist 3" component={HalamanHadist3} options={{headerShown:false}} />

    </Tab.Navigator>


    )

 
}

export default Hadistduanav;
 

