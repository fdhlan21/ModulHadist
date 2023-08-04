import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';


const Dzikirpagi1 = ({navigation}) => {
   

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


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Dzikir Ke-1</Text>




</View>   
<ScrollView>

<View style={{padding:10}}>

<View>
<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Membaca Ayat Kursi</Text>
</TouchableOpacity>

</View>


<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27, textAlign:'right', color:theme.color,
paddingTop:40, lineHeight:70, paddingRight:20, fontStyle:'normal', letterSpacing:2}} >
أَعُوْذُ بِااللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِٱللَّهُ لَاۤ إِلَـٰهَ إِلَّا هُوَ ٱلۡحَیُّ ٱلۡقَیُّومُۚ لَا تَأۡخُذُهُۥ سِنَةࣱ وَلَا نَوۡمࣱۚ لَّهُۥ مَا فِی ٱلسَّمَـٰوَ ٰ⁠تِ وَمَا فِی ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِی یَشۡفَعُ عِندَهُۥۤ إِلَّا بِإِذۡنِهِۦۚ یَعۡلَمُ مَا بَیۡنَ أَیۡدِیهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا یُحِیطُونَ بِشَیۡءࣲ مِّنۡ عِلۡمِهِۦۤ إِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرۡسِیُّهُ ٱلسَّمَـٰوَ ٰ⁠تِ وَٱلۡأَرۡضَۖ وَلَا یَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِیُّ ٱلۡعَظِیمُ 
</Text>
</TouchableOpacity>

<View>

<Text  selectable onLongPress={() => setSelectedText(Text)}   style={{fontFamily:'Poppins-Regular', fontSize:17, color:theme.color, paddingTop:20, textAlign:'justify'}} >
<Text  >
Artinya:{'\n'}
“Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. (QS. al-Baqarah:255){'\n'}
{'\n'}
<Text style={{fontStyle:'italic', fontSize:15}}>
“Barangsiapa yang membacanya di Pagi hari, maka ia akan dipelihara dari gangguan jin hingga Sore hari. Dan barang siapa yang membacanya di sore hari, maka ia akan dipelihara dari mereka hingga Pagi hari.” (Shahih at-Targhib wat Tarhib, 1/273)

</Text>
</Text>
</Text>


</View>

</View>






</ScrollView>

<View style={{justifyContent:'flex-end', flexDirection:'row',  padding:10, backgroundColor:theme.topbar }}>

<TouchableOpacity activeOpacity={1}  onPress={()=> navigation.navigate('HalamaDzikirpagi2')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>



</View>




    </View>
  )
}

export default Dzikirpagi1
const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
    right:10
  },
});