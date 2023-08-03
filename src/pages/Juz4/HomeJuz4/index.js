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
const HalamanHomeJuz4 = ({navigation}) => {
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  

<View style={{flexDirection:'row', backgroundColor: theme.topbar, padding:10, paddingTop:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>


<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>JUZ 4</Text>


<TouchableOpacity onPress={() => navigation.navigate('HalamanSearchJuz')}>
<SearchIcon style={{paddingLeft:'100%', left:58}} width={24} height={24} fill="#fff" />
</TouchableOpacity>


</View>   
<ScrollView>

<View style={{alignItems:'center', paddingTop:20}}>

<View style={{padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanHadist52')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-52</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist53')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-53</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist54')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-54</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist55')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-55</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist56')}    style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-56</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist57')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-57</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist58')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-58</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist59')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-59</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist60')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-60</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist61')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-61</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist62')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-62</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist63')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-63</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist64')}style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-64</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist65')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-65</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist66')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-66</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist67')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-67</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist68')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-68</Text>
  </TouchableOpacity>


</View>
</View>

<View style={{paddingVertical:10}}>

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
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquranhijau.png')} />
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

export default HalamanHomeJuz4