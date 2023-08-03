import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import themeContext from '../../../config/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import Search from '../../../assets/svg/Search.svg'
import SearchIcon from '../../../assets/svg/SearchIcon.svg'
import Menu from '../../../assets/svg/menu.svg'
import { useNavigation } from '@react-navigation/native';
import Alquran from '../../../assets/svg/alquran.svg'



const HalamanHomeJuz1 = ({navigation}) => {

  state={
    backgroundColor: 'black',
    backgroundColor2: '#419F67'
  };
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (


    
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  
<View>



<View style={{  flexDirection:'row' ,backgroundColor: theme.topbar, padding:10, paddingTop:20,}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>


<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>JUZ 1</Text>

<TouchableOpacity onPress={() => navigation.navigate('HalamanSearchJuz')}>
<SearchIcon style={{paddingLeft:'100%', left:58}} width={24} height={24} fill="#fff" />
</TouchableOpacity>
</View> 

<View>
  
</View>

</View>
<ScrollView>

<View style={{alignItems:'center', paddingTop:20}}>

<View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanHadist1')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-1</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist2')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-2</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist3')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-3</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist4')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-4</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10,}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist5')}    style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-5</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10,}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist6')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-6</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist7')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-7</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist8')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-8</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist9')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-9</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist10')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-10</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist11')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-11</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist12')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-12</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist13')}style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-13</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist14')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-14</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist15')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-15</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist16')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-16</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity   onPress={()=> navigation.navigate('HalamanHadist17')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-17</Text>
  </TouchableOpacity>


</View>
</View>

<View style={{paddingVertical:10}}>

</View>


</ScrollView>

<View>
  <View style={{padding:10, backgroundColor:'#000', flexDirection:'row', justifyContent:'space-around'}}>

<View>
<TouchableOpacity>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquranhijau.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 1</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity onPress={()=> navigation.navigate('HalamanHomeJuz2')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 2</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity  onPress={()=> navigation.navigate('HalamanHomeJuz3')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 3</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity  onPress={()=> navigation.navigate('HalamanHomeJuz4')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 4</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity  onPress={()=> navigation.navigate('HalamanHomeJuz5')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 5</Text>
</TouchableOpacity>
</View>

  </View>
</View>


    </View>
    

  )
}

export default HalamanHomeJuz1