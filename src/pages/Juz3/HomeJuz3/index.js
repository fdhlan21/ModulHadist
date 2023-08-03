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
const HalamanHomeJuz3 = ({navigation}) => {
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);


  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  

<View style={{flexDirection:'row', backgroundColor: theme.topbar, padding:10, paddingTop:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<Menu style={{bottom:5}} width={34} height={34} fill={theme.menubar} />
</TouchableOpacity>


<Text style={{fontFamily:'Alata-Regular', color: theme.texttopbar, fontSize:23, fontWeight:'bold' , bottom:3, left:5}}>JUZ 3</Text>


<TouchableOpacity onPress={() => navigation.navigate('HalamanSearchJuz')}>
<SearchIcon style={{paddingLeft:'100%', left:58}} width={24} height={24} fill="#fff" />
</TouchableOpacity>


</View>   
<ScrollView>

<View style={{alignItems:'center', paddingTop:20}}>

<View style={{padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={() => navigation.navigate('HalamanHadist35')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-35</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist36')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-36</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist37')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-37</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist38')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-38</Text>
  </TouchableOpacity>


</View>


<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist39')}    style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-39</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist40')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-40</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist41')}  style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-41</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist42')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-42</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist43')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-43</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist44')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-44</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist45')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-45</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist46')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-46</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity  onPress={()=> navigation.navigate('HalamanHadist47')}style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-47</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist48')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-48</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist49')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-49</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist50')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-50</Text>
  </TouchableOpacity>


</View>

<View style={{paddingTop:10, padding:10, flexDirection:'row'}}>

  <TouchableOpacity onPress={()=> navigation.navigate('HalamanHadist51')} style={{padding:10, backgroundColor: theme.modulhadist, width:'100%', height:82, borderRadius:15}}>
<View style={{padding:1, backgroundColor:colors.primary,  height:20, width:98, borderRadius:10}}>
  <Text style={{color:'#fff', fontFamily:'Alata-Regular', textAlign:'center', bottom:3,}}>Modul</Text>
</View>
<Text style={{fontFamily:'Alata-Regular', color:theme.color, fontSize:20}}>HADIST Ke-51</Text>
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
 <Image style={{width:36, height:33}} source={require('../../../assets/img/alquranhijau.png')} />
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

export default HalamanHomeJuz3