import React, { useState, useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

import { AppContext } from '../../App'; 

const Checkout = ({ navigation }) => {
  
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado, setIsLogado, setisADM, isLogado, isADM, setpedidos] = useContext(AppContext);

  const iconUrls = {
    Pix: 'https://reiscontabil.com.br/novosite/wp-content/uploads/2023/09/PIX.jpg', 
    Cartão: 'https://milionarioz.com.br/wp-content/uploads/2022/05/visa-logo-5.png', 
    Boleto: 'https://logodownload.org/wp-content/uploads/2019/09/boleto-logo.png', 
  };

  const [metodoPagamento, setMetodoPagamento] = useState(''); 
  
  const calcularTotal = (itens) => {
  if (!itens || itens.length === 0) {
    return 0; 
  }

  return itens.reduce((acc, item) => {

    const precoString = typeof item.preco === 'string' ? item.preco : item.preco.toString();
    const preco = parseFloat(precoString.replace('R$', '').replace(',', '.'));

    if (isNaN(preco)) {
      console.log('Preço inválido encontrado:', item);
      return acc; 
    }

    return acc + preco * item.quantidade;
  }, 0).toFixed(2); 
};

  useEffect(() => {
      console.log('Carrinho atualizadoC2:', carrinho);
    }, [carrinho]);

  const realizarPedido = () => {

    if (!metodoPagamento) {
      alert(i18n('Por favor, selecione um método de pagamento', lang));
      return;
    }
    
    const tagPedido = carrinho.length > 0 ? carrinho[0].tag : 'sem_tag';
    const numeroPedido = Math.floor(Math.random() * 1000000);
    const data = new Date().toLocaleDateString(); 
    const total = calcularTotal(carrinho); 
    const status = 'Em trânsito'

    const novoPedido = {
      numeroPedido, 
      id_usuario: perfilLogado.id, 
      data,
      tagPedido,
      status,
      total,
      metodoPagamento,
      itens: carrinho, 
    };

    setpedidos([...pedidos,novoPedido]);
    console.log(novoPedido);

    setCarrinho([]);

    navigation.navigate('Cardapio');
  };

  const metodoPagamentoTraducoes = {
    Pix: i18n('Pix', lang),
    Cartão: i18n('Cartão', lang),
    Boleto: i18n('Boleto', lang),
  };

  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.label}>{i18n('Total', lang)}</Text> 
        <Text style={styles.totalValue}>R$ {calcularTotal(carrinho)}</Text>
      </View>

      <Text style={styles.paymentTitle}>{i18n('Pagamento', lang)}</Text>  
      <View style={styles.paymentMethodsContainer}>
        {['Pix', 'Cartão', 'Boleto'].map((method, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paymentMethod,
              metodoPagamento === method && styles.paymentMethodSelected,
            ]}
            onPress={() => setMetodoPagamento(method)}
          >
            <Image
              source={{ uri: iconUrls[method] }} 
              style={styles.icon}
            />
            <Text style={styles.paymentText}>{metodoPagamentoTraducoes[method]}</Text> 
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.button} onPress={realizarPedido}>
        <Text style={styles.buttonText}>{i18n('Pagar', lang)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
