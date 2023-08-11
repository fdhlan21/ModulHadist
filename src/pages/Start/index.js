import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../../config/themeContext';
import colors from '../../utils/colors/colors';



const HalamanStart = ({navigation}) => {
   

  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

   
  return (
    <View style={{flex:1, backgroundColor: theme.background}}>
   <SafeAreaView>
   <ScrollView>

   

<View style={{marginTop:'30%'}}>


<View style={{alignItems:'center', paddingTop:50}}>
  <Image style={{width:133, height:132, }}  source={require('../../assets/img/logomhi.png')} />
  <Text style={{fontFamily:'BebasNeue-Regular', fontSize:49, top:10, color:colors.textlogo}}>MODUL HADIST</Text>
  <Text style={{fontFamily:'BebasNeue-Regular',  fontSize:25, top:5, color: theme.color, letterSpacing:2.5}}>UNTUK TINGKAT DASAR</Text>
</View>


<View style={{alignItems:'center', paddingTop:60, padding:10}}> 


<TouchableOpacity  onPress={() => navigation.navigate('HalamanHomeJuz1')} style={{backgroundColor:mode === true ?    theme.dark  : '#E2E2E2' , height:45, width:289, borderRadius:10, borderWidth:1, borderColor:mode === true? theme.color : '#fff',}}>
  <Text style={{ fontFamily:'BebasNeue-Regular',textAlign:'center', fontSize:30,  color: theme.color, top:4}}>HADIST</Text>
</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('HalamanAlmatsurat')} style={{backgroundColor:mode === true ?    theme.dark  : '#E2E2E2' , height:45, width:289, borderRadius:10, borderWidth:1, borderColor:mode === true? theme.color : '#fff',marginTop:20,}}>
  <Text style={{ fontFamily:'BebasNeue-Regular',textAlign:'center', fontSize:30,  color: theme.color, top:4}}>AL-MA'TSURAT</Text>
</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('HalamanTentang')} style={{backgroundColor:mode === true ?    theme.dark  : '#E2E2E2' , height:45, width:289, borderRadius:10, borderWidth:1, borderColor:mode === true? theme.color : '#fff', marginTop:20}}>
  <Text style={{ fontFamily:'BebasNeue-Regular',textAlign:'center', fontSize:30,  color: theme.color, top:4}}>TENTANG</Text>
</TouchableOpacity>


</View>


<View style={{alignItems:'center', marginTop:10,}}>
<View style={{width:'80%',}}>

<View style={{flexDirection:'row', justifyContent:'flex-end'}}>
<Text style={{fontFamily:'Poppins-Regular',  color: theme.color}}>{mode === true ?  'Mode Gelap' : 'Mode Gelap'}</Text>
<Switch  style={{}}  value={mode} onValueChange={(value) => {
  setMode(value);
  EventRegister.emit("changeTheme", value);
}}
      trackColor={{ false: 'gray', true: 'white' }}
/>
</View>


</View>
</View>





  
</View>
</ScrollView>
</SafeAreaView>

    </View>
  )
}

export default HalamanStart