import { react, useState, useEffect } from 'react';
import styles from './styles';
import {Produto} from '../../services/db_produtos';
import {Categoria} from '../../services/db_categorias';
import CardProdutoCompra from '../../componentes/card_produto_compra';
import { Pedido } from '../../services/db_pedidos';

import {
  Alert, Text, TextInput, TouchableOpacity,
  View, Keyboard, ScrollView, Image
} from 'react-native';

import { createTables } from '../../services/db_base';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Comprar({navigation}) {

    const [id, setId] = useState();
    const [cep, setCep] = useState();
    const [total, setTotal] = useState();
    const [qtd, setQtd] = useState();
    const [idCat, setIdCat] = useState();
    const [todosProdutos, setTodosProdutos] = useState([]);

    const [openP, setOpenP] = useState(false);
    const [valueP, setValueP] = useState(null);
    const [produtos, setProdutos] = useState([]);
    
    
    const [openC, setOpenC] = useState(false);
    const [valueC, setValueC] = useState(null);
    const [categorias, setCategorias] = useState([]);

    const [prodsCompra, setProdsCompra] = useState([]);

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
        Categoria.listaCategorias().then((resposta) => {
            let categs = [];
            //console.log(resposta);
            resposta.forEach(element => {
              categs.push({label: element.descricao, value: element.idC})
          });
          //console.log(categs);
            setCategorias(categs);
        })
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    async function salvaDados() {
        let total = 0;
        //console.log(prodsCompra);
        prodsCompra.forEach(element => {
            total+=element.precoUn*element.qtd;
        });

        let obj = {
          id: id,
          total: total,
          cep: cep
        };
    
        try {

            let resposta = (await Pedido.adicionaPedido(obj, prodsCompra));
    
            if (resposta)
              Alert.alert('Compra realizada com sucesso!!!');
            else
              Alert.alert('Falha na compra, sorry!');
          
          limparTodosCampos();
          await carregaDados();
        } catch (e) {
          Alert.alert(e.message);
        }
      }
      
      
    async function limparCampos() {
        setQtd("");
        setValueC(null);
        setValueP(null);
        setId(undefined);
        setOpenC(false);
        setOpenP(false);
        setProdutos([]);
        setTodosProdutos([]);
        Keyboard.dismiss();
    }

    async function limparTodosCampos() {
        setQtd("");
        setValueC(null);
        setValueP(null);
        setId(undefined);
        setOpenC(false);
        setOpenP(false);
        setProdutos([]);
        setProdsCompra([]);
        setTodosProdutos([]);
        setCep("");
        Keyboard.dismiss();
    }

    function add1Prod(identificador) {
        const prodCompra = prodsCompra.find(produto => produto.id == identificador);
        prodCompra.qtd+=1;
        carregaDados();
    }

    function sub1Prod(identificador) {
        const prodCompra = prodsCompra.find(produto => produto.id == identificador);
        prodCompra.qtd-=1;
        if(prodCompra.qtd<=0)
            removeItemOnce(prodsCompra, prodCompra);
        carregaDados();
    }

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        setProdsCompra(arr);
    }

    function confirmaCompra() {
        Alert.alert('Atenção', 'Confirma realização da compra?',
          [
            {
              text: 'Sim',
              onPress: () => salvaDados(),
            },
            {
              text: 'Não',
              style: 'cancel',
            }
          ]);
    }

    function atualizaComboProds(idCateg){
        try {
            Produto.listaProdutosFiltro(idCateg).then((resposta) => {

                let produts = [];
                resposta.forEach(element => {
                    todosProdutos.push(element);
                    produts.push({label: element.descricao, value: element.id});
                });
                console.log(produts);
                setProdutos(produts);
            })
          } catch (e) {
              console.log(e.toString());
              Alert.alert(e.toString());
          }

        
    }

    function addCarrinho(){
        const prodCompra = todosProdutos.find(produto => produto.id == valueP);
        let prod = {
            id: valueP,
            idCat: valueC,
            descricao: prodCompra.descricao,
            precoUn: prodCompra.precoUn,
            idProd: valueP,
            idPed: "",
            qtd: qtd 
        }
        console.log(prod);
        prodsCompra.push(prod);
        limparCampos();
    }

    return(
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Home')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Faça um pedido</Text>
            </View>

            <View>
                <Text style={styles.lblDropdown2}>Selecione a categoria</Text>
                <DropDownPicker open={openC}
                    value={valueC}
                    items={categorias}
                    setOpen={setOpenC}
                    setValue={setValueC}
                    setItems={setCategorias} 
                    onChangeValue={(value)=>atualizaComboProds(value)} style={styles.campoDrop}>
                </DropDownPicker>
            </View>
            
            <View>
                <Text style={styles.lblDropdown}>Selecione o produto</Text>
                <DropDownPicker zIndex={1000} open={openP}
                    value={valueP}
                    items={produtos}
                    setOpen={setOpenP}
                    setValue={setValueP}
                    setItems={setProdutos} style={styles.campoDrop}>
                </DropDownPicker>
            </View>

            <View style={styles.areaDados}>

                <View style={styles.areaPreco}>
                <Text>Quantidade</Text>
                <TextInput style={styles.caixaTexto}
                    onChangeText={(texto) => setQtd(texto)}
                    value={qtd}/>
                </View>

            </View>

            <TouchableOpacity style={styles.botao} onPress={() => addCarrinho()}>
                <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>

            <ScrollView style={styles.listaProdutos}>
            {
                prodsCompra.map((produto, index) => (
                    <CardProdutoCompra produto={produto} key={index.toString()}
                    adicionar1={add1Prod} remover1={sub1Prod} />
                ))
            }
            </ScrollView>

            <View style={styles.areaPreco}>
                <Text>Preço total: {total}</Text>
            </View>
            

            <View style={styles.areaDescricao}>
            <Text>Cep para entrega</Text>
            <TextInput style={styles.caixaTexto}
                onChangeText={(texto) => setCep(texto)}
                value={cep} />
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => confirmaCompra()}>
                <Text style={styles.textoBotao}>Finalizar compra</Text>
            </TouchableOpacity>
            
          


        </View>
    )
}