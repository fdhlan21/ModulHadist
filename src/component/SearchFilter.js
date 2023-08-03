import { FlatList, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation , NavigationContainer, } from '@react-navigation/native';
  import { ScrollView } from 'react-native-virtualized-view';
  import themeContext from '../config/themeContext';


const SearchFilter = ({data, input, navigation}) => {
 const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);

const [isSearchActive] = useState(false);
  return  (
    <View>
 
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
 <FlatList showsHorizontalScrollIndicator={false}  pagingEnabled={true} horizontal={true} data={data}  renderItem={({item})  => {
    if (input === "" ){
    
   return (
    <View style={{padding:10,}}>
    
    <Text style={{fontFamily:'Poppins-Regular', fontSize:13, color:theme.color}}></Text>
    <Text style={{borderColor:theme.color, borderWidth:0.5, height:1, width:'100%'}}></Text>
       
    </View>
   )
    }


     if(item.name.toLowerCase().includes(input.toLowerCase())){
        return (
             <View style={{padding:10,}}>
        
     <Text style={{fontFamily:'Poppins-Regular', fontSize:13,color:theme.color}}>{item.name}</Text>
     <Text style={{borderColor:theme.color, borderWidth:0.5, height:1, width:'100%'}}></Text>
    
       
    </View>
        )
     }
 }} />
   </ScrollView>




    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})