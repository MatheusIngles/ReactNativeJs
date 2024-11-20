import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AppContext } from '../../App';
import styles from './styles';

export default function Login({ navigation }) { 
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado, setIsLogado, setisADM] = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = perfis.find((perfil) => perfil.email === email && perfil.password === password);

    if (user) {
      
      if(user.email === 'admin@' && user.password === 'admin'){
        setisADM(true)
      }

      setPerfilLogado(user);
      setCarrinho([]);
      setIsLogado(true)

      Alert.alert(i18n('Sucesso', lang), i18n('Login realizado com sucesso!', lang));
      setEmail('');
      setPassword('');

      navigation.navigate('Cardapio'); 
    } else {
      Alert.alert(i18n('Erro', lang), i18n('Email ou senha inválidos. Por favor, tente novamente.', lang));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n('Bem-vindo!', lang)}</Text>

      <TextInput
        style={styles.input}
        placeholder={i18n('Digite seu email', lang)}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder={i18n('Digite sua senha', lang)}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{i18n('Entrar', lang)}</Text>
      </TouchableOpacity>
    </View>
  );
}
