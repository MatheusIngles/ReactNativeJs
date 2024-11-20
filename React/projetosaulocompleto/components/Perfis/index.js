import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import styles from './styles'
import { AppContext } from '../../App';

export default function Perfil() {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  if (perfis.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.mensagem}> {i18n('Nenhum perfil salvo.',lang)}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.infoContainer}>
      <View style={styles.containerPerfil}>
        <Image
          source={{
            uri:  item.imagemPerfil || 'https://i1.rgstatic.net/ii/profile.image/279212213719042-1443580787300_Q512/Saulo-Ribeiro.jpg',
          }}
          style={styles.imagemPerfil}
        />
        <Text style={styles.nomeUsuario}>{i18n('Nome do Usuário',lang)}: {item.nome}</Text>
      </View>

      <Text style={styles.tituloSessao}>{i18n('Detalhes Pessoais',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Email:',lang)} {item.email || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Id:',lang)} {item.id}</Text>

      <Text style={styles.tituloSessao}>{i18n('Endereço Comercial',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('CEP:',lang)} {item.cep || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Endereço:',lang)} {item.endereco || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Cidade:',lang)} {item.cidade || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Estado:',lang)} {item.estado || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('País:',lang)} {item.pais || i18n('Não informado',lang)}</Text>

      <Text style={styles.tituloSessao}>{i18n('Conta Bancária',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Número da Conta:',lang)} {item.numeroConta || i18n('Não informado',lang)}</Text>
      <Text style={styles.textoInfo}>{i18n('Validade:',lang)} {item.validade || i18n('Não informado',lang)}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={perfis}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}