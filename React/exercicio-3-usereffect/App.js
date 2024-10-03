import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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

  function ordenarArrayPorPropriedadeInversa(array, propriedade) {
    return array.sort((a, b) => {
      if (a[propriedade] > b[propriedade]) {
        return -1;
      }
      if (a[propriedade] < b[propriedade]) {
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
  // Por idade
  const listaOrdenadaPorIdade = ordenarArrayPorPropriedade(
    listaDeObjetos,
    'idade'
  );

  // Rederisada
  const [list, setList] = useState([
    { id: 1, title: 'Item 1', clickCount: 0, color: '' },
    { id: 2, title: 'Item 2', clickCount: 0, color: '' },
    { id: 3, title: 'Item 3', clickCount: 0, color: '' },
    { id: 4, title: 'Item 4', clickCount: 0, color: '' },
    { id: 5, title: 'Item 5', clickCount: 0, color: '' },
  ]);
  const [list2, setList2] = useState([]);
  const [count, setCount] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [filter, setFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [estado, setEstado] = useState(0)
  const [isSortedInverso, setisSortedInverso] = useState(false)
  const [color,setColor] = useState("#d08474")

  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === '#575757' ? '#9966cc' : '#575757');
    }, 5000); // Muda a cor a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  useEffect(() =>{
    setList2(list2.map((xd) => {
      if(xd.clickCount > 10){
          xd.color = '#00ffff'
      }
      if(xd.clickCount > 20){
          xd.color = '#fdee00'
      }
        return xd
    })
    )
  }, [list2])

  const sortList = (items) => {
    if (isSorted) {
      return [...items].sort((a, b) => a.clickCount - b.clickCount);
    } else {
      return items;
    }
  };

  const iisSortedInverso = (items) => {
    if (isSortedInverso) {
      return [...items].sort((a, b) => a.clickCount - b.clickCount);
    } else {
      return items;
    }
  };

  const getFilteredData = () => {
    if (selectedFilter === '') {
      return list;
    } else {
      return list.filter((item) => item.title === selectedFilter);
    }
  };

  const filterList = (items) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  //incrementa o contador de clicks
  const handleCardPress = (id) => {
    let banana = list.map((contenList) => {
      if (contenList.id == id) {
        contenList.clickCount++;
      }
      return contenList;
    });
    setList(banana);
    adicionarNaSegunda(id);
  };

   const handleCardPress1 = (id) => {
    let banana = list2.map((contenList) => {
      if (contenList.id == id) {
        contenList.clickCount++;
      }
      return contenList;
    });
    setList2(banana);
  };

  const adicionarNaSegunda = (id) =>{
    const existingItem = list.find((i) => i.id == id);
    let item = {id:estado , title:existingItem.title, clickCount:0}
    setEstado(estado+1)
    setList2([...list2, {...item}])};

  return (
    <ScrollView style={styles.fundo}>
      <Buttona count={count} onPress={() => setCount(count + 1)} />
      <TouchB ordenarArrayPorPropriedade={ordenarArrayPorPropriedade} list={list} setList={setList} />
      <OdernarPorClick isSorted={isSorted} setIsSorted={setIsSorted} />
      <TextInpu filter={filter} setFilter={setFilter} />
      <Lista setSelectedFilter={setSelectedFilter}/>
      <OrdenarInverso
        ordenarArrayPorPropriedadeInversa={ordenarArrayPorPropriedadeInversa}
        list2={list2}
        setList2={setList2}
      />
      <Flat
        filterList={filterList}
        sortList={sortList}
        getFilteredData={getFilteredData}
        handleCardPress={handleCardPress}
        backgroundColor = {color}
      />
      <Flat2 list2={list2} handleCardPress1={handleCardPress1} />
    </ScrollView>
  );
};

const OrdenarInverso = ({ ordenarArrayPorPropriedadeInversa, list2, setList2 }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          setList2(ordenarArrayPorPropriedadeInversa(list2.slice(), 'id'));
        }}
      >
        <Text>Ordenar por OrdenarInverso</Text>
      </TouchableOpacity>
    </View>
  );
};

const ShowList = ({ id, title, clickCount, handleCardPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      //style={styles.button}
      onPress={() => handleCardPress(id)}
    >
      <Text> id: {id} tit: {title} clicks: {clickCount}</Text>
    </TouchableOpacity>
  );
};

const ShowList2 = ({ id, title, clickCount, handleCardPress1 , backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button,{backgroundColor}]}
      onPress={() => handleCardPress1(id)}
    >
      <Text> id: {id} tit: {title} clicks: {clickCount}</Text>
    </TouchableOpacity>
  );
};

const TextCount = ({ count }) => {
  return (
    <View style={styles.countContainer}>
      <Text>Counts: {count}</Text>
    </View>
  );
};

const BotaoCount = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Counts++</Text>
    </TouchableOpacity>
  );
};

const Buttona = ({ count, onPress }) => {
  return (
    <View style={styles.bosta}>
      <TextCount count={count} />
      <BotaoCount onPress={onPress} />
    </View>
  );
};

const TouchB = ({ ordenarArrayPorPropriedade, list, setList }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setList(ordenarArrayPorPropriedade(list.slice(), 'title'));
        }}
      >
        <Text>Ordenar por Titulo</Text>
      </TouchableOpacity>
    </View>
  );
};

const Flat = ({ filterList, sortList, getFilteredData, handleCardPress, backgroundColor }) => {
  return (
    <View>
      <FlatList
        data={filterList(sortList(getFilteredData()))}
        renderItem={({ item }) => (
          <ShowList
            id={item.id}
            backgroundColor = {backgroundColor}
            title={item.title}
            clickCount={item.clickCount}
            handleCardPress={handleCardPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const Flat2 = ({ list2, handleCardPress1}) => {
  return (
    <ScrollView style={styles.flat2}>
      <FlatList
        data={list2}
        renderItem={({ item }) => (
          <ShowList2
            id={item.id}
            title={item.title}
            clickCount={item.clickCount}
            handleCardPress1={handleCardPress1}
            backgroundColor = {item.color}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const OdernarPorClick = ({ setIsSorted, isSorted }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => setIsSorted(!isSorted)}
      >
        <Text>Ordenar Por Clicks</Text>
      </TouchableOpacity>
    </View>
  );
};

const TextInpu = ({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinpu}
        placeholder="Filtrar lista"
        onChangeText={setFilter}
        value={filter}
      />
    </View>
  );
};

const Lista = ({ setSelectedFilter, style }) => {
  return (
    <View style={styles.hlist}>
      <RNPickerSelect
        style={malucoDoido}
        onValueChange={setSelectedFilter}
        placeholder={{ label: 'Selecione um elemento para filtrar', value: '' }}
        items={[
          { label: 'Item 1', value: 'Item 1' },
          { label: 'Item 2', value: 'Item 2' },
          { label: 'Item 3', value: 'Item 3' },
          { label: 'Item 4', value: 'Item 4' },
          { label: 'Item 5', value: 'Item 5' },
        ]}
      />
    </View>
  );
};

const malucoDoido = {
  inputWeb: {
    color: 'white',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
};

const styles = StyleSheet.create({
  bosta: {
    paddingHorizontal: 10,
    borderWidth: '2px',
    borderRadius: '12px',
    backgroundColor: '#ff5733',
    paddingBottom: 10,
  },
  flat2:{
    paddingTop:100,
    //height: '40%'
  },
  fundo: {
    backgroundColor: 'black',
    flex: 1,
  },
  hlist: {
    paddingTop: 5,
    paddingHorizontal: 8,
  },
  textinpu: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  container: {
    //justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d08474',
    borderRadius: '12px',
    padding: 12,
    marginTop: 10,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#9474d0',
    borderRadius: '12px',
    padding: 12,
    marginTop: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
