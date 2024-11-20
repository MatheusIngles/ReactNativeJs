import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useState, useContext } from 'react';
import RNPickerSelect from "react-native-picker-select";

import { AppContext } from '../../App';
import { styles, pickerStyle, buttonStyle } from './styles';


const ItensComp = ({itens, onPress, filterItens}) => {
    return (
        <View style={styles.flatlistView}>
          <FlatList
            style={styles.flatList}
            data={filterItens(itens)}
            renderItem={({item}) => <ItemLista nome={item.nome} desc={item.desc} uri={item.img} preco={item.preco} tag={item.tag} onPress={onPress} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    );
}

const ItemLista = ({ nome, desc, uri, preco, tag, onPress }) => {
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext);
  return (
    <Card>
        <Card.Title style={styles.itemTitle}> {nome} </Card.Title>
        <Card.Divider />
        <Card.Image 
          style={styles.itemImg}
          source={{uri:uri}} 
          resizeMode="contain"
        />
        <Text style={{marginBottom:10}}>
          <Text style={{fontStyle:'italic', fontWeight:'bold'}}>
           { i18n('Descrição:',lang)}{'\n'}
          </Text>
          {desc}
        </Text>
        <Card.Divider />
        <Text style={{marginBottom:10}}>
          <Text style={{fontStyle:'italic', fontWeight:'bold'}}>
            {i18n('Preço:',lang)}{'\n'}
          </Text>
          R$ {preco.toFixed(2).toString().replace(/\./, ',')}
        </Text>
        <Card.Divider />
        <View style={styles.itemAddCartsButtonView}>
          <TouchableOpacity
            style={styles.itemOpacity}
            onPress={() => onPress(nome, uri, preco, tag)}
          >
            <Text style={styles.itemAddCartButton}>
              {i18n('COMPRAR',lang)}
            </Text>
          </TouchableOpacity>
        </View>
    </Card>
  );
}

export default function Items({ navigation }) {
  const [filter, setFilter] = useState('');
  const [lang, setLang, perfis, setPerfis, carrinho, setCarrinho, pedidos, i18n, perfilLogado, setPerfilLogado] = useContext(AppContext); 
  const [produtos, setProdutos] = useState([
    {id: 0, nome: "Brahma", desc: (i18n("Cerveja lager leve, refrescante e saborosa, uma das mais populares no mercado.",lang)), 
    img: "https://choppbrahmaexpress.vtexassets.com/arquivos/ids/155964/brahma_pilsen_269ml.png?v=637353455531830000", 
    preco: 4.5, tag: "Cerveja"},

    {id: 1, nome: "Skol", desc:  (i18n("Cerveja pilsen leve, com sabor suave e refrescante, muito apreciada pelos consumidores.",lang)), 
    img: "https://apoioentrega.vteximg.com.br/arquivos/ids/850808/151024_0.png?v=638595196571800000", 
    preco: 3.9, tag: "Cerveja"},
    
    {id: 2, nome: "Heineken", desc:  (i18n("Cerveja premium de origem holandesa, com sabor marcante e amargor equilibrado.")), 
    img: "https://static.paodeacucar.com/img/uploads/1/64/25002064.png", 
    preco: 6.0, tag: "Cerveja"},

    {id: 3, nome: "Vinho branco", desc:  (i18n("Vinho fresco e leve, ideal para acompanhar frutos do mar e pratos leves.")), 
    img: "https://grandeadega.vtexassets.com/arquivos/ids/164768-800-auto?v=638586568152370000&width=800&height=auto&aspect=true", 
    preco: 35.0, tag: "Vinho"},

    {id: 4, nome: "Vinho Tinto", desc:  (i18n("Vinho encorpado, com sabores ricos de frutas vermelhas e taninos equilibrados.")), 
    img: "https://images.tcdn.com.br/img/img_prod/796852/vinho_tinto_suave_bordo_san_martin_750ml_47_1_20200525112436.png", 
    preco: 40.0, tag: "Vinho"},

    {id: 5, nome: "Espumante", desc:  (i18n("Bebida espumante e festiva, com sabor refrescante e notas frutadas.")), 
    img: "https://ingavinhos.vtexassets.com/arquivos/ids/160654-800-auto?v=637879686933470000&width=800&height=auto&aspect=true", 
    preco: 50.0, tag: "Vinho"},

    {id: 6, nome: "Vodka", desc:  (i18n("Destilado neutro, popular em coquetéis, com sabor limpo e suave.")), 
    img: "https://cdn.sistemawbuy.com.br/arquivos/a48e76d3b4ff8b6e919e194fd7dfcfed/produtos/641b274cdef2e/absoluttradicional-641b274d29b20.png", 
    preco: 30.0, tag: "Destilado"},

    {id: 7, nome: "Whisky", desc:  (i18n("Destilado de malte ou grãos, com sabor amadeirado e notas de caramelo.")), 
    img: "https://compracerta.vtexassets.com/arquivos/ids/626713-800-auto?v=637915983924230000&width=800&height=auto&aspect=true", 
    preco: 120.0, tag: "Destilado"},

    {id: 8, nome: "Tequila", desc:  (i18n("Destilado de agave mexicano, com sabor terroso e toques de pimenta.")), 
    img: "https://cdn.sistemawbuy.com.br/arquivos/a48e76d3b4ff8b6e919e194fd7dfcfed/produtos/641a1e6200ff3/cuervooro-641a1e623d19a.png", 
    preco: 60.0, tag: "Destilado"},

    {id: 9, nome: "Cachaça", desc:  (i18n("Destilado brasileiro de cana-de-açúcar, usado para preparar caipirinhas.")), 
    img: "https://www.ciamuller.com.br/upload/produtos/cachaca-51/atualizacao-dez23/packshot-51-379x799px-7806.png", 
    preco: 20.0, tag: "Destilado"},

    {id: 10, nome: "Amaretto", desc:  (i18n("Licor italiano com sabor de amêndoas, ideal para sobremesas e coquetéis.")), 
    img: "https://www.emporiofreicaneca.com.br/wp-content/uploads/2019/07/licor-stock-amaretto-dell-orso.png", 
    preco: 40.0, tag: "Licor"},

    {id: 11, nome: "Baileys", desc:  (i18n("Licor cremoso de origem irlandesa, com sabor de café e chocolate.")), 
    img: "https://www.emporiofreicaneca.com.br/wp-content/uploads/2018/11/piscine.png", 
    preco: 70.0, tag: "Licor"},

    {id: 12, nome: "Grand Marnier Cordon Rouge", desc:  (i18n("Licor francês de laranja, com notas ricas e complexas.")), 
    img: "https://www.emporiofreicaneca.com.br/wp-content/uploads/2024/01/Licor-Grand-Marnier-Rouge-700ml.png.webp", 
    preco: 90.0, tag: "Licor"}
  ]);
  
  const items = [...new Set(produtos.map(e => e.tag))].map(e => {
    return {label: i18n(e,lang), value: e};
  });

  const filterItemsList = (items) => {
    return items.filter((item) => item.tag.toLowerCase().includes(filter.toLocaleLowerCase()))
  }

  const navFunction = (nome, img, preco, tag) => {
    navigation.navigate('CardapioItem', {
                          nome: nome,
                          img: img,
                          preco: preco,
                          tag: tag
                        })
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.filterText}>
          {i18n('Filtro de pesquisa:',lang)}
        </Text>
        <RNPickerSelect
            onValueChange={(value) => setFilter(value)}
            items={items}
            placeholder={{ label:(i18n('Selecione um filtro...',lang)), value: '' }}
            style={pickerStyle}
        />
      </View>
      <ItensComp 
        itens={produtos}
        onPress={(nome, img, preco, tag) => {navFunction(nome, img, preco, tag)}}
        filterItens={filterItemsList}
      />
    </ScrollView>
  )
}



/*
<View style={styles.container}>
    <Text style={styles.paragraph}>
      Cardapio
    </Text>
    <Button title="Item" onPress={() => navigation.navigate('CardapioItem')} /> 
</View>
*/