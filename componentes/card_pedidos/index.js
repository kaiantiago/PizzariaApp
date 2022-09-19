import {
    Text, TouchableOpacity, View, Image, Alert
} from 'react-native';
import { react, useState, useEffect } from 'react';
import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { ProdPedido } from '../../services/db_prods_pedidos';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
//import { Thumbnail, List, ListItem, Separator } from 'native-base';

export default function CardPedidos({ pedido }) {
    console.log(pedido)

    const [produtos, setProdutos] = useState([]);

    useEffect(
        () => {
          console.log('executando useffect');
          carregaDados();
      }, []);
      
      function carregaDados() {
          try {
              ProdPedido.listaProdutosDoPedido(pedido.id).then((resP) => {
                      //produtos.push(resP);
                      console.log("lista produto ")
                      //console.log(resP);
                      //console.log('cheguei')
                      setProdutos(resP)
                  })
          } catch (e) {
              console.log(e.toString());
              Alert.alert(e.toString());
          }
      }

    return (
        <View style={{width:'100%'}}>
                <Collapse style={{width:'100%'}}>
            <CollapseHeader>
            <View style={styles.contato}>
                <Text>{pedido.cep}</Text>
            </View>
            </CollapseHeader>
            <CollapseBody>
                {produtos.map((prod, index) => (
                        <Text key={index.toString()}>{prod.descricao}</Text>
                ))}
            </CollapseBody>
        </Collapse>
        </View>
    );
}