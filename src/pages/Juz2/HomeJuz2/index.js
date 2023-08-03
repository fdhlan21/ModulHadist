import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import themeContext from '../../../config/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import Search from '../../../assets/svg/Search.svg'
import SearchIcon from '../../../assets/svg/SearchIcon.svg'
import Menu from '../../../assets/svg/menu.svg'
const HalamanHomeJuz2 = ({navigation}) => {

   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  

<View style={{flexDirection:'row', backgroundColor: theme.topbar, padding:10, paddingTop:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>


<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>JUZ 2</Text>

<TouchableOpacity onPress={() => navigation.navigate('HalamanSearchJuz')}>
<SearchIcon style={{paddingLeft:'100%', left:58}} width={24} height={24} fill="#fff" />
</TouchableOpacity>
</View>   
<ScrollView>

<View style={{alignItems:'center', paddingTop:20}}>

<View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanHadist18')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-18</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist19')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-19</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist20')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-20</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist21')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-21</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist22')}    style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-22</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist23')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-23</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist24')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-24</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist25')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-25</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist26')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-26</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist27')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-27</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist28')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-28</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist29')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-29</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist30')}style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-30</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist31')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-31</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist32')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-32</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist33')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-33</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist34')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-34</Text>
  </TouchableOpacity>


</View>
</View>




</ScrollView>


<View>
  <View style={{padding:10, backgroundColor:'#000', flexDirection:'row', justifyContent:'space-around'}}>

<View>
<TouchableOpacity onPress={()=> navigation.navigate('HalamanHomeJuz1')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 1</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity onPress={()=> navigation.navigate('HalamanHomeJuz2')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquranhijau.png')} />
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

export default HalamanHomeJuz2