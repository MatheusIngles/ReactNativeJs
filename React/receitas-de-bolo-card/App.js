import { SafeAreaView, StyleSheet, View,  ScrollView, Bytton, icon } from 'react-native';
// import {} from 'react-native-elements'
// You can import supported modules from npm
import { Card, Text } from 'react-native-elements';

// Lista de receitas
let listadereceitas = [
  {
    title: 'bolo simples e fofo',
    calorias: 300,
    uri: 'https://i.pinimg.com/736x/34/4b/42/344b420ee2bb913db9e3620c8cf8d922.jpg',
    ingredientes: '1 tablete de manteiga sem sal em temperatura ambiente (200 g),2 xícaras (chá) de açúcar (360 g),4 ovos (gemas e claras separadas),2 xícaras (chá) de farinha de trigo (250 g)',
    modo_preparo: 'reuna todos os ingredientes; Massa: Unte 2 formas redondas de 21 cm de diâmetro com manteiga, forre-as com papel-manteiga e unte o papel. Bata a manteiga e o açúcar até obter uma mistura cremosa. Acrescente as gemas uma a uma, batendo até obter um creme fofo. Peneire sobre o creme, a farinha de trigo, o  Chocolate em Pó 50% Cacau Melken e o fermento, alternando com o leite. Misture com uma espátula, formando assim uma massa homogênea. Por último, bata as claras em neve e incorpore-as delicadamente à massa. Divida a massa nas duas formas. Leve para assar por aproximadamente 40 minutos (ou até que, ao espetar um palito, ele saia limpo) em forno preaquecido a 180 °C (forno médio). Tire do forno e deixe esfriar.'
  },{
    title: 'bolo simples e fofo',
    calorias: 300,
    uri: 'https://i.pinimg.com/736x/34/4b/42/344b420ee2bb913db9e3620c8cf8d922.jpg',
    ingredientes: '1 tablete de manteiga sem sal em temperatura ambiente (200 g),2 xícaras (chá) de açúcar (360 g),4 ovos (gemas e claras separadas),2 xícaras (chá) de farinha de trigo (250 g)',
    modo_preparo: 'reuna todos os ingredientes; Massa: Unte 2 formas redondas de 21 cm de diâmetro com manteiga, forre-as com papel-manteiga e unte o papel. Bata a manteiga e o açúcar até obter uma mistura cremosa. Acrescente as gemas uma a uma, batendo até obter um creme fofo. Peneire sobre o creme, a farinha de trigo, o  Chocolate em Pó 50% Cacau Melken e o fermento, alternando com o leite. Misture com uma espátula, formando assim uma massa homogênea. Por último, bata as claras em neve e incorpore-as delicadamente à massa. Divida a massa nas duas formas. Leve para assar por aproximadamente 40 minutos (ou até que, ao espetar um palito, ele saia limpo) em forno preaquecido a 180 °C (forno médio). Tire do forno e deixe esfriar.'
  }
]

const Recipe = ({title,calorias,uri,ingredientes,modo_preparo}) => {
  return (
    <Card>
      <Card.Title> {title} </Card.Title>
      <Card.Divider />
      <Card.Image style={{padding : 0}} source = {{uri:uri}} />
      <Text style= {{marginBottom: 10}}> 
        <Text style={{fontStyle: 'italic', fontWeight: 'bold', }}> Ingredientes: {'\n'}
        </Text>
          {ingredientes}
      </Text>
      <Card.Divider />
      <Text style= {{marginBottom: 10}}> 
        <Text style={{fontStyle: 'italic', fontWeight: 'bold', }}> Modo de Preparo: {'\n'}
        </Text>
          {modo_preparo}
      </Text>
      <Card.Divider />
      <Text style= {{marginBottom: 10}}> 
        <Text style={{fontStyle: 'italic', fontWeight: 'bold', }}> Calorias: {'\n'}
        </Text>
          {calorias}
      </Text>
      
    </Card>
  )
}



// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
      {
        listadereceitas.map((item) =>{
          return (
            <Recipe title={item.title} calorias ={item.calorias} uri={item.uri} ingredientes={item.ingredientes} modo_preparo ={item.modo_preparo} />
          )
        }
        )
        }
      }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
