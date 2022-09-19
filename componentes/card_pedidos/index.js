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

    function getTextoData(numero){
        var data = new Date(numero);
        return "Compra em " + data.toLocaleDateString();
    }

    return (
        <View style={{ width: '100%' }}>
            <Collapse style={{ width: '100%' }}>
                <CollapseHeader>
                    <View style={styles.contato}>
                        <Text style={styles.txtBloco}>{pedido.cep}</Text>
                        <Text style={{ marginLeft: 30 }}>Valor total: R${pedido.total}</Text>
                        <Text style={{ marginLeft: 25 }}>{getTextoData(pedido.data)}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody >
                    {produtos.map((prod, index) => (
                        <View key={index.toString()} style={styles.bodyCollapse}>
                            <Text style={{ marginLeft: 7 }}>{prod.descricao}</Text>
                        </View>
                    ))}
                </CollapseBody>
            </Collapse>
        </View>
    );
}