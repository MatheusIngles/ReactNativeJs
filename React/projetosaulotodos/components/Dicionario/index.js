import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import Dashboard from 'react-native-dashboard';
import RNPickerSelect from 'react-native-picker-select';
import { Card } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import { AppContext } from '../../App';


export default function Dicionario ({navigation}) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n] = useContext(AppContext);

  //langList: para traduzir o conteúdo da flatList na língua escolhida
  const langList = [
    {
      name: 'es',
      value: i18n('es', lang)
    },
    {
      name: 'en',
      value: i18n('en', lang)
    },
    {
      name: 'pt_br',
      value: i18n('pt_br', lang)
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={langList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setLang(item.name)}>
            <Text style={styles.paragraph}>{item.value}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name} // item.name eh um identificador unico
      />
    </View>
  )
}