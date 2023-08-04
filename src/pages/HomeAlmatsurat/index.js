import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Menu from '../../assets/svg/menu.svg';
import themeContext from '../../config/themeContext';
import colors from '../../utils/colors/colors';
const Almatsurat = ({navigation}) => {
 
//   state={
//     backgroundColor: 'black',
//     backgroundColor2: '#419F67'
//   };
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (


    
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  
<View>



<View style={{  flexDirection:'row' ,backgroundColor: theme.topbar, padding:10, paddingTop:20,}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>


<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>Dzikir Pagi-Petang</Text>

</View> 

<View>
<View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanKeutamaan')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Poppins-SemiBold', textAlign:'center', bottom:1, fontSize:13}}>Al-Ma'tsurat</Text>
</View>
<Text style={{fontFamily:'Poppins-Regular', color:theme.color, fontSize:20}}>Keutamaan</Text>
  </TouchableOpacity>


</View>
</View>


<View>
<View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamaDzikirpagi1')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Poppins-SemiBold', textAlign:'center', bottom:1, fontSize:13}}>Al-Ma'tsurat</Text>
</View>
<Text style={{fontFamily:'Poppins-Regular', color:theme.color, fontSize:20}}>Dzikir Pagi</Text>
  </TouchableOpacity>


</View>
</View>


<View>
<View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamaDzikirpetang1')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Poppins-SemiBold', textAlign:'center', bottom:1, fontSize:13}}>Al-Ma'tsurat</Text>
</View>
<Text style={{fontFamily:'Poppins-Regular', color:theme.color, fontSize:20}}>Dzikir Petang</Text>
  </TouchableOpacity>


</View>
</View>
</View>
<ScrollView>

</ScrollView>



    </View>
    

  )
}

export default Almatsurat

const styles = StyleSheet.create({})