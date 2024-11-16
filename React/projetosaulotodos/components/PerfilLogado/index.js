import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../../App';
import styles from './styles'

export default function PerfilLogado() {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n] = useContext(AppContext); 

  if (perfis.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textEmpty}> {i18n('Nenhum perfil encontrado.',lang)}</Text>
      </View>
    );
  }

  const perfilLogado = perfis[0]; // Obtendo o primeiro perfil da lista como o "perfil logado".

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{i18n('Editar Perfil',lang)}</Text>
      </TouchableOpacity>
    </View>
  );
}

