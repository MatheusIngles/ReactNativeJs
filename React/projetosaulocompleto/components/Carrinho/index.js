import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { AppContext } from '../../App';
import { Image } from 'react-native';
import styles from './styles';

export default function Carrinho({ navigation }) { 
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);
  
  const removeItem = (itemIndex) => {
    const newCarrinho = carrinho.filter((_, index) => index !== itemIndex);
    setCarrinho(newCarrinho);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = String(item.preco).replace('R$', '').replace(',', '.');
      return total + (parseFloat(preco) * item.quantidade);
    }, 0);
  };

  const goToCheckout = () => {
    console.log('Carrinho:', carrinho);
    navigation.navigate('Checkout'); 
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.itemImage} />
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemName}>{item.nome}</Text>
        <Text style={styles.itemDetails}>{i18n('Preço', lang)}: R$ {item.preco}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>{i18n('Quantidade', lang)}:</Text>
          <Text style={styles.quantityValue}>{item.quantidade}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>{i18n('X', lang)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n('Carrinho de Compras', lang)}</Text>
      {carrinho.length === 0 ? (
        <Text style={styles.emptyMessage}>{i18n('Carrinho vazio', lang)}</Text>
      ) : (
        <FlatList
          data={carrinho}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {carrinho.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>
            {i18n('Total', lang)}: R$ {calcularTotal().toFixed(2)}
          </Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={goToCheckout}>
            <Text style={styles.checkoutButtonText}>{i18n('Finalizar Compra', lang)}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

}