import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch , Linking} from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import themeContext from '../../config/themeContext';
import Clipboard from '@react-native-clipboard/clipboard';

import LeftArrow from '../../assets/svg/LeftArrow.svg'

const HalamanTentang = ({navigation}) => {
   

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

<TouchableOpacity onPress={() => navigation.navigate('HalamanStart')}>
<LeftArrow width={30} height={30}    fill={theme.menubar}  />
</TouchableOpacity>


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Tentang</Text>




</View>   
<ScrollView>

<View>




<Text   style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'justify', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20, fontStyle:'normal'}}>


 {'\n'} Aplikasi ini didedikasikan untuk Kuttab Baitul Qur’an Sukorejo-Gresik dalam upaya untuk mempermudah santri dalam menghafal/muroja’ah Hadits yang menjadi kurikulum di Pondok. {'\n'}
{'\n'}
  {'\n'}  Pada tahun pertama berdirinya Kuttab Baitul Qur'an, materi hadits dalam modul ini disampaikan untuk dua level kelas yang berbeda, sehingga kedua level ini memulai dari hadits yang sama. Dengan menjadikannya 5 bagian (juz) seperti ini kami berharap bisa membatasi level awal untuk mencukupkan materi pada juz satu dan level diatasnya melanjutkan ke juz berikutnya sesuai kemampuan mayoritas santri di kelas. Sehingga, meskipun memulai dari awal hadits yang sama, pencapaian akhirnya bisa berbeda. Semoga semua santri bisa menerima semua materi di modul ini seutuhnya sesuai harapan kami, yaitu menghafal 100 hadits pilihan di level Qonuni 2 atau 3 (Setingkat kelas 4 atau 5 SD/MI). {'\n'}
{'\n'}
 {'\n'}  Semoga Aplikasi ini bisa menjadi ladang Jariyah untuk kita semua. Aamiin{'\n'}
{'\n'}
<Text style={{fontFamily:'Poppins-Bold'}}>Catatan:</Text>
 {'\n'}  Kami sudah berusaha membuat aplikasi ini sesempurna yang kami bisa. Dari sisi isinya, kami berusaha hanya memuat dari Al-Quran dan Hadits Shahih/Hasan (hadits yang sudah dipastikan berasal dari Nabi in sya Allah, sesuai penelitian ahli hadits). Dari sisi teknis, kami berusaha agar aplikasi ini mudah digunakan (user-friendly), bebas bug, dll. Namun kami juga sadar bahwa hal tersebut sangat sulit dicapai. Oleh karena itu, bila anda menemukan kesalahan dalam aplikasi ini, atau anda mempunyai saran atau kritik, maka jangan sungkan-sungkan untuk melayangkannya ke:
</Text>



<Text  style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'justify', color:'#5F82FF',
paddingTop:0, paddingLeft:20, paddingRight:20}} onPress={() => Linking.openURL('https://sociabuzz.com/momuproject')}>

https://sociabuzz.com/momuproject

</Text>


<Text  style={{fontFamily:'Poppins-Bold', fontSize:17, textAlign:'justify', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>


Tim Pengembang:

</Text>



<Text  style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:0, paddingLeft:20, paddingRight:20}}>

-Mohammad Andi Setiawan <Text style={{fontStyle:'italic'}}>as Prototyper</Text>{'\n'}
-Faisol <Text style={{fontStyle:'italic'}}>as corrector</Text>{'\n'}
-Madusin <Text style={{fontStyle:'italic'}}>as corrector</Text> {'\n'}

</Text>


<Text  style={{fontFamily:'Poppins-Regular', fontSize:11, textAlign:'center', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>


Copyright © 2022-2023 Momu Project All Right Reserved

</Text>

</View>





</ScrollView>



    </View>
  )
}

export default HalamanTentang