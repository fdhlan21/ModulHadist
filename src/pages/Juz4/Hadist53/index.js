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
import LeftArrow from '../../../assets/svg/LeftArrow.svg'
import Clipboard from '@react-native-clipboard/clipboard';

const HalamanHadist53 = ({navigation}) => {
   

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

<TouchableOpacity onPress={() => navigation.navigate('HalamanHomeJuz4')}>
<LeftArrow width={30} height={30}    fill={theme.menubar}  />
</TouchableOpacity>


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>HADIST Ke-53</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=>setSelectedText()}  style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Hak Seorang Muslim</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=>setSelectedText()}  style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20, letterSpacing:2}}>حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ: رَدُّ السَّلاَمِ
وَعِيَادَةُ المَرِيْضِ وَاتِّبَاعُ الْجَنَائِزِ وَإِجَابَةُ الدَّعْوَةِ
وَتَشْمِيْتُ العَاطِسِ (مُتَّفَقٌ عَلَيهِ)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=>setSelectedText()}   style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>

Artinya:{'\n'}
“Hak seorang muslim atas muslim lainnya ada lima yaitu: menjawab salam, menjenguk orang yang sakit, mengantar jenazah, memenuhi undangan, dan mendo’akannya ketika bersin.” 
(Muttafaq 'Alaih)



</Text>
</TouchableOpacity>
</View>




</ScrollView>

<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar }}>

<TouchableOpacity activeOpacity={1}  onPress={()=> navigation.navigate('HalamanHadist52')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>


<TouchableOpacity activeOpacity={1}  onPress={()=> navigation.navigate('HalamanHadist54')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>



</View>


    </View>
  )
}

export default HalamanHadist53