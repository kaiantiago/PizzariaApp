import { react, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Pedido } from '../../services/db_pedidos';
import { ProdPedido } from '../../services/db_prods_pedidos';
//Lista de Pedidos

export default function Admin({ navigation }) {


    const [pedidos, setPedidos] = useState([]);

    const [produtos, setProdutos] = useState([]);

    let tabelasCriadas = false;
  
    async function processamentoUseEffect() {
      if (!tabelasCriadas) {
        console.log("Verificando necessidade de criar tabelas...");
        tabelasCriadas = true;
        await createTables();
      }
  
      await carregaDados();
    }
  

    useEffect(
      () => {
        console.log('executando useffect');
        processamentoUseEffect();
    }, []);
  
    
    function carregaDados() {
        try {
            Pedido.listaPedidos().then((resposta) => {
            let ped = resposta;
            ProdPedido.listaProdutosDoPedido(ped.idPed).then((resposta) => {
                produtos.push(resposta);
            })
            setPedidos(ped);
        })
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Home')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Lista de pedidos</Text>
            </View>

            <ScrollView style={styles.listaProdutos}>
            {
                pedidos.map((pedido, index) => (
                    <CardPedidos pedido={pedido} key={index.toString()}
                        listaProdutos={produtos[index]}  />
                ))
            }
            </ScrollView>

        </View>
    )
}