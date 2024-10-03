import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {useState} from 'react'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

function soma(a,b){
  return a+b;
}

const soma2 = function(a,b){
  return a+b;
}

const soma3 = (a,b)=>{
  return a+b;
}

const selctInpares = (vet) => vet.filter(num => num% 2!=0)
const contaInpares = (vet) => vet.filter(num => num% 2!=0).length

const soma4 = (a,b) => a+b
const multiplosx = (num) =>{return (num%3 == 0  && num % 5== 0)}

let idades=[soma(1,9),11,12,13,14,15]

export default function App() {
  console.log(soma4(1,3))
  let numeroImpares = selctInpares(idades);
  let multiplos = idades.filter(multiplosx)

  const[text, setText] = useState('')
  const[people, setPeople] = useState([
    {id:1, name: 'Alice dona da boca', age: 25},
    {id:2, name: 'Alice Do cabelo caheado da cor do pecado', age: 85},
    {id:3, name: 'Alice', age: 23},
    {id:4, name: 'Luffy', age: 215},
    {id:5, name: 'Ace', age: 325},
  ])


  const filterAndSortedPeople = people.filter(person => person.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())).sort((a,b) => a.age-b.age)


  return (
    <SafeAreaView style={styles.container}>
  <Text style={styles.paragraph}>
    numeros inpares: {numeroImpares}
  </Text>
  <Text style={styles.paragraph}>
    contar inpares: {contaInpares(idades)}
  </Text>
  <Text style={styles.paragraph}>
    contar multiplos: {multiplos}
  </Text>
  <Text>
  

  </Text>
    {
      idades.map((item) =>{
        return(
          <text style={styles.paragraph} > {item}</text>
        )
      }
      )
    }

    {
      filterAndSortedPeople.map(({id,name,age}) => (
        <Text style={styles.paragraph} key={id}>
          Nome: {name}, Idade: {age}, Id: {id} 
        </Text>
      
      ))
    }

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
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
