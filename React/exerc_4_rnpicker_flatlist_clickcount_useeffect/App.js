import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function Card({ title, onPress, clickCount, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.cardText}>
        {title} (Clicado {clickCount} vezes)
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    // Simula a carga inicial de dados
    setList([
      { id: 1, title: 'Item 1', clickCount: 0 },
      { id: 2, title: 'Item 2', clickCount: 0 },
    ]);
    // Exemplo de mudança de cor baseada em uma condição ou ação
    const interval = setInterval(() => {
      setBackgroundColor(prevColor => prevColor === '#fff' ? '#f0f0f0' : '#fff');
    }, 5000); // Muda a cor a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const addItemToList = () => {
    const newItem = { id: list.length + 1, title: inputValue, clickCount: 0 };
    setList(currentList => [...currentList, newItem]);
    setInputValue('');
  };

  const handleCardPress = (id) => {
    setList(currentList =>
      currentList.map((item) =>
        item.id === id ? { ...item, clickCount: item.clickCount + 1 } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Itens</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={list.map((item) => ({ label: item.title, value: item.id }))}
        placeholder={{ label: "Selecione um item...", value: null }}
      />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Adicione um novo item"
      />
      <Button title="Adicionar Item" onPress={addItemToList} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            clickCount={item.clickCount}
            onPress={() => handleCardPress(item.id)}
            backgroundColor={backgroundColor}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
  },
});
