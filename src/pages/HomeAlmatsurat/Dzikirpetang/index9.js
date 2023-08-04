import Clipboard from '@react-native-clipboard/clipboard';
import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../../assets/svg/LeftArrow.svg';
import themeContext from '../../../config/themeContext';

const Dzikirpetang9 = ({navigation}) => {
   
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


<Text style={{fontFamily:'Poppins-SemiBold', color: theme.texttopbar, fontSize:23, left:10, top:0}}>Dzikir Ke-9</Text>




</View>   
<ScrollView>

<View>

<TouchableOpacity onPress={handleCopy}>
<Text  selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-SemiBold', fontSize:23, textAlign:'center', color:theme.color,
paddingTop:20}}>Bertawakkal Hanya Kepada Allah (dibaca 7x)</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Amiri-Regular', fontSize:27,  textAlign:'right', color:theme.color,
paddingTop:30, lineHeight:70, paddingRight:20,  letterSpacing:2}}>حَسْبِيَ اللهُ لاَ إِلَهَ إِلاَّ هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleCopy}>
<Text selectable onLongPress={()=> setSelectedText(Text)} style={{fontFamily:'Poppins-Regular', fontSize:17, textAlign:'left', color:theme.color,
paddingTop:30, paddingLeft:20, paddingRight:20}}>
Artinya:{'\n'}
“Cukup bagiku Allah (sebagai pelindung), tiada Tuhan (yang berhak di sembah) kecuali Dia. Kepada-Nya aku bertawakkal dan dia adalah Tuhan ‘Arasy yang agung.” (HR. Ibnu Sunni , Abu Dawud. Syu’aib dan Abdul Qadir Al Arna’uth menghasankan sanadnya){'\n'}
</Text>
</TouchableOpacity>

</View>





</ScrollView>


<View style={{justifyContent:'space-between', flexDirection:'row',  padding:10, backgroundColor:theme.topbar}}>

<TouchableOpacity  activeOpacity={1} onPress={handleBack}   style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkiri.png')}/>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('HalamaDzikirpetang10')} style={{width:40, height:40, padding:10, backgroundColor:theme.nexttouch, borderRadius:5}}>
    <Image style={{width:29, height:20, alignItems:'center', right:5}}  source={require('../../../assets/img/panahkanan.png')}/>
</TouchableOpacity>


</View>


    </View>
  )
}

export default Dzikirpetang9