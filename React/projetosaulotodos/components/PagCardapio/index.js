import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ItemCardapio from '../ItemCardapio/index';
import ListaCardapio from '../ListaCardapio/index'
import styles from './styles';


const Stack = createNativeStackNavigator();

export default function PagCardapio() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CardapioPag" component={ListaCardapio} options={{ headerShown: false }}/>
      <Stack.Screen name="CardapioItem" component={ItemCardapio} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
