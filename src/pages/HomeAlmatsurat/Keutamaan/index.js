import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';


const Keutamaan = ({navigation}) => {
   

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


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Keutamaan</Text>




</View>   
<ScrollView>

<View style={{padding:10}}>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:17, textAlign:'justify', color:theme.color,
paddingTop:20}}>Keutamaan dzikir pagi-petang (al-Ma’tsurat)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:20}}>Rasulullah bersabda:</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27, textAlign:'right', color:theme.color,
paddingTop:40, lineHeight:70, paddingRight:20, fontStyle:'normal', letterSpacing:2}}>لَأَنْ أَقْعُدَ مَعَ قَوْمٍ يَذْكُرُوْنَ اللهَ تَعَالَى مِنْ صَلَاةِ الغَدَاةِ حَتَّى تَطْلُعَ الشَمْسُ أُحِبُّ إِلَيَّ مِنْ أَنْ أَعْتِقَ أَرْبَعَةً مِنْ وَلَدٍ إِسْمَعِيْلَ, وَلِأَنْ أَقْعُدَ مَعَ قَوْمٍ يَذْكُرُوْنَ اللهَ مِنْ صَلَاةِ العَصْرِ إِلَى أَنْ تَغْرُبَ الشَّمْسُ أَحَبُّ إِلَيَّ مِنْ أَنْ أُعْتِقَ أَرْبَعَةً. (رواه أبو داود وحسنه الألباني)
:</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={() => setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'justify', color:theme.color,
paddingTop:20}}>Artinya:{'\n'}
“Sungguh (jika) saya duduk bersama kaum yang berdzikir kepada Allah Ta’ala sejak (selesai) shalat Shubuh hingga terbitnya matahari lebih saya cintai daripada membebaskan empat orang budak dari keturunan Ismail. Dan sunngguh (jika) saya duduk bersama kaum yang berdzikir kepada Allah sejak (selesai) shalat Ashar hingga terbenamnya matahari lebih saya sukai daripada membebaskan empat orang budak.” (Diriwayatkan oleh Abu Daud dan dihasankan oleh Syaikh al-Bani){'\n'}
{'\n'}
{'\n'}
<Text style={{fontWeight:'bold'}}>Petunjuk:</Text>{'\n'}
1. Membaca dzikir-dzikir Pagi dan Petang adalah tugas harian seorang muslim yang paling mulia, sehingga Rasulullah sendiri telah menentukan dzikir-dzikir khusus dalam banyak hadist pada dua waktu tersebut. Dzikir-dzikir itu biasa dibaca semuanya atau sebagiannya.{'\n'}
2. Waktu dzikir Pagi adalah setelah Shubuh sampai terbit matahari. Sedangkan waktu dzikir Petang adalah setelah shalat Ashar sampai Maghrib. Ada yang mengatakan waktunya masih terus berlanjut setelah Maghrib sampai sepertiga atau setengah malam. Bila belum sempat membaca, boleh dibaca setelah waktu-waktu tersebut, selama masih Pagi dan Petang.{'\n'}
3. Saat paling utama untuk dzikir Pagi ialah setelah shalat Shubuh. Karena seorang muslim yang mengerjakan shalat Shubuh berjama’ah, kemudian tetap dukuk lalu shalat dua rakaat (isyraq/dhuha), pahalanya seperti pahala haji dan umrah. Dan waktu paling utama untuk dzikir Petang ialah setelah shalat Ashar.{'\n'}
4. Disunnahkan bagi yang telah selesai membaca dzikir-dzikir khusus tersebut untuk membaca dzikir-dzikir dan do’a yang umum. Yang paling utama adalah membaca al-Qur’an, kemudian membaca shalawat atas nabi, tahlil, takbir, hauqalah dan selainnya. Kemudian sebelum berdiri membaca do’a Kaffaratul majlis.{'\n'}
{'\n'}
{'\n'}
<Text style={{fontWeight:'bold'}}>Catatan:</Text>{'\n'}
Pada pagi hari Jum’at, selain membaca dzikir-dzikir tersebut disunnahkan pula memperbanyak shalawat dan salam atas Nabi Muhammad dan membaca surah al-Kahfi

</Text>
</TouchableOpacity>

</View>






</ScrollView>

<View style={{justifyContent:'flex-end', flexDirection:'row',  padding:10, backgroundColor:theme.topbar }}>

<TouchableOpacity activeOpacity={1}  onPress={()=> navigation.navigate('HalamanHadist2')}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>



</View>




    </View>
  )
}

export default Keutamaan
const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
    right:10
  },
});