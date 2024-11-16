// importar módulos aqui
import * as React  from 'react';
import { useState, useEffect, Component, useContext } from 'react';
import { Button, FlatList, Text, View, StyleSheet , TextInput, TouchableOpacity} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


// importar componentes aqui
import Cardapio from './components/PagCardapio/index';
import Cadastro from './components/Cadastro/index';
import Perfis from './components/Perfis/index';
import Perfil from './components/PerfilLogado/index';
import Tela_Dashboard from './components/Dashboard/index';
import Historico from './components/Historico/index';
import Dicionario from './components/Dicionario/index'
import {es, en, pt_br} from './Dicionario'
// Variáveis globais




const i18n = (key, lang) => {
  switch(lang) {
    case 'en':
      return en[key]
    case 'es':
      return es[key]
    default:
      return pt_br[key]
  }
}

// funções
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n] = useContext(AppContext); 

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={i18n('Cardapio',lang)}
        onPress={() => props.navigation.navigate('Cardapio')}
        
      />
      <DrawerItem
        label={i18n("Cadastro",lang)}
        onPress={() => props.navigation.navigate('Cadastro')}
        
      />
      <DrawerItem
        label={i18n("Perfis",lang)}
        onPress={() => props.navigation.navigate('Perfis')}
       
      />
      <DrawerItem
        label={i18n("Perfil",lang)}
        onPress={() => props.navigation.navigate('Perfil')}
        
      />
      <DrawerItem
        label={i18n("Historico",lang)}
        onPress={() => props.navigation.navigate('Historico')}
       
      />
      <DrawerItem
        label={i18n("Dashboard",lang)}
        onPress={() => props.navigation.navigate('Dashboard')}
        
      />
      <DrawerItem
        label={i18n("Dicionario",lang)}
        onPress={() => props.navigation.navigate('Dicionario')}
       
      />
    </DrawerContentScrollView>
  );
}

// App
export const AppContext = React.createContext();

export default function App() {
  const [lang, setLang] = React.useState('pt_br');
  const [perfis, setPerfis] = React.useState([]); 
  const [carrinho, setCarrinho] = React.useState([]);
  const [pedidos, setpedidos] = React.useState([
    {
      numeroPedido: '789123',
      id_usuario: 0,
      data: '15/11/2023',
      status: 'Aguardando Pagamento',
      total: 'R$ 250,00',
      itens: [
        { nome: 'Blusa', quantidade: 3, preco: 'R$ 50,00', tag: 'Roupas' },
        { nome: 'Calça Jeans', quantidade: 1, preco: 'R$ 100,00', tag: 'Roupas' },
        { nome: 'Cinto', quantidade: 1, preco: 'R$ 50,00', tag: 'Acessórios' },
      ],
    },
    {
      numeroPedido: '112233',
      data: '20/11/2023',
      id_usuario: 0,
      status: 'Cancelado',
      total: 'R$ 80,00',
      itens: [
        { nome: 'Boné', quantidade: 2, preco: 'R$ 40,00', tag: 'Acessórios' },
      ],
    },
    {
      numeroPedido: '445566',
      data: '25/10/2023',
      id_usuario: 0,
      status: 'Em Preparação',
      total: 'R$ 300,00',
      itens: [
        { nome: 'Relógio', quantidade: 1, preco: 'R$ 150,00', tag: 'Acessórios' },
        { nome: 'Camisa Polo', quantidade: 2, preco: 'R$ 75,00', tag: 'Roupas' },
      ],
    },
    {
      numeroPedido: '998877',
      data: '01/11/2023',
      id_usuario: 0,
      status: 'Entregue',
      total: 'R$ 400,00',
      itens: [
        { nome: 'Mochila', quantidade: 1, preco: 'R$ 200,00', tag: 'Acessórios' },
        { nome: 'Óculos de Sol', quantidade: 1, preco: 'R$ 200,00', tag: 'Acessórios' },
      ],
    },
    {
      numeroPedido: '334455',
      data: '10/11/2023',
      id_usuario: 0,
      status: 'Em trânsito',
      total: 'R$ 120,00',
      itens: [
        { nome: 'Chinelo', quantidade: 2, preco: 'R$ 30,00', tag: 'Calçados' },
        { nome: 'Camiseta', quantidade: 2, preco: 'R$ 30,00', tag: 'Roupas' },
      ],
    },])

  return (
    <AppContext.Provider value={[lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n]}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Cardapio" component={Cardapio} options={{
          title: i18n('Cardapio',lang)}} />
          <Drawer.Screen name="Cadastro" component={Cadastro} options={{
          title: i18n('Cadastro',lang)}}/>
          <Drawer.Screen name="Perfis" component={Perfis}  options={{
          title: i18n('Perfis',lang)}}/>
          <Drawer.Screen name="Perfil" component={Perfil} options={{
          title: i18n('Perfil',lang)}}/>
          <Drawer.Screen name="Historico" component={Historico}  options={{
          title: i18n('Historico',lang)}}/>
          <Drawer.Screen name="Dashboard" component={Tela_Dashboard} options={{
          title: i18n('Dashboard',lang)}} />
          <Drawer.Screen name="Dicionario" component={Dicionario}   options={{
          title: i18n('Dicionario',lang)}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}