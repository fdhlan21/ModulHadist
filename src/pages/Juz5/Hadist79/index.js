import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import themeContext from '../../../config/themeContext';
import LeftArrow from '../../../assets/svg/LeftArrow.svg'
import Clipboard from '@react-native-clipboard/clipboard';


const HalamanHadist79 = ({navigation}) => {
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);

  const[selectedText, setSelectedText] = useState('');
       const handleCopy = () => {
       Clipboard.setString(selectedText);
       alert('Teks berhasil disalin!');
                                       };


  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  
  

<View style={{flexDirection:'row', backgroundColor: theme.topbar, padding:10, paddingTop:20}}>

<TouchableOpacity onPress={() => navigation.navigate('HalamanHomeJuz5')}>
<LeftArrow width={30} height={30}    fill={theme.menubar}  />
</TouchableOpacity>


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>HADIST Ke-79</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=>setSelectedText(Text)}  style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Tujuh Dosa Besar yang Membinasakan</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=>setSelectedText(Text)}  style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20, letterSpacing:2}}>اِجْتَنِبُوا السَّبْعَ الْمُوْبِقَاتِ
قَالُوا: يَا رَسُولَ اللهِ، وَمَا هُنَّ ؟ قَالَ: الشِّرْكُ
بِاللهِ، وَالسِّحْرُ، وَقَتْلُ النَّفْسِ الَّتِى حَرَّمَ اللهُ
إِلاَّ بِالْحَقِّ، وَأَكْلُ الرِّبَا، وَأَكْلُ مَالِ الْيَتِيمِ،
وَالتَّوَلِّى يَوْمَ الزَّحْفِ، وَقَذْفُ الْمُحْصَنَاتِ
الْمُؤْمِنَاتِ الْغَافِلاَتِ (رواه البخاري ومسلم)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>

<Text selectable onLongPress={()=>setSelectedText(Text)}   style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>


Artinya:{'\n'}
“Jauhilah tujuh dosa besar yang membinasakan” Para sahabat bertanya, “Wahai Rasulullah, apa saja itu?” Beliau menjawab, “Syirik kepada Allah, melakukan sihir, membunuh jiwa yang diharamkan Allah untuk dibunuh kecuali dengan alasan yang benar, memakan riba, memakan harta anak yatim, melarikan diri dari peperangan dan menuduh wanita yang baik-baik, mukminah lagi tidak tahu-menahu (sebagai pezina).”
(HR. Al-Bukhari dan Muslim)

</Text>
</TouchableOpacity>
</View>



<View style={{padding:10}}></View>

</ScrollView>

<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar }}>

<TouchableOpacity  activeOpacity={1} onPress={()=> navigation.navigate('HalamanHadist78')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>


<TouchableOpacity  activeOpacity={1} onPress={()=> navigation.navigate('HalamanHadist80')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>



</View>

    </View>
  )
}

export default HalamanHadist79