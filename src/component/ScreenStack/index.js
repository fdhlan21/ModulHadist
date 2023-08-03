// In App.js in a new project

import React, {useEffect, useState, } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../../config/theme';
import themeContext from '../../config/themeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//IMPORT PAGES//
import HalamanStart from '../../pages/Start';
import HalamanHomeJuz1 from '../../pages/Juz1/HomeJuz1';
import HalamanHadist1 from '../../pages/Juz1/Hadist1';
import HalamanHadist2 from '../../pages/Juz1/Hadist2';
import HalamanHadist3 from '../../pages/Juz1/Hadist3';
import HalamanHadist4 from '../../pages/Juz1/Hadist4';
import HalamanHadist5 from '../../pages/Juz1/Hadist5';
import HalamanHadist6 from '../../pages/Juz1/Hadist6';
import HalamanHadist7 from '../../pages/Juz1/Hadist7';
import HalamanHadist8 from '../../pages/Juz1/Hadist8';
import HalamanHadist9 from '../../pages/Juz1/Hadist9';
import HalamanHadist10 from '../../pages/Juz1/Hadist10';
import HalamanHadist11 from '../../pages/Juz1/Hadist11';
import HalamanHadist12 from '../../pages/Juz1/Hadist12';
import HalamanHadist13 from '../../pages/Juz1/Hadist13';
import HalamanHadist14 from '../../pages/Juz1/Hadist14';
import HalamanHadist15 from '../../pages/Juz1/Hadist15';
import HalamanHadist16 from '../../pages/Juz1/Hadist16';
import HalamanHadist17 from '../../pages/Juz1/Hadist17';
import HalamanHomeJuz2 from '../../pages/Juz2/HomeJuz2';
import HalamanHadist18 from '../../pages/Juz2/Hadist18';
import HalamanHadist19 from '../../pages/Juz2/Hadist19';
import HalamanHadist20 from '../../pages/Juz2/Hadist20';
import HalamanHadist21 from '../../pages/Juz2/Hadist21';
import HalamanHadist22 from '../../pages/Juz2/Hadist22';
import HalamanHadist23 from '../../pages/Juz2/Hadist23';
import HalamanHadist24 from '../../pages/Juz2/Hadist24';
import HalamanHadist25 from '../../pages/Juz2/Hadist25';
import HalamanHadist27 from '../../pages/Juz2/Hadist27';
import HalamanHadist26 from '../../pages/Juz2/Hadist26';
import HalamanHadist28 from '../../pages/Juz2/Hadist28';
import HalamanHadist29 from '../../pages/Juz2/Hadist29';
import HalamanHadist30 from '../../pages/Juz2/Hadist30';
import HalamanHadist31 from '../../pages/Juz2/Hadist31';
import HalamanHadist32 from '../../pages/Juz2/Hadist32';
import HalamanHadist33 from '../../pages/Juz2/Hadist33';
import HalamanHadist34 from '../../pages/Juz2/Hadist34';
import HalamanHomeJuz3 from '../../pages/Juz3/HomeJuz3';
import HalamanHadist35 from '../../pages/Juz3/Hadist35';
import HalamanHadist36 from '../../pages/Juz3/Hadist36';
import HalamanHadist37 from '../../pages/Juz3/Hadist37';
import HalamanHadist38 from '../../pages/Juz3/Hadist38';
import HalamanHadist39 from '../../pages/Juz3/Hadist39';
import HalamanHadist40 from '../../pages/Juz3/Hadist40';
import HalamanHadist41 from '../../pages/Juz3/Hadist41';
import HalamanHadist42 from '../../pages/Juz3/Hadist42';
import HalamanHadist43 from '../../pages/Juz3/Hadist43';
import HalamanHadist44 from '../../pages/Juz3/Hadist44';
import HalamanHadist45 from '../../pages/Juz3/Hadist45';
import HalamanHadist46 from '../../pages/Juz3/Hadist46';
import HalamanHadist47 from '../../pages/Juz3/Hadist47';
import HalamanHadist48 from '../../pages/Juz3/Hadist48';
import HalamanHadist49 from '../../pages/Juz3/Hadist49/indexs';
import HalamanHadist50 from '../../pages/Juz3/Hadist50';
import HalamanHadist51 from '../../pages/Juz3/Hadist51';
import HalamanHomeJuz4 from '../../pages/Juz4/HomeJuz4';
import HalamanHadist52 from '../../pages/Juz4/Hadist52';
import HalamanHadist53 from '../../pages/Juz4/Hadist53';
import HalamanHadist54 from '../../pages/Juz4/Hadist54';
import HalamanHadist55 from '../../pages/Juz4/Hadist55';
import HalamanHadist56 from '../../pages/Juz4/Hadist56';
import HalamanHadist57 from '../../pages/Juz4/Hadist57';
import HalamanHadist58 from '../../pages/Juz4/Hadist58';
import HalamanHadist59 from '../../pages/Juz4/Hadist59';
import HalamanHadist60 from '../../pages/Juz4/Hadist60';
import HalamanHadist61 from '../../pages/Juz4/Hadist61';
import HalamanHadist62 from '../../pages/Juz4/Hadist62';
import HalamanHadist63 from '../../pages/Juz4/Hadist63';
import HalamanHadist64 from '../../pages/Juz4/Hadist64';
import HalamanHadist65 from '../../pages/Juz4/Hadist65';
import HalamanHadist66 from '../../pages/Juz4/Hadist66';
import HalamanHadist67 from '../../pages/Juz4/Hadist67';
import HalamanHadist68 from '../../pages/Juz4/Hadist68';
import HalamanHomeJuz5 from '../../pages/Juz5/HomeJuz5';
import HalamanHadist69 from '../../pages/Juz5/Hadist69';
import HalamanHadist70 from '../../pages/Juz5/Hadist70';
import HalamanHadist71 from '../../pages/Juz5/Hadist71';
import HalamanHadist72 from '../../pages/Juz5/Hadist72';
import HalamanHadist73 from '../../pages/Juz5/Hadist73';
import HalamanHadist74 from '../../pages/Juz5/Hadist74';
import HalamanHadist75 from '../../pages/Juz5/Hadist75';
import HalamanHadist76 from '../../pages/Juz5/Hadist76';
import HalamanHadist77 from '../../pages/Juz5/Hadist77';
import HalamanHadist78 from '../../pages/Juz5/Hadist78';
import HalamanHadist79 from '../../pages/Juz5/Hadist79';
import HalamanHadist80 from '../../pages/Juz5/Hadist80';
import HalamanHadist81 from '../../pages/Juz5/Hadist81';
import HalamanHadist82 from '../../pages/Juz5/Hadist82';
import HalamanHadist83 from '../../pages/Juz5/Hadist83';
import HalamanHadist84 from '../../pages/Juz5/Hadist84';
import HalamanHadist85 from '../../pages/Juz5/Hadist85';
import HalamanHadist86 from '../../pages/Juz5/Hadist86';
import HalamanHadist87 from '../../pages/Juz5/Hadist87';
import HalamanHadist88 from '../../pages/Juz5/Hadist88';
import HalamanHadist89 from '../../pages/Juz5/Hadist89';
import HalamanHadist90 from '../../pages/Juz5/Hadist90';
import HalamanHadist91 from '../../pages/Juz5/Hadist91';
import HalamanHadist92 from '../../pages/Juz5/Hadist92';
import HalamanHadist93 from '../../pages/Juz5/Hadist93';
import HalamanHadist94 from '../../pages/Juz5/hadist94';
import Hadist95 from '../../pages/Juz5/95';
import Hadist96 from '../../pages/Juz5/96';
import Hadist97 from '../../pages/Juz5/97';
import Hadist98 from '../../pages/Juz5/98';
import Hadist99 from '../../pages/Juz5/99';
import Hadist100 from '../../pages/Juz5/100';
import Hadist101 from '../../pages/Juz5/101';
import Hadist102 from '../../pages/Juz5/102';
import HalamanTentang from '../../pages/Tentang';

import SearchFilter from '../SearchFilter';
import SearchJuz from '../../pages/Juz5/SearchJuz';








const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const Tabs = () => {


return(


<Tab.Navigator  >
    <Tab.Screen  name='Juz 1' component={HalamanHomeJuz1} />
    <Tab.Screen  name='Juz 2' component={HalamanHomeJuz2} />
    <Tab.Screen  name='Juz 3' component={HalamanHomeJuz3} />
    <Tab.Screen  name='Juz 4' component={HalamanHomeJuz4} />
    <Tab.Screen  name='Juz 5' component={HalamanHomeJuz5} />
</Tab.Navigator>


);
};
 


export default function MyStack() {

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
    
<themeContext.Provider value={mode === true  ? theme.light : theme.dark }>
    <NavigationContainer theme={mode === true ?  DarkTheme: DefaultTheme}>
      <Stack.Navigator initialRouteName='HalamanStart'>
      <Stack.Screen name="HalamanStart" component={HalamanStart} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHomeJuz1" component={HalamanHomeJuz1} options={{headerShown:false}}  />
      <Stack.Screen name="HalamanHadist1" component={HalamanHadist1} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist2" component={HalamanHadist2} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist3" component={HalamanHadist3} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist4" component={HalamanHadist4} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist5" component={HalamanHadist5} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist6" component={HalamanHadist6} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist7" component={HalamanHadist7} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist8" component={HalamanHadist8} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist9" component={HalamanHadist9} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist10" component={HalamanHadist10} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist11" component={HalamanHadist11} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist12" component={HalamanHadist12} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist13" component={HalamanHadist13} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist14" component={HalamanHadist14} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist15" component={HalamanHadist15} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist16" component={HalamanHadist16} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist17" component={HalamanHadist17} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHomeJuz2" component={HalamanHomeJuz2} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist18" component={HalamanHadist18} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist19" component={HalamanHadist19} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist20" component={HalamanHadist20} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist21" component={HalamanHadist21} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist22" component={HalamanHadist22} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist23" component={HalamanHadist23} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist24" component={HalamanHadist24} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist25" component={HalamanHadist25} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist26" component={HalamanHadist26} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist27" component={HalamanHadist27} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist28" component={HalamanHadist28} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist29" component={HalamanHadist29} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist30" component={HalamanHadist30} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist31" component={HalamanHadist31} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist32" component={HalamanHadist32} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist33" component={HalamanHadist33} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist34" component={HalamanHadist34} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHomeJuz3" component={HalamanHomeJuz3} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist35" component={HalamanHadist35} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist36" component={HalamanHadist36} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist37" component={HalamanHadist37} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist38" component={HalamanHadist38} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist39" component={HalamanHadist39} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist40" component={HalamanHadist40} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist41" component={HalamanHadist41} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist42" component={HalamanHadist42} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist43" component={HalamanHadist43} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist44" component={HalamanHadist44} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist45" component={HalamanHadist45} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist46" component={HalamanHadist46} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist47" component={HalamanHadist47} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist48" component={HalamanHadist48} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist49" component={HalamanHadist49} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist50" component={HalamanHadist50} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist51" component={HalamanHadist51} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHomeJuz4" component={HalamanHomeJuz4} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist52" component={HalamanHadist52} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist53" component={HalamanHadist53} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist54" component={HalamanHadist54} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist55" component={HalamanHadist55} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist56" component={HalamanHadist56} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist57" component={HalamanHadist57} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist58" component={HalamanHadist58} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist59" component={HalamanHadist59} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist60" component={HalamanHadist60} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist61" component={HalamanHadist61} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist62" component={HalamanHadist62} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist63" component={HalamanHadist63} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist64" component={HalamanHadist64} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist65" component={HalamanHadist65} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist66" component={HalamanHadist66} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist67" component={HalamanHadist67} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist68" component={HalamanHadist68} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHomeJuz5" component={HalamanHomeJuz5} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist69" component={HalamanHadist69} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist70" component={HalamanHadist70} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist71" component={HalamanHadist71} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist72" component={HalamanHadist72} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist73" component={HalamanHadist73} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist74" component={HalamanHadist74} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist75" component={HalamanHadist75} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist76" component={HalamanHadist76} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist77" component={HalamanHadist77} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist78" component={HalamanHadist78} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist79" component={HalamanHadist79} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist80" component={HalamanHadist80} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist81" component={HalamanHadist81} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist82" component={HalamanHadist82} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist83" component={HalamanHadist83} options={{headerShown:false}}/> 
      <Stack.Screen name="HalamanHadist84" component={HalamanHadist84} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist85" component={HalamanHadist85} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist86" component={HalamanHadist86} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist87" component={HalamanHadist87} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist88" component={HalamanHadist88} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist89" component={HalamanHadist89} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist90" component={HalamanHadist90} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist91" component={HalamanHadist91} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist92" component={HalamanHadist92} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist93" component={HalamanHadist93} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist94" component={HalamanHadist94} options={{headerShown:false}}/>  
      <Stack.Screen name="HalamanHadist95" component={Hadist95} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist96" component={Hadist96} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist97" component={Hadist97} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist98" component={Hadist98} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist99" component={Hadist99} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist100" component={Hadist100} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist101" component={Hadist101} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanHadist102" component={Hadist102} options={{headerShown:false}}/>
      <Stack.Screen name="HalamanTentang" component={HalamanTentang} options={{headerShown:false}}/>
       <Stack.Screen name="HalamanSearchJuz" component={SearchJuz} options={{headerShown:false}}/>
       <Stack.Screen name="HalamanSeachFilter" component={SearchFilter} options={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>
    </themeContext.Provider>

  );
}





