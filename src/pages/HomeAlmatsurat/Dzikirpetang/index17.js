import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';

const Dzikirpetang17 = ({navigation}) => {
   
    const handleBack = () => {
        navigation.goBack()
    }

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

<TouchableOpacity onPress={() => navigation.navigate('HalamanAlmatsurat')}>
<LeftArrow width={30} height={30}    fill={theme.menubar}  />
</TouchableOpacity>


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Dzikir Ke-17</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Perkataan terbaik para Nabi (dibaca 1x/10x/100x)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>
Artinya:{'\n'}
“Tidak ada ilah yang berhak disembah selain Allah semata, tidak ada sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu.” (Shahih at-Targhib wat Tarhib, 1/720 dan 722){'\n'}
{'\n'}
<Text style={{fontStyle:'italic', fontSize:15}}>
Keutamaannya:{'\n'}
a. “Barangsiapa yang membacanya di waktu pagi dan petang 10x, maka Allah akan menetapkan baginya 10 kebaikan, serta menghapuskan darinya 10 kesalahan. dan bacaan itu pahalanya seperti orang yang membebaskan 10 hamba sahaya dan Allah akan melindunginya dari (gangguan) setan.” (HR. an-Nasa’i dalam kitabnya “Amalul Yaum wal Lailah” dengan sanad yang shahih).{'\n'}
b. “Barangsiapa yang membacanya 1x dia waktu pagi, maka baginya pahala (membebaskan) seorang budak dari keturunan Ismail dan ditetapkan baginya 10 kebaikan, dihapuskan darinya 10 kesalahan, dan diangkat derajatnya sebanyak 10 derajat , serta selalu terjaga dari (godaan) setan sampai ia memasuki waktu petang. dan jika ia membacanya di waktu petang, maka ia akan mendapatkan hal yang serupa hingga ia memasuki waktu pagi.” (HR. Abu Dawud, Ahmad dan Ibnu Majah).{'\n'}
c. “Barangsiapa yang membacanya 100x di waktu pagi maka baginya pahala orang yang membebaskan budak, dan ditetapkan baginya 100 kebaikan, dihapuskan 100 kesalahan dan selalu terjaga dari (godaan) setan sampai ia memasuki waktu petang. Dan tiada seorangpun yang datang membawa lebih baik darinya kecuali orang yang mengerjakan dengan yang lebih banyak dari itu.” (HR. al-Bukhari dan Muslim)</Text>
</Text>
</TouchableOpacity>

</View>





</ScrollView>


<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar}}>

<TouchableOpacity  activeOpacity={1} onPress={handleBack}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('HalamaDzikirpetang18')} style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>


</View>


    </View>
  )
}

export default Dzikirpetang17