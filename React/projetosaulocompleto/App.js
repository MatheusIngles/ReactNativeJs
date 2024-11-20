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
import Tela_Perfil from './components/PerfilLogado/index';
import Tela_Dashboard from './components/Dashboard/index';
import Historico from './components/Historico/index';
import Carrinho from './components/Carrinho/index';
import Dicionario from './components/Dicionario/index'
import Login from './components/Login/index';
import Checkout from './components/Checkout/index'
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
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado, setIsLogado, setisADM,isLogado,isADM] = useContext(AppContext); 

  const deslogar = () => {
  setIsLogado(false);
  if (isADM) {
    setisADM(false);
  }
  setPerfilLogado(null);
  props.navigation.navigate('Login'); // Certifique-se de usar 'props.navigation'
  };
  
  return (
    <DrawerContentScrollView {...props}>
      {!isLogado && (<DrawerItem
        label={i18n('Login', lang)}
        onPress={() => props.navigation.navigate('Login')}
      />
      )}
      {isLogado && (<DrawerItem
        label={i18n('Cardapio',lang)}
        onPress={() => props.navigation.navigate('Cardapio')}
      />)}
      {!isLogado &&(
      <DrawerItem
        label={i18n("Cadastro",lang)}
        onPress={() => props.navigation.navigate('Cadastro')}
      />)}
      {isLogado &&(<DrawerItem
        label={i18n('Carrinho', lang)}
        onPress={() => props.navigation.navigate('Carrinho')}
      />)}
      {isLogado && (<DrawerItem
        label={i18n("Perfis",lang)}
        onPress={() => props.navigation.navigate('Perfis')}
      />)}
      {isLogado &&(
      <DrawerItem
        label={i18n("Perfil",lang)}
        onPress={() => props.navigation.navigate('Perfil')}
      />)}
      {isLogado && (
      <DrawerItem
        label={i18n("Historico",lang)}
        onPress={() => props.navigation.navigate('Historico')}
      />)}
      {isLogado && isADM &&(
      <DrawerItem
        label={i18n("Dashboard",lang)}
        onPress={() => props.navigation.navigate('Dashboard')}
      />)}
      {isLogado &&(
      <DrawerItem
        label={i18n("Dicionario",lang)}
        onPress={() => props.navigation.navigate('Dicionario')}
      />)}
      {isLogado &&(
      <DrawerItem
        label={i18n("Deslogar",lang)}
        onPress={() => deslogar()}
      />)}
    </DrawerContentScrollView>
  );
}

// App
export const AppContext = React.createContext();

export default function App() {
  const [lang, setLang] = React.useState('pt_br');
  const [perfis, setPerfis] = React.useState([{
  imagemPerfil: "https://media.tenor.com/-gMwEkv4gmAAAAAM/meme-do-adm-adm.gif",
  nome: "Administrador do Sistema",
  email: "admin@",
  password: "admin",
  cep: "12345-678",
  endereco: "Rua das Empresas, 1000",
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
  numeroConta: "12345678",
  titularConta: "Admin User",
  validade: "12/2026",
  senhaConta: "segura123",
  id: 0,
  data: new Date("2024-11-20T03:57:51.311Z"),
}
,]); 
  const [perfilLogado, setPerfilLogado] = useState(null);
  const [carrinho, setCarrinho] = React.useState([]);
  const [isLogado, setIsLogado] =  React.useState(false)
  const [isADM, setisADM] = React.useState(false)
  const [pedidos, setpedidos] = React.useState([])

  return (
    <AppContext.Provider value={[lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado, setIsLogado, setisADM, isLogado, isADM, setpedidos]}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Login" component={Login} options={{
            title: i18n('Login', lang)
          }} />
          <Drawer.Screen name="Cardapio" component={Cardapio} options={{
          title: i18n('Cardapio',lang)}} />
          <Drawer.Screen name="Cadastro" component={Cadastro} options={{
          title: i18n('Cadastro',lang)}}/>
          <Drawer.Screen name="Perfis" component={Perfis}  options={{
          title: i18n('Perfis',lang)}}/>
          <Drawer.Screen name="Perfil" component={Tela_Perfil} options={{
          title: i18n('Perfil',lang)}}/>
          <Drawer.Screen name="Carrinho" component={Carrinho} options={{
          title: i18n('Carrinho', lang)}} />
          <Drawer.Screen name="Checkout" component={Checkout} options={{
          title: i18n('Checkout', lang)}} />
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