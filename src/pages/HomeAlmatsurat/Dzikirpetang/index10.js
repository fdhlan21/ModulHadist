import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';

const Dzikirpetang10 = ({navigation}) => {
   
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


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Dzikir Ke-10</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Memohon keselamatan dalam agama, dunia, akhirat, keluarga dan harta</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَا فِيَةَ فِيْ الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِيْ دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِيْ وَآمِنْ رَوْعَاتِيْ. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>
Artinya:{'\n'}
“Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan di dunia dan akhirat. Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan dalam agama, dunia, keluarga dan hartaku. Ya Allah, tutupilah auratku (aib dan sesuatu yang tidak layak dilihat orang) dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari muka, belakang, kanan, kiri dan atasku. Aku berlindung dengan kebesaran-Mu, agar aku tidak diserang dari bawahku.” (Shahih Ibnu Majah, 2/33){'\n'}
{"\n"}
</Text>
</TouchableOpacity>

</View>





</ScrollView>


<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar}}>

<TouchableOpacity  activeOpacity={1} onPress={handleBack}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('HalamaDzikirpetang11')} style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>


</View>


    </View>
  )
}

export default Dzikirpetang10