import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { useState, useContext } from 'react';
import styles from './styles';

import { AppContext } from '../../App';

export default function ItemCardapio({ route, navigation }) {
  const { nome, img, preco, tag } = route.params
  const [quantidade, setQuantidade] = useState(1);
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);   

  const trySetQuantidade = (texto) => {

    let qtd = +(texto.length > 6 ? texto.slice(0, 6) : texto);

    if (!isNaN(qtd)) {
      setQuantidade(qtd < 0 ? 0 : qtd);
    }
  }

  const increment = () => {
    trySetQuantidade((quantidade + 1).toString());
  }

  const decrement = () => {
    trySetQuantidade((quantidade - 1).toString());
  }

  const trySetCarrinho = () => {
    const novoItem = {nome: nome, img: img, preco: preco, quantidade: quantidade, tag: tag};
    setCarrinho([...carrinho, novoItem]);
    navigation.goBack();
  }

  // TODO: Quantidade e talvez cartão?
  return (
    <Card>
      <View style={styles.backButtonView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>
          {i18n('Voltar',lang)}
          </Text>
        </TouchableOpacity>
      </View>
      <Card.Image 
        style={styles.itemImg}
        source={{uri:img}} 
        resizeMode="contain"
      />
      <Card.Divider />
      <Text style={{marginBottom:10, fontSize: 20}}>
        <Text style={{fontWeight:'bold'}}>
          {nome + " "}
        </Text> 
         - R$ {preco.toFixed(2).toString().replace(/\./, ',')}
      </Text>
      <Card.Divider />
      <Text style={{marginBottom:10, fontSize: 18}}>
        <Text style={{fontWeight:'bold'}}>
          {i18n('Quantidade:',lang)}{'\n'}
        </Text>
        <TextInput
          style={styles.textInput} 
          onChangeText={trySetQuantidade}
          value={quantidade}
        />
        <TouchableOpacity
          style={styles.incrementButton}
          onPress={increment}
        >
          <Text style={{width: '100%', height: '100%', textAlign: 'center'}}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.decrementButton}
          onPress={decrement}
        >
          <Text style={{width: '100%', height: '100%', textAlign: 'center'}}>
            -
          </Text>
        </TouchableOpacity>
      </Text>
      <Card.Divider />
      <View style={styles.itemAddCartsButtonView}>
        <TouchableOpacity
          style={styles.itemOpacity}
          onPress={trySetCarrinho}
        >
          <Text style={styles.itemAddCartButton}>
            {i18n('ADICIONAR AO CARRINHO',lang)}
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}