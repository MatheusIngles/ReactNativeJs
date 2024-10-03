import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function App() {

  const [numero,setnumero] = useState(0);
  const [list1,setlist1] = useState([ 
    { id: 1, title: 'Item 1', clickCount: 0 },
    { id: 2, title: 'Item 2', clickCount: 0 },
    { id: 3, title: 'Item 3', clickCount: 0 },
    { id: 4, title: 'Item 4', clickCount: 0 },
    { id: 5, title: 'Item 5', clickCount: 0 },
  ])

  const adicionarMaisUm = ()=>{
      setnumero(numero + 1)
  }

  return (
    <Botton numero={numero} onPress={adicionarMaisUm}/>
  );
}

const Botton = ({numero, onPress}) =>{
  return(
  <View style={styles.container}>
    <Text style={styles.paragraph}>
        Numero de Clicks: + {numero}
    </Text>
    <TouchableOpacity onPress={onPress} style ={styles.botona}>
        <Text style={styles.paragraph}>
            Upar Mais 1
        </Text>
    </TouchableOpacity>
  </View>
  )};



const Flat = ({list1}) => {
  return(
    <ScrollView style={style.container}>
    <FlatList data={list1}>
    </ScrollView>    
  )
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  botona:{
     // color: 'White',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: '10px'
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
