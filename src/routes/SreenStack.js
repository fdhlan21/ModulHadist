// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, } from 'react';
import { EventRegister } from 'react-native-event-listeners';
themeContext


//IMPORT PAGES//
import Book from '../assets/svg/book-opened-outline-from-top-view-svgrepo-com.svg';
import SearchFilter from '../component/SearchFilter';
import themeContext from '../config/themeContext';
import Almatsurat from '../pages/HomeAlmatsurat';
import Dzikirpagi1 from '../pages/HomeAlmatsurat/Dizikirpagi';
import Keutamaan from '../pages/HomeAlmatsurat/Keutamaan';
import HalamanHadist1 from '../pages/Juz1/Hadist1';
import HalamanHadist10 from '../pages/Juz1/Hadist10';
import HalamanHadist11 from '../pages/Juz1/Hadist11';
import HalamanHadist12 from '../pages/Juz1/Hadist12';
import HalamanHadist13 from '../pages/Juz1/Hadist13';
import HalamanHadist14 from '../pages/Juz1/Hadist14';
import HalamanHadist15 from '../pages/Juz1/Hadist15';
import HalamanHadist16 from '../pages/Juz1/Hadist16';
import HalamanHadist17 from '../pages/Juz1/Hadist17';
import HalamanHadist2 from '../pages/Juz1/Hadist2';
import HalamanHadist3 from '../pages/Juz1/Hadist3';
import HalamanHadist4 from '../pages/Juz1/Hadist4';
import HalamanHadist5 from '../pages/Juz1/Hadist5';
import HalamanHadist6 from '../pages/Juz1/Hadist6';
import HalamanHadist7 from '../pages/Juz1/Hadist7';
import HalamanHadist8 from '../pages/Juz1/Hadist8';
import HalamanHadist9 from '../pages/Juz1/Hadist9';
import HalamanHomeJuz1 from '../pages/Juz1/HomeJuz1';
import HalamanHadist18 from '../pages/Juz2/Hadist18';
import HalamanHadist19 from '../pages/Juz2/Hadist19';
import HalamanHadist20 from '../pages/Juz2/Hadist20';
import HalamanHadist21 from '../pages/Juz2/Hadist21';
import HalamanHadist22 from '../pages/Juz2/Hadist22';
import HalamanHadist23 from '../pages/Juz2/Hadist23';
import HalamanHadist24 from '../pages/Juz2/Hadist24';
import HalamanHadist25 from '../pages/Juz2/Hadist25';
import HalamanHadist26 from '../pages/Juz2/Hadist26';
import HalamanHadist27 from '../pages/Juz2/Hadist27';
import HalamanHadist28 from '../pages/Juz2/Hadist28';
import HalamanHadist29 from '../pages/Juz2/Hadist29';
import HalamanHadist30 from '../pages/Juz2/Hadist30';
import HalamanHadist31 from '../pages/Juz2/Hadist31';
import HalamanHadist32 from '../pages/Juz2/Hadist32';
import HalamanHadist33 from '../pages/Juz2/Hadist33';
import HalamanHadist34 from '../pages/Juz2/Hadist34';
import HalamanHomeJuz2 from '../pages/Juz2/HomeJuz2';
import HalamanHadist35 from '../pages/Juz3/Hadist35';
import HalamanHadist36 from '../pages/Juz3/Hadist36';
import HalamanHadist37 from '../pages/Juz3/Hadist37';
import HalamanHadist38 from '../pages/Juz3/Hadist38';
import HalamanHadist39 from '../pages/Juz3/Hadist39';
import HalamanHadist40 from '../pages/Juz3/Hadist40';
import HalamanHadist41 from '../pages/Juz3/Hadist41';
import HalamanHadist42 from '../pages/Juz3/Hadist42';
import HalamanHadist43 from '../pages/Juz3/Hadist43';
import HalamanHadist44 from '../pages/Juz3/Hadist44';
import HalamanHadist45 from '../pages/Juz3/Hadist45';
import HalamanHadist46 from '../pages/Juz3/Hadist46';
import HalamanHadist47 from '../pages/Juz3/Hadist47';
import HalamanHadist48 from '../pages/Juz3/Hadist48';
import HalamanHadist49 from '../pages/Juz3/Hadist49/indexs';
import HalamanHadist50 from '../pages/Juz3/Hadist50';
import HalamanHadist51 from '../pages/Juz3/Hadist51';
import HalamanHomeJuz3 from '../pages/Juz3/HomeJuz3';
import HalamanHadist52 from '../pages/Juz4/Hadist52';
import HalamanHadist53 from '../pages/Juz4/Hadist53';
import HalamanHadist54 from '../pages/Juz4/Hadist54';
import HalamanHadist55 from '../pages/Juz4/Hadist55';
import HalamanHadist56 from '../pages/Juz4/Hadist56';
import HalamanHadist57 from '../pages/Juz4/Hadist57';
import HalamanHadist58 from '../pages/Juz4/Hadist58';
import HalamanHadist59 from '../pages/Juz4/Hadist59';
import HalamanHadist60 from '../pages/Juz4/Hadist60';
import HalamanHadist61 from '../pages/Juz4/Hadist61';
import HalamanHadist62 from '../pages/Juz4/Hadist62';
import HalamanHadist63 from '../pages/Juz4/Hadist63';
import HalamanHadist64 from '../pages/Juz4/Hadist64';
import HalamanHadist65 from '../pages/Juz4/Hadist65';
import HalamanHadist66 from '../pages/Juz4/Hadist66';
import HalamanHadist67 from '../pages/Juz4/Hadist67';
import HalamanHadist68 from '../pages/Juz4/Hadist68';
import HalamanHomeJuz4 from '../pages/Juz4/HomeJuz4';
import Hadist100 from '../pages/Juz5/100';
import Hadist101 from '../pages/Juz5/101';
import Hadist102 from '../pages/Juz5/102';
import Hadist95 from '../pages/Juz5/95';
import Hadist96 from '../pages/Juz5/96';
import Hadist97 from '../pages/Juz5/97';
import Hadist98 from '../pages/Juz5/98';
import Hadist99 from '../pages/Juz5/99';
import HalamanHadist69 from '../pages/Juz5/Hadist69';
import HalamanHadist70 from '../pages/Juz5/Hadist70';
import HalamanHadist71 from '../pages/Juz5/Hadist71';
import HalamanHadist72 from '../pages/Juz5/Hadist72';
import HalamanHadist73 from '../pages/Juz5/Hadist73';
import HalamanHadist74 from '../pages/Juz5/Hadist74';
import HalamanHadist75 from '../pages/Juz5/Hadist75';
import HalamanHadist76 from '../pages/Juz5/Hadist76';
import HalamanHadist77 from '../pages/Juz5/Hadist77';
import HalamanHadist78 from '../pages/Juz5/Hadist78';
import HalamanHadist79 from '../pages/Juz5/Hadist79';
import HalamanHadist80 from '../pages/Juz5/Hadist80';
import HalamanHadist81 from '../pages/Juz5/Hadist81';
import HalamanHadist82 from '../pages/Juz5/Hadist82';
import HalamanHadist83 from '../pages/Juz5/Hadist83';
import HalamanHadist84 from '../pages/Juz5/Hadist84';
import HalamanHadist85 from '../pages/Juz5/Hadist85';
import HalamanHadist86 from '../pages/Juz5/Hadist86';
import HalamanHadist87 from '../pages/Juz5/Hadist87';
import HalamanHadist88 from '../pages/Juz5/Hadist88';
import HalamanHadist89 from '../pages/Juz5/Hadist89';
import HalamanHadist90 from '../pages/Juz5/Hadist90';
import HalamanHadist91 from '../pages/Juz5/Hadist91';
import HalamanHadist92 from '../pages/Juz5/Hadist92';
import HalamanHadist93 from '../pages/Juz5/Hadist93';
import HalamanHomeJuz5 from '../pages/Juz5/HomeJuz5';
import SearchJuz from '../pages/Juz5/SearchJuz';
import HalamanHadist94 from '../pages/Juz5/hadist94';
import HalamanStart from '../pages/Start';
import HalamanTentang from '../pages/Tentang';
import colors from "../utils/colors/colors";
import Dzikirpagi2 from '../pages/HomeAlmatsurat/Dizikirpagi/index2';
import Dzikirpagi3 from '../pages/HomeAlmatsurat/Dizikirpagi/index3';
import Dzikirpagi4 from '../pages/HomeAlmatsurat/Dizikirpagi/index4';
import Dzikirpagi5 from '../pages/HomeAlmatsurat/Dizikirpagi/index5';
import Dzikirpagi6 from '../pages/HomeAlmatsurat/Dizikirpagi/index6';
import Dzikirpagi7 from '../pages/HomeAlmatsurat/Dizikirpagi/index7';
import Dzikirpagi8 from '../pages/HomeAlmatsurat/Dizikirpagi/index8';
import Dzikirpagi9 from '../pages/HomeAlmatsurat/Dizikirpagi/index9';
import Dzikirpagi10 from '../pages/HomeAlmatsurat/Dizikirpagi/index10';
import Dzikirpagi11 from '../pages/HomeAlmatsurat/Dizikirpagi/index11';
import Dzikirpagi12 from '../pages/HomeAlmatsurat/Dizikirpagi/index12';
import Dzikirpagi13 from '../pages/HomeAlmatsurat/Dizikirpagi/index13';
import Dzikirpagi14 from '../pages/HomeAlmatsurat/Dizikirpagi/index14';
import Dzikirpagi15 from '../pages/HomeAlmatsurat/Dizikirpagi/index15,';
import Dzikirpagi16 from '../pages/HomeAlmatsurat/Dizikirpagi/index16';
import Dzikirpagi17 from '../pages/HomeAlmatsurat/Dizikirpagi/index17';
import Dzikirpagi18 from '../pages/HomeAlmatsurat/Dizikirpagi/index18';
import Dzikirpagi19 from '../pages/HomeAlmatsurat/Dizikirpagi/index19';
import Dzikirpagi20 from '../pages/HomeAlmatsurat/Dizikirpagi/index20';
import Dzikirpagi21 from '../pages/HomeAlmatsurat/Dizikirpagi/index21';
import Dzikirpagi22 from '../pages/HomeAlmatsurat/Dizikirpagi/index22';
import Dzikirpetang1 from '../pages/HomeAlmatsurat/Dzikirpetang';
import Dzikirpetang2 from '../pages/HomeAlmatsurat/Dzikirpetang/index2';
import Dzikirpetang3 from '../pages/HomeAlmatsurat/Dzikirpetang/index3';
import Dzikirpetang4 from '../pages/HomeAlmatsurat/Dzikirpetang/index4';
import Dzikirpetang15 from '../pages/HomeAlmatsurat/Dzikirpetang/index15';
import Dzikirpetang5 from '../pages/HomeAlmatsurat/Dzikirpetang/index5';
import Dzikirpetang6 from '../pages/HomeAlmatsurat/Dzikirpetang/index6';
import Dzikirpetang7 from '../pages/HomeAlmatsurat/Dzikirpetang/index7';
import Dzikirpetang8 from '../pages/HomeAlmatsurat/Dzikirpetang/index8';
import Dzikirpetang9 from '../pages/HomeAlmatsurat/Dzikirpetang/index9';
import Dzikirpetang10 from '../pages/HomeAlmatsurat/Dzikirpetang/index10';
import Dzikirpetang11 from '../pages/HomeAlmatsurat/Dzikirpetang/index11';
import Dzikirpetang12 from '../pages/HomeAlmatsurat/Dzikirpetang/index12';
import Dzikirpetang13 from '../pages/HomeAlmatsurat/Dzikirpetang/index13';
import Dzikirpetang14 from '../pages/HomeAlmatsurat/Dzikirpetang/index14';
import Dzikirpetang16 from '../pages/HomeAlmatsurat/Dzikirpetang/index16';
import Dzikirpetang17 from '../pages/HomeAlmatsurat/Dzikirpetang/index17';
import Dzikirpetang18 from '../pages/HomeAlmatsurat/Dzikirpetang/index18';
import Dzikirpetang19 from '../pages/HomeAlmatsurat/Dzikirpetang/index19';
import Dzikirpetang20 from '../pages/HomeAlmatsurat/Dzikirpetang/index20';
import Dzikirpetang21 from '../pages/HomeAlmatsurat/Dzikirpetang/index21';









const MyStack = createNativeStackNavigator();
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

export default function ScreenStack() {

 

  

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

      <MyStack.Navigator initialRouteName='HalamanStart'>
      <MyStack.Screen name="HalamanStart" component={HalamanStart} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHomeJuz1" component={HalamanHomeJuz1}  options={{headerShown:false}}  />
      <MyStack.Screen name="HalamanHadist1" component={HalamanHadist1} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist2" component={HalamanHadist2} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist3" component={HalamanHadist3} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist4" component={HalamanHadist4} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist5" component={HalamanHadist5} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist6" component={HalamanHadist6} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist7" component={HalamanHadist7} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist8" component={HalamanHadist8} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist9" component={HalamanHadist9} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist10" component={HalamanHadist10} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist11" component={HalamanHadist11} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist12" component={HalamanHadist12} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist13" component={HalamanHadist13} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist14" component={HalamanHadist14} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist15" component={HalamanHadist15} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist16" component={HalamanHadist16} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist17" component={HalamanHadist17} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHomeJuz2" component={HalamanHomeJuz2} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist18" component={HalamanHadist18} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist19" component={HalamanHadist19} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist20" component={HalamanHadist20} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist21" component={HalamanHadist21} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist22" component={HalamanHadist22} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist23" component={HalamanHadist23} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist24" component={HalamanHadist24} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist25" component={HalamanHadist25} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist26" component={HalamanHadist26} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist27" component={HalamanHadist27} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist28" component={HalamanHadist28} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist29" component={HalamanHadist29} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist30" component={HalamanHadist30} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist31" component={HalamanHadist31} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist32" component={HalamanHadist32} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist33" component={HalamanHadist33} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist34" component={HalamanHadist34} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHomeJuz3" component={HalamanHomeJuz3} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist35" component={HalamanHadist35} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist36" component={HalamanHadist36} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist37" component={HalamanHadist37} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist38" component={HalamanHadist38} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist39" component={HalamanHadist39} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist40" component={HalamanHadist40} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist41" component={HalamanHadist41} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist42" component={HalamanHadist42} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist43" component={HalamanHadist43} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist44" component={HalamanHadist44} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist45" component={HalamanHadist45} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist46" component={HalamanHadist46} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist47" component={HalamanHadist47} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist48" component={HalamanHadist48} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist49" component={HalamanHadist49} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist50" component={HalamanHadist50} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist51" component={HalamanHadist51} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHomeJuz4" component={HalamanHomeJuz4} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist52" component={HalamanHadist52} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist53" component={HalamanHadist53} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist54" component={HalamanHadist54} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist55" component={HalamanHadist55} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist56" component={HalamanHadist56} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist57" component={HalamanHadist57} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist58" component={HalamanHadist58} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist59" component={HalamanHadist59} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist60" component={HalamanHadist60} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist61" component={HalamanHadist61} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist62" component={HalamanHadist62} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist63" component={HalamanHadist63} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist64" component={HalamanHadist64} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist65" component={HalamanHadist65} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist66" component={HalamanHadist66} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist67" component={HalamanHadist67} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist68" component={HalamanHadist68} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHomeJuz5" component={HalamanHomeJuz5} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist69" component={HalamanHadist69} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist70" component={HalamanHadist70} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist71" component={HalamanHadist71} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist72" component={HalamanHadist72} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist73" component={HalamanHadist73} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist74" component={HalamanHadist74} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist75" component={HalamanHadist75} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist76" component={HalamanHadist76} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist77" component={HalamanHadist77} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist78" component={HalamanHadist78} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist79" component={HalamanHadist79} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist80" component={HalamanHadist80} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist81" component={HalamanHadist81} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist82" component={HalamanHadist82} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist83" component={HalamanHadist83} options={{headerShown:false}}/> 
      <MyStack.Screen name="HalamanHadist84" component={HalamanHadist84} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist85" component={HalamanHadist85} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist86" component={HalamanHadist86} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist87" component={HalamanHadist87} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist88" component={HalamanHadist88} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist89" component={HalamanHadist89} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist90" component={HalamanHadist90} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist91" component={HalamanHadist91} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist92" component={HalamanHadist92} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist93" component={HalamanHadist93} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist94" component={HalamanHadist94} options={{headerShown:false}}/>  
      <MyStack.Screen name="HalamanHadist95" component={Hadist95} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist96" component={Hadist96} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist97" component={Hadist97} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist98" component={Hadist98} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist99" component={Hadist99} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist100" component={Hadist100} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist101" component={Hadist101} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanHadist102" component={Hadist102} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanTentang" component={HalamanTentang} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanSearchJuz" component={SearchJuz} options={{headerShown:false}}/>
      <MyStack.Screen name="HalamanSeachFilter" component={SearchFilter} options={{headerShown:false}}/>
        <MyStack.Screen name="HalamanAlmatsurat" component={Almatsurat} options={{headerShown:false}}/>
        <MyStack.Screen name="HalamanKeutamaan" component={Keutamaan} options={{headerShown:false}}/>
        <MyStack.Screen name="HalamaDzikirpagi1" component={Dzikirpagi1} options={{headerShown:false}}/>
        <MyStack.Screen name="HalamaDzikirpagi2" component={Dzikirpagi2} options={{headerShown:false}}/>
          <MyStack.Screen name="HalamaDzikirpagi3" component={Dzikirpagi3} options={{headerShown:false}}/>
            <MyStack.Screen name="HalamaDzikirpagi4" component={Dzikirpagi4} options={{headerShown:false}}/>
              <MyStack.Screen name="HalamaDzikirpagi5" component={Dzikirpagi5} options={{headerShown:false}}/>
                <MyStack.Screen name="HalamaDzikirpagi6" component={Dzikirpagi6} options={{headerShown:false}}/>
                  <MyStack.Screen name="HalamaDzikirpagi7" component={Dzikirpagi7} options={{headerShown:false}}/>
                    <MyStack.Screen name="HalamaDzikirpagi8" component={Dzikirpagi8} options={{headerShown:false}}/>
                    <MyStack.Screen name="HalamaDzikirpagi9" component={Dzikirpagi9} options={{headerShown:false}}/>
                    <MyStack.Screen name="HalamaDzikirpagi10" component={Dzikirpagi10} options={{headerShown:false}}/>
                      <MyStack.Screen name="HalamaDzikirpagi11" component={Dzikirpagi11} options={{headerShown:false}}/>
                      <MyStack.Screen name="HalamaDzikirpagi12" component={Dzikirpagi12} options={{headerShown:false}}/>
                      <MyStack.Screen name="HalamaDzikirpagi13" component={Dzikirpagi13} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi14" component={Dzikirpagi14} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi15" component={Dzikirpagi15} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi16" component={Dzikirpagi16} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi17" component={Dzikirpagi17} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi18" component={Dzikirpagi18} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi19" component={Dzikirpagi19} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi20" component={Dzikirpagi20} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi21" component={Dzikirpagi21} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpagi22" component={Dzikirpagi22} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang1" component={Dzikirpetang1} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang2" component={Dzikirpetang2} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang3" component={Dzikirpetang3} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang4" component={Dzikirpetang4} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang5" component={Dzikirpetang5} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang6" component={Dzikirpetang6} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang7" component={Dzikirpetang7} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang8" component={Dzikirpetang8} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang9" component={Dzikirpetang9} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang10" component={Dzikirpetang10} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang11" component={Dzikirpetang11} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang12" component={Dzikirpetang12} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang13" component={Dzikirpetang13} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang14" component={Dzikirpetang14} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang15" component={Dzikirpetang15} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang16" component={Dzikirpetang16} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang17" component={Dzikirpetang17} options={{headerShown:false}}/>
                        <MyStack.Screen name="HalamaDzikirpetang18" component={Dzikirpetang18} options={{headerShown:false}}/>
                          <MyStack.Screen name="HalamaDzikirpetang19" component={Dzikirpetang19} options={{headerShown:false}}/>
                            <MyStack.Screen name="HalamaDzikirpetang20" component={Dzikirpetang20} options={{headerShown:false}}/>
                              <MyStack.Screen name="HalamaDzikirpetang21" component={Dzikirpetang21} options={{headerShown:false}}/>
                  

      </MyStack.Navigator>

  );
}





