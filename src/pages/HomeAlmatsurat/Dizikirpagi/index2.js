import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';

const Dzikirpagi2 = ({navigation}) => {
   
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


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Dzikir Ke-2</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Membaca surat al-Ikhlas, al-Falaq dan an-Naas (dibaca sebanyak 3x)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ {'\n'}
{'\n'}
قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>
Artinya:{'\n'}
“Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang.”
“Katakanlah, ‘Dia-lah Allah, Yang Maha Esa. Allah tempat bergantung segala sesuatu. Dia tidak beranak dan tidak pula dipernakkan, dan tidak ada seorang pun yang setara dengan Dia.” (QS. al-Ikhlas: 1-4)
</Text>
</TouchableOpacity>


<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿1﴾ مِنْ شَرِّ مَا خَلَقَ ﴿2﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿3﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿5﴾</Text>
</TouchableOpacity>


<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>

Artinya:{'\n'}
“Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang.”
“Katakanlah, ‘Aku berlindung kepada Rabb yang menguasai Shubuh. Dari kejahatan makhluk-Nya. Dan dari kejahatan malam apabila telah gelap gulita. Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul. Dan dari kejahatan orang yang dengki apabila ia dengki.’” (QS. al-Falaq: 1-5)
</Text>
</TouchableOpacity>


<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿1﴾ مَلِكِ النَّاسِ ﴿2﴾ إِلَهِ النَّاسِ ﴿3﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿4﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿5﴾ مِنَ الْجِنَّةِ وَالنَّاسِ﴿6﴾</Text>
</TouchableOpacity>


<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>

Artinya:{'\n'}
“Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang.”
“Katakanlah, ‘Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia. Dari kejahatan (bisikan) setan yang biasa bersembunyi. Yang membisikan (kejahatan) ke dalam dada manusia, dari kalangan jin dan manusia.’” (QS. al-Naas: 1-6){'\n'}
{'\n'}
<Text style={{fontStyle:'italic', fontSize:15}}>
“Barangsiapa yang membacanya sebanyak tiga kali pada setiap pagi dan sore, itu sudah mencukupinya dari segala sesuatu,” (Shahih at-Tirmidzi, 3/182)
</Text>
</Text>
</TouchableOpacity>
</View>





</ScrollView>


<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar}}>

<TouchableOpacity  activeOpacity={1} onPress={handleBack}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('HalamaDzikirpagi3')} style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>


</View>


    </View>
  )
}

export default Dzikirpagi2