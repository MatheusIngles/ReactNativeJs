import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from '../../App';
import styles from './styles'

const Stack = createNativeStackNavigator();

function PerfilLogado({ navigation }) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 

  if (perfis.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textEmpty}> {i18n('Nenhum perfil encontrado.',lang)}</Text>
      </View>
    );
  }

  if (!perfilLogado) {
    return (
      <View style={styles.container} onPress={(() => navigation.navigate('Editando_perfil'))}>
        <Text style={styles.textEmpty}>{i18n('Nenhum perfil logado.', lang)}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: perfilLogado.imagemPerfil || 'https://i1.rgstatic.net/ii/profile.image/279212213719042-1443580787300_Q512/Saulo-Ribeiro.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{perfilLogado.nome}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>{i18n('Detalhes do Perfil',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('Email:',lang)} {perfilLogado.email || i18n('Não informado',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('CEP',lang)}: {perfilLogado.cep || i18n('Não informado',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('Endereço',lang)}: {perfilLogado.endereco || i18n('Não informado',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('Cidade',lang)}: {perfilLogado.cidade || i18n('Não informado',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('Estado',lang)}: {perfilLogado.estado || i18n('Não informado',lang)}</Text>
        <Text style={styles.detailItem}>{i18n('País',lang)}: {perfilLogado.pais || i18n('Não informado',lang)}</Text>
      </View>

      <TouchableOpacity style={styles.button}  onPress={(() =>navigation.navigate('Editar perfil'))}>
        <Text style={styles.buttonText}>{i18n('Editar Perfil',lang)}</Text>
      </TouchableOpacity>
    </View>
  );
}

function Editando_perfil({ navigation }) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado, setIsLogado, setisADM,isLogado,isADM] = useContext(AppContext);
  const [nome, setNome] = useState(perfilLogado.nome);
  const [imagemPerfil, setimagemPerfil] = useState(perfilLogado.imagemPerfil);
  const [email, setEmail] = useState(perfilLogado.email);
  const [password, setPassword] = useState(perfilLogado.password);
  const [cep, setCep] = useState(perfilLogado.cep);
  const [endereco, setEndereco] = useState(perfilLogado.endereco);
  const [cidade, setCidade] = useState(perfilLogado.cidade);
  const [estado, setEstado] = useState(perfilLogado.estado);
  const [pais, setPais] = useState(perfilLogado.pais);
  const [numeroConta, setNumeroConta] = useState(perfilLogado.numeroConta);
  const [titularConta, setTitularConta] = useState(perfilLogado.titularConta);
  const [validade, setValidade] = useState(perfilLogado.validade);
  const [senhaConta, setSenhaConta] = useState(perfilLogado.senhaConta);
  const [id, setID] = useState(perfilLogado.id);
  const [data, setData] = useState(new Date);

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
  
  setPerfilLogado(dados)
  navigation.goBack();
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
        <View style={styles.pickerContainer}>
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
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
            inputWeb: styles.picker,
            iconContainer: {
              top: 15, // Centraliza verticalmente o ícone
              right: 12, // Ajusta horizontalmente o ícone
            },
          }}
          value={pais}
          useNativeAndroidPickerStyle={false}
        />
        </View>
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

export default function Tela_Perfil({ navigation }) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
   return (
    <Stack.Navigator>
      <Stack.Screen
        name="PerfilLogado"
        component={PerfilLogado}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editar perfil"
        component={Editando_perfil}
        options={{
          title: i18n('Editar perfil', lang),
        }}
      />
    </Stack.Navigator>
  );
}


