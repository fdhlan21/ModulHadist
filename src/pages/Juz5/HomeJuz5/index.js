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
const HalamanHomeJuz5 = ({navigation}) => {
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  

<View style={{flexDirection:'row', backgroundColor: theme.topbar, padding:10, paddingTop:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>



<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>JUZ 5</Text>


<TouchableOpacity onPress={() => navigation.navigate('HalamanSearchJuz')}>
<SearchIcon style={{paddingLeft:'100%', left:58}} width={24} height={24} fill="#fff" />
</TouchableOpacity>

</View>   
<ScrollView>

<View style={{alignItems:'center', paddingTop:20}}>

<View style={{padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanHadist69')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-69</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist70')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-70</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist71')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-71</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist72')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-72</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist73')}    style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-73</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist74')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-74</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist75')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-75</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist76')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-76</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist77')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-77</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist78')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-78</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist79')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-79</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist80')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-80</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist81')}style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-81</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist82')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-82</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist83')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-83</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist84')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-84</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist85')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-85</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist86')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-86</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist87')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-87</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist88')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-88</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist89')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-89</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist90')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-90</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist91')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-91</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist92')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-92</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist93')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-93</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist94')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-94</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist95')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-95</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist96')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-96</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist97')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-97</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist98')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-98</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist99')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-99</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist100')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-100</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist101')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-101</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist102')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-102</Text>
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
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquran.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 4</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity  onPress={()=> navigation.navigate('HalamanHomeJuz5')}>
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquranhijau.png')} />
 <Text style={{fontFamily:'Alata-Regular', color:'#fff', fontSize:12, textAlign:'center'}}>Juz 5</Text>
</TouchableOpacity>
</View>

  </View>
</View>

    </View>
  )
}

export default HalamanHomeJuz5