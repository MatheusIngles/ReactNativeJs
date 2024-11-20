import React, { useState, Component, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import styles from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { AppContext } from '../../App';
const Stack = createNativeStackNavigator();
const screenWidth = Dimensions.get('window').width;

const Icon = ({ icon, item, background }) => (
  <FontAwesome
    name={icon}
    size={40}
    color={
      item.iconColor || (!item.background || !background ? '#' : '#f5f5f5')
    }
    style={item.styleIcon}
  />
);

const returnaData = () =>{
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);

  const data = [
  {
    name: (i18n('Vendas de cada mes',lang)),
    background: '#F83758',
    icon: (item, background) => Icon({ icon: 'pie-chart', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
  {
    name: (i18n('Vendas por dia',lang)),
    background: '#F83758',
    icon: (item, background) => Icon({ icon: 'line-chart', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
  {
    name: (i18n('Total de vendas',lang)),
    background: '#F83758',
    icon: (item, background) => Icon({ icon: 'money', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
  {
    name: (i18n('Total de produtos vendidos',lang)),
    background: '#F83758',
    icon: (item, background) =>
      Icon({ icon: 'shopping-cart', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
  {
    name: (i18n('Novos usuários por dia',lang)),
    background: '#F83758',
    icon: (item, background) => Icon({ icon: 'user-plus', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
  {
    name: (i18n('Usuários que fizeram compras',lang)),
    background: '#F83758',
    icon: (item, background) => Icon({ icon: 'users', item, background }),
    styleName: { color: '#000000', fontWeight: 'bold' },
  },
];

  return data
}

const Vendas_Cada_Produto = ({ navigation }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  let datinha = calculandoDatinhas(pedidos)
  let conteudinho = calculandoConteudinho(pedidos)

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: datinha,
          datasets: [
            {
              data: conteudinho,
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '4392F9',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
        }}
        style={styles.grafic}
      />
    </View>
  );
};

const calculandoConteudinho = (pedidos) => {
  const monthMap = {
    '/01/': 0,
    '/02/': 0,
    '/03/': 0,
    '/04/': 0,
    '/05/': 0,
    '/06/': 0,
    '/07/': 0,
    '/08/': 0,
    '/09/': 0,
    '/10/': 0,
    '/11/': 0,
    '/12/': 0,
  };

  let conteudinho = [];

  pedidos.forEach((item) => {
    for (let key in monthMap) {
      if (
        item.data.includes(key) &&
        item.status != 'Cancelado' &&
        item.status != 'Aguardando Pagamento'
      ) {
        monthMap[key] += parseFloat(
          item.total.replace('R$', '').replace(',', '.')
        );
      }
    }
  });

  for (let mes in monthMap) {
    if (monthMap[mes] != 0) {
      conteudinho.push(monthMap[mes]);
    }
  }

  return conteudinho;
};

const calculandoDatinhas = () => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 

  const monthMap = {
    '/01/': i18n('Jan',lang),
    '/02/': i18n('Feb',lang),
    '/03/': i18n('Mar',lang),
    '/04/': i18n('Apr',lang),
    '/05/': i18n('May',lang),
    '/06/': i18n('Jun',lang),
    '/07/': i18n('Jul',lang),
    '/08/': i18n('Aug',lang),
    '/09/': i18n('Sep',lang),
    '/10/': i18n('Oct',lang),
    '/11/': i18n('Nov',lang),
    '/12/': i18n('Dec',lang),
  };

  const orderedMonths = [
    i18n('Jan',lang),
    i18n('Feb',lang),
    i18n('Mar',lang),
    i18n('Apr',lang),
    i18n('May',lang),
    i18n('Jun',lang),
    i18n('Jul',lang),
    i18n('Aug',lang),
    i18n('Sep',lang),
    i18n('Oct',lang),
    i18n('Nov',lang),
    i18n('Dec',lang),
  ];
  let pseudoDatas = [];

  pedidos.forEach((item) => {
    for (let key in monthMap) {
      if (item.data.includes(key) && !pseudoDatas.includes(monthMap[key]) && item.status != 'Cancelado' && item.status != 'Aguardando Pagamento') {
        pseudoDatas.push(monthMap[key]);
      }
    }
  });

  return pseudoDatas.sort(
    (a, b) => orderedMonths.indexOf(a) - orderedMonths.indexOf(b)
  );
};

const Vendas_por_Dia = ({navigation}) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  let dias = calculandoDatinhasDia(pedidos)
  let conteudinho = calculandoConteudinhoPorDia(pedidos)

  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: dias,
          datasets: [
            {
              data: conteudinho,
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.9} // Largura do gráfico
        height={220} // Altura do gráfico
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 0, // Número de casas decimais
          color: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.grafic}
      />
    </View>
  );
};

const calculandoConteudinhoPorDia = (pedidos) => {
  const dayMap = {
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
    '05': 0,
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
    '25': 0,
    '26': 0,
    '27': 0,
    '28': 0,
    '29': 0,
    '30': 0,
    '31': 0,
  };

  let conteudinho = [];

  pedidos.forEach((item) => {
    const dia = item.data.split('/')[0];
    if (
      dayMap[dia] !== undefined &&
      item.status !== 'Cancelado' &&
      item.status !== 'Aguardando Pagamento'
    ) {
      dayMap[dia] += parseFloat(
        item.total.replace('R$', '').replace(',', '.')
      );
    }
  });

  for (let dia in dayMap) {
    if (dayMap[dia] !== 0) {
      conteudinho.push(dayMap[dia]);
    }
  }

  return conteudinho;
};

const calculandoDatinhasDia = (pedidos) => {
  const dayMap = {
    '01': '01',
    '02': '02',
    '03': '03',
    '04': '04',
    '05': '05',
    '06': '06',
    '07': '07',
    '08': '08',
    '09': '09',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
    '18': '18',
    '19': '19',
    '20': '20',
    '21': '21',
    '22': '22',
    '23': '23',
    '24': '24',
    '25': '25',
    '26': '26',
    '27': '27',
    '28': '28',
    '29': '29',
    '30': '30',
    '31': '31',
  };

  const orderedDays = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  let pseudoDatas = [];

  pedidos.forEach((item) => {
    const dia = item.data.split('/')[0];
    
    if (dayMap[dia] && !pseudoDatas.includes(dayMap[dia]) && item.status != 'Cancelado' && item.status != 'Aguardando Pagamento') {
      pseudoDatas.push(dayMap[dia]);
    }
  });

  return pseudoDatas.sort(
    (a, b) => orderedDays.indexOf(a) - orderedDays.indexOf(b)
  );
};

const Popup = ({ setbull, bull }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  let total = calculandoConteudinhoTotal(pedidos);

  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.totalText}>{i18n('Total Atual:',lang)}{total}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setbull(!bull)}>
          <Text style={styles.buttonText}>{i18n('Fechar',lang)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const calculandoConteudinhoTotal = (pedidos) => {
  const dayMap = {
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
    '05': 0,
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
    '25': 0,
    '26': 0,
    '27': 0,
    '28': 0,
    '29': 0,
    '30': 0,
    '31': 0,
  };

  let total = 0

  pedidos.forEach((item) => {
    const dia = item.data.split('/')[0];
    if (
      dayMap[dia] !== undefined &&
      item.status !== 'Cancelado' &&
      item.status !== 'Aguardando Pagamento'
    ) {
      total += parseFloat(
        item.total.replace('R$', '').replace(',', '.')
      );
    }
  });

  return total;
};

const Total_de_produtos_vendidos = ({ navigation }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  let datinha = calculandoItenzinhosNomes(pedidos)
  let produtos = calculandoItenzinhos(pedidos)
  let total = 0
  datinha.forEach((x)=> {
    total += x
  });
  
  
  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: produtos,
          datasets: [
            {
              data: datinha,
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.9} // Largura do gráfico
        height={220} // Altura do gráfico
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 0, // Número de casas decimais
          color: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.grafic}
      />
      <Text style={styles.totalText}>{i18n('Total Atual:',lang)} {total}</Text>
    </View>
  );
};

const calculandoItenzinhos = (pedidos) => {
  const tagMap = {
    'Roupas': 0,
    'Acessórios': 0,
    'Calçados': 0,
    'Cerveja': 0,
    'Vinho': 0,
    'Destilado': 0,
    'Licor': 0,
  };

  let conteudinho = [];

  pedidos.forEach((item) => {
    if (item.status !== 'Cancelado' && item.status !== 'Aguardando Pagamento') {
      item.itens.forEach((x) => {
        if (tagMap[x.tag] !== undefined) {
          tagMap[x.tag] += x.preco * x.quantidade;
        }
      });
    }
  });

  for (let tag in tagMap) {
    if (tagMap[tag] !== 0) {
      conteudinho.push(tag);
    }
  }

  return conteudinho;
};

const calculandoItenzinhosNomes = (pedidos) => {
  const tagMap = {
    'Roupas': 0,
    'Acessórios': 0,
    'Calçados': 0,
    'Cerveja': 0,
    'Vinho': 0,
    'Destilado': 0,
    'Licor': 0,
  };

  let conteudinho = [];

  pedidos.forEach((item) => {
    if (item.status !== 'Cancelado' && item.status !== 'Aguardando Pagamento') {
      item.itens.forEach((x) => {
        if (tagMap[x.tag] !== undefined) {
          tagMap[x.tag] += x.quantidade;
        }
      });
    }
  });

  for (let tag in tagMap) {
    if (tagMap[tag] !== 0) {
      conteudinho.push(tagMap[tag]);
    }
  }

  return conteudinho;
};

const Novos_usuarios_por_dia = ({ navigation }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  let datinhas = calculandoUsuariosNovosPorDia(perfis)
  let conteudinho = calculandoUsrDia(perfis)

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: conteudinho,
          datasets: [
            {
              data: datinhas
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '4392F9',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(151, 66, 81, ${opacity})`,
        }}
        style={styles.grafic}
      />
    </View>
  );
};

const calculandoUsuariosNovosPorDia = (perfis) => {
  const dayMap = {
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
    '05': 0,
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
    '25': 0,
    '26': 0,
    '27': 0,
    '28': 0,
    '29': 0,
    '30': 0,
    '31': 0,
  };

  let conteudinho = [];
  
  perfis.forEach((item) => {
    const dia = String(item.data.getDate()).padStart(2, '0'); // Extrai o dia da data
    if (dayMap[dia] !== undefined) {
      dayMap[dia]++; // Incrementa o número de usuários no dia
    }
  });

  for (let dia in dayMap) {
    if (dayMap[dia] !== 0) {
      conteudinho.push(dayMap[dia])
    }
  }

  return conteudinho;
};

const calculandoUsrDia = (perfis) => {
  const dayMap = {
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
    '05': 0,
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
    '25': 0,
    '26': 0,
    '27': 0,
    '28': 0,
    '29': 0,
    '30': 0,
    '31': 0,
  };

  let conteudinho = [];

  perfis.forEach((item) => {
    const dia = String(item.data.getDate()).padStart(2, '0'); // Extrai o dia da data
    if (dayMap[dia] !== undefined) {
      dayMap[dia]++; // Incrementa o número de usuários no dia
    }
  });

  for (let dia in dayMap) {
    if (dayMap[dia] !== 0) {
      conteudinho.push(dia)
    }
  }

  return conteudinho;
};

const calculandoUsrComprados = () => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  const data = [
    {
      name: i18n('Não compraram',lang),
      population: 0,
      color: '#FF6384',
      legendFontColor: '#333',
      legendFontSize: 15,
    },
    {
      name: i18n('Compraram',lang),
      population: 0,
      color: '#36A2EB',
      legendFontColor: '#333',
      legendFontSize: 15,
    }
  ];
  
  perfis.forEach((item) => {
    let comprou = true
    pedidos.forEach((x)=> {
      if(x.status !== 'Cancelado' &&  x.status !== 'Aguardando Pagamento'){
        if(x.id_usuario == item.id){
          data.forEach((a)=>{
            if(a.name == i18n('Compraram',lang) && comprou){
              a.population++
              comprou = false
            }
          })
        }
      }
    })
    if(comprou){
      data.forEach((a)=>{
            if(a.name == i18n('Não compraram',lang)){
              a.population++
            }
      })
    }

  });
  return data
};

const Usuarios_que_fizeram_compras = ({ navigation }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  const data = calculandoUsrComprados(perfis, pedidos)

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth * 0.9}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="0"
        center={[9, 10]}
      />
    </View>
  );
};

const Home = ({ navigation }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  const [bull, setbull] = useState(false);

  const card = ({ name }) => {
    switch (name) {
      case (i18n('Vendas de cada mes',lang)):
        return navigation.navigate('Vendas de cada mes');

      case (i18n('Vendas por dia',lang)):
        return navigation.navigate('Vendas por dia');

      case (i18n('Total de vendas',lang)):
        return setbull(!bull);

      case (i18n('Total de produtos vendidos',lang)):
        return navigation.navigate('Total de produtos vendidos');

      case (i18n('Novos usuários por dia',lang)):
        return navigation.navigate('Novos usuários por dia');

      case (i18n('Usuários que fizeram compras',lang)):
        return navigation.navigate('Usuários que fizeram compras');
    }
  };

  return (
    <View style={styles.containe}>
      <Dashboard
        data={returnaData()}
        background={true}
        card={card}
        column={2}
        rippleColor={'#3498db'}
      />
      {bull && <Popup bull={bull} setbull={setbull} />}
    </View>
  );
};

export default function Tela_Dashboard({ navigation }) {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false , title: 'Home'}}
        />
        <Stack.Screen
          name="Vendas de cada mes"
          component={Vendas_Cada_Produto}
          options={{
          title: i18n('Vendas de cada mes',lang)}}
        />
        <Stack.Screen name="Vendas por dia" component={Vendas_por_Dia} 
        options={{
        title: i18n('Vendas por dia',lang)}}
        />
        <Stack.Screen
          name="Total de produtos vendidos"
          component={Total_de_produtos_vendidos}
          options={{
          title: i18n('Total de produtos vendidos',lang)}}
        />
        <Stack.Screen
          name="Novos usuários por dia"
          component={Novos_usuarios_por_dia}
          options={{
          title: i18n('Novos usuários por dia',lang)}}
        />
        <Stack.Screen
          name="Usuários que fizeram compras"
          component={Usuarios_que_fizeram_compras}
          options={{
          title: i18n('Usuários que fizeram compras',lang)}}
        />
      </Stack.Navigator>
    </View>
  );
}
