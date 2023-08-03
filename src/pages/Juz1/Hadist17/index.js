import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import themeContext from '../../../config/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import Clipboard from '@react-native-clipboard/clipboard';

const HalamanHadist17 = ({navigation}) => {
   

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

<TouchableOpacity onPress={() => navigation.navigate('HalamanHomeJuz1')}>
<LeftArrow width={30} height={30}    fill={theme.menubar}  />
</TouchableOpacity>


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23,  left:10, top:0}}>HADIST Ke-17</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity  onPress={handleCopy}>
<Text s selectable onLongPress={()=> setSelectedText(Text)}  style={{fontFamily:'Poppins-SemiBold', fontSize:23,  textAlign:'center', color:theme.color,
paddingTop:20, paddingLeft:7}}>Orang yang Paling Utama untuk Kita Berbuat Baik Kepadanya</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)}  style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:22, letterSpacing:2}}>جَاءَ رَجُلٌ إِلَى رَسُولِ الله صَلّى الله عَلَيه
 وَسَلّم، فَقَال: مَنْ أَحَقُّ النَّاسِ بِحُسْنِ
 صَحَابَتِي؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ:
 أُمُّكَ، قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ، قَالَ: ثُمَّ
 مَنْ؟ قَالَ: أَبُوْكَ (مُتَّفَقٌ عَلَيهِ)</Text>
</TouchableOpacity>


<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)}   style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:23, paddingLeft:20, paddingRight:20}}>

Artinya:{'\n'}
“Telah datang seorang laki–laki kepada Rasulullah shallallahu ‘alaihi wasallam lalu ia berkata, ‘Wahai Rasulullah siapakah orang yang lebih utama untuk aku berbuat baik kepadanya?’ Rasulullah menjawab, ‘Ibumu’. Dia berkata lagi, ‘Kemudian siapa lagi?’ Beliau menjawab, ‘Ibumu’. Dia bertanya lagi, ‘Kemudian siapa lagi?’ Beliau menjawab, ‘Ibumu’. Dia bertanya lagi, ‘Kemudian siapa lagi?’ Beliau menjawab, ‘Bapakmu’.” (Muttafaq 'Alaih)
</Text>
</TouchableOpacity>
</View>


<View style={{padding:10}}></View>

</ScrollView>


<View style={{justifyContent:'flex-start', flexDirection:'row',  padding:10,  backgroundColor:theme.topbar,  }}>
<TouchableOpacity activeOpacity={1}  onPress={()=> navigation.navigate('HalamanHadist16')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5,}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5, }}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>


</View>



    </View>
  )
}

export default HalamanHadist17