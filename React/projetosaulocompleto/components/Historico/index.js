import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { AppContext } from '../../App';
import styles from './styles';

export default function HistoricoPedidos() {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);

  const renderItem = ({ item }) => (
  <View style={styles.pedidoContainer}>
    <Text style={styles.numeroPedido}>{i18n('Número do Pedido:',lang)}{item.numeroPedido}</Text>
    <Text style={styles.dataPedido}>{i18n('Data:',lang)} {item.data}</Text>
    <Text style={styles.statusPedido}>{i18n('Status:',lang)} {i18n(item.status,lang)}</Text>
    <Text style={styles.totalPedido}>{i18n('Total:',lang)} {item.total}</Text>
    <Text style={styles.tituloItens}>Itens</Text>
    {item.itens.map((itemPedido, index) => (
      <Text key={index} style={styles.itemPedido}>
        {itemPedido.nome} - {i18n('Quantidade:',lang)} {itemPedido.quantidade} - {i18n('Preço:',lang)} {itemPedido.preco}
      </Text>
    ))}
  </View>
);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloPagina}>{i18n('Histórico de compras',lang)}</Text>
      <FlatList
        data={pedidos}
        renderItem={renderItem}
        keyExtractor={(item) => item.numeroPedido}
      />
    </ScrollView>
  );
}
