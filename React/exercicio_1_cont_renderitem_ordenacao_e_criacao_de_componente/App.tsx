import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

const App = () => {

  
  function ordenarArrayPorPropriedade(array, propriedade) {
    return array.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
  }

  // Exemplo de uso
  const listaDeObjetos = [
    { nome: 'Carlos', idade: 30 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 28 },
  ];
  // Por nome
  const listaOrdenadaPorNome = ordenarArrayPorPropriedade(
    listaDeObjetos,
    'nome'
  );
  console.log('Ordenado por nome:', listaOrdenadaPorNome);
  // Por idade
  const listaOrdenadaPorIdade = ordenarArrayPorPropriedade(
    listaDeObjetos,
    'idade'
  );
  console.log('Ordenado por idade:', listaOrdenadaPorIdade);

  // Rederisada
  const [list, setList] = useState([
    { id: 1, title: 'Item 1', clickCount: 0 },
    { id: 2, title: 'Item 2', clickCount: 0 },
    { id: 3, title: 'Item 3', clickCount: 0 },
    { id: 4, title: 'Item 4', clickCount: 0 },
    { id: 5, title: 'Item -1', clickCount: 0 },
  ]);

  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //incrementa o contador de clicks
  const handleCardPress = (id) => {
    let banana = list.map((contenList) => {
      if(contenList.id == id){
        contenList.clickCount++;
      }
      return contenList;
    })
    setList(banana);
  };

  // Cumprindo o Exercicio
  const handlexyz  = (id) => {
    let banana = list.map((contenList) => {
      if(contenList.id == id){
        contenList.clickCount++;
      }
      return contenList;
    })
    setList(banana);
  };

  // Para renderizar os componetens 
  const renderItem = ({item}) => {

    return (
       <ShowList
            id={item.id}
            title={item.title}
            clickCount={item.clickCount}
        />
    );
  };
  // Para criar os termos da lista
  const ShowList = ({ id, title, clickCount }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCardPress(id);
        }}>
        <Text>
          {' '}
          id: {id} tit: {title} clicks: {clickCount}
        </Text>
      </TouchableOpacity>
    );
  };
  // Botao de teste
  const Buttona = () =>{
    return (
      <View style={styles.bosta}>
      <View style={styles.countContainer}>
        <Text>F no chat: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>F</Text>
      </TouchableOpacity>
      </View>
      )
  }
  // atualizar por titulo
  const TouchB = () =>{
   return(<View>
     <TouchableOpacity style={styles.button} onPress={() => {(setList(ordenarArrayPorPropriedade(list.slice(),"title")));}}>
      <Text>Ordenar por Titulo </Text>
    </TouchableOpacity>
    </View>
    )
  }

  const Flat = () =>{
    return (<FlatList
        style = {styles.container}
        data = {list}
        renderItem = {renderItem}
        keyExtractor = {item => item.id} 
      />)
  }

  return (
    <View style={styles.container}>
      <Buttona/>
      <TouchB/>
      <Flat/>
    </View>
  );
};

const styles = StyleSheet.create({
  bosta: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 2,
    marginTop: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
