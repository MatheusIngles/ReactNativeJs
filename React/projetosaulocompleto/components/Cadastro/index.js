import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { AppContext } from '../../App';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [imagemPerfil, setimagemPerfil] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [titularConta, setTitularConta] = useState('');
  const [validade, setValidade] = useState('');
  const [senhaConta, setSenhaConta] = useState('');
  const [id, setID] = useState(0);
  const [data, setData] = useState(new Date);
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);

  const salvarDados = () => {
  if (nome !== '' &&
  email.includes('@') &&
  password !== '' &&
  cep !== '' &&
  endereco !== '' &&
  cidade !== '' &&
  estado !== '' &&
  pais !== null &&
  numeroConta !== '' &&
  titularConta !== '' &&
  validade !== '' &&
  senhaConta !== ''
){

  const dados = {
    imagemPerfil,
    nome,
    email,
    password,
    cep,
    endereco,
    cidade,
    estado,
    pais,
    numeroConta,
    titularConta,
    validade,
    senhaConta,
    id,
    data
  };
  
  setPerfis((anteriorPerfis) => [...anteriorPerfis, dados]);

  // Limpar campos
  setimagemPerfil('');
  setNome('');
  setEmail('');
  setPassword('');
  setCep('');
  setEndereco('');
  setCidade('');
  setEstado('');
  setPais('');
  setNumeroConta('');
  setTitularConta('');
  setValidade('');
  setSenhaConta('');
  setID(id+1);

  navigation.navigate('Login');
}}

  return (
    <ScrollView contentContainerStyle={styles.containerRolagem}>
      <View style={styles.container}>
        <View style={styles.containerPerfil}>
          <Image source={{ uri: imagemPerfil }} style={styles.imagemPerfil} />
        </View>

        {/* Detalhes Pessoais */}
        <Text style={styles.tituloSessao}>{i18n('Detalhes Pessoais',lang)}</Text>
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Imagem",lang)}
          value={imagemPerfil}
          onChangeText={(text) => setimagemPerfil(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Nome completo",lang)}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Endereço de Email",lang)}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Senha",lang)}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Detalhes do Endereço Comercial */}
        <Text style={styles.tituloSessao}>{i18n('Detalhes do Endereço Comercial',lang)}</Text>
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("CEP",lang)}
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Endereço",lang)}
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Cidade",lang)}
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Estado",lang)}
          value={estado}
          onChangeText={(text) => setEstado(text)}
        />
        <RNPickerSelect
          onValueChange={(value) => setPais(value)}
          items={[
            { label: i18n('Brasil',lang), value: 'Brasil' },
            { label: i18n('Estados Unidos',lang), value: 'Estados Unidos' },
            { label: i18n('Canadá',lang), value: 'Canadá' },
            { label: i18n('Reino Unido',lang), value: 'Reino Unido' },
          ]}
          placeholder={{ label: i18n('Selecione um país',lang), value: null }}
          style={{
            inputIOS: styles.entradaTexto,
            inputAndroid: styles.entradaTexto,
            iconContainer: {
              top: 10,
              right: 12,
            },
            inputWeb: styles.entradaTexto
          }}
          value={pais}
          useNativeAndroidPickerStyle={false}
        />

        {/* Detalhes da Conta Bancária */}
        <Text style={styles.tituloSessao}>{i18n('Detalhes da Conta Bancária',lang)}</Text>
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Número da Conta Bancária",lang)}
          value={numeroConta}
          onChangeText={(text) => setNumeroConta(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Nome do Titular da Conta",lang)}
          value={titularConta}
          onChangeText={(text) => setTitularConta(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Validade",lang)}
          value={validade}
          onChangeText={(text) => setValidade(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder={i18n("Cvv",lang)}
          secureTextEntry={true}
          value={senhaConta}
          onChangeText={(text) => setSenhaConta(text)}
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarDados}>
          <Text style={styles.textoBotaoSalvar}>{i18n('Salvar',lang)}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}