import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, View, TextInput } from 'react-native';


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

  const listaOrdenadaPorNome = ordenarArrayPorPropriedade(
    listaDeObjetos,
    'nome'
  );
  console.log('Ordenado por nome:', listaOrdenadaPorNome);

  const listaOrdenadaPorIdade = ordenarArrayPorPropriedade(
    listaDeObjetos,
    'idade'
  );
  console.log('Ordenado por idade:', listaOrdenadaPorIdade);

  const [list, setList] = useState([
    { id: 1, title: 'Item 1', clickCount: 0 },
    { id: 2, title: 'Item 2', clickCount: 0 },
    { id: 3, title: 'Item 3', clickCount: 0 },
    { id: 4, title: 'Item 4', clickCount: 0 },
    { id: 5, title: 'Item 5', clickCount: 0 },
  ]);

  const [count, setCount] = useState(0);
  const [isSorted, setIsSorted] = useState(false)
  const [filter, setFilter] = useState('')

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //incrementa o contador de clicks
  const handleCardPress = (id) => {
    setList(
      list.map((item) => 
        item.id === id ? {...item, clickCount: item.clickCount + 1} : item
      )
    )
  };

  const handleCardPress_2 = (id) => {
    const index = list.findIndex((item) => item.id ===id)
    if(index !== -1){ // nao tem um item com o mesmo id procurado
      const novaLista = [...list] //fazer uma copia da lista
      novaLista[index] = {...novaLista[index], clickCount:novaLista[index].clickCount+1 }
      setList(novaLista)
    }
  };

  //items : lista de elementos
  const sortList = (items) =>{
      if(isSorted){
        return [...items].sort( (a,b)=> a.clickCount - b.clickCount)
      }
      else {
        return items
      }
  }

  const filterList = (items) => {
    return items.filter((item)=> item.title.toLowerCase().includes(filter.toLocaleLowerCase()));
  }

  const ShowList = ({ id, title, clickCount }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleCardPress_2(id);
        }}>
        <Text>
          {' '}
          id: {id} tit: {title} clicks: {clickCount}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      {/* TextInput para filtrar a FlatList */}
      <TextInput
        style={styles.input}
        placeholder="Filtrar lista"
        onChangeText={(text) => setFilter(text)}
        //onChangeText={setFilter}
        value={filter}
      />

      {/*}
      {list.map((item) => {
        return (
          <ShowList
            id={item.id}
            title={item.title}
            clickCount={item.clickCount}
          />
        );
      })}
      */}

      <FlatList
        data = {sortList(filterList(list))}
        renderItem={ ({item}) => <ShowList id={item.id} title={item.title} clickCount={item.clickCount} />}
        keyExtractor={(item)=>item.id.toString()}
      />

      <TouchableOpacity 
        style={styles.sortButton} 
        onPress={() => setIsSorted(!isSorted)}>
        <Text>{isSorted ? "Desordenar" : "Ordenar por ClickCount"}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  sortButton:{
    alignItems: 'center',
    backgroundColor:'#AAAAAA',
    padding: 10,
    marginTop: 10
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 10
  }
});

export default App;
