import { react } from 'react';
import styles from './styles';
import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';
import { useState, useEffect } from 'react';

import { createTables } from '../../services/db_base';

import { Produto } from '../../services/db_produtos';
import { Categoria } from '../../services/db_categorias';
import CardProduto from '../../componentes/card_produto';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Cadastro_Produtos({ navigation }) {

    const [id, setId] = useState();
    const [descricao, setDescricao] = useState();
    const [precoUn, setPrecoUn] = useState();
    const [idCat, setIdCat] = useState();
    const [produtos, setProdutos] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [categorias, setCategorias] = useState([])

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
            Produto.listaProdutos().then((resposta) => {

                let produts = resposta;
                setProdutos(produts);
            })
            Categoria.listaCategorias().then((resposta) => {
                let categs = [];
                console.log(resposta);
                resposta.forEach(element => {
                    categs.push({ label: element.descricao, value: element.idC })
                });
                console.log(categs);
                setCategorias(categs);
            })
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    async function salvaDados() {
        let novoRegistro = id == undefined;

        let obj = {
            id: id,
            descricao: descricao,
            precoUn: precoUn,
            idCat: value
        };

        try {

            if (novoRegistro) {
                let resposta = (await Produto.adicionaProduto(obj));

                if (resposta)
                    Alert.alert('adicionado com sucesso!');
                else
                    Alert.alert('Falhou, sorry!');
            }
            else {
                let resposta = await Produto.alteraProduto(obj);
                if (resposta)
                    Alert.alert('Alterado com sucesso!');
                else
                    Alert.alert('Falhou, sorry!');
            }

            limparCampos();
            await carregaDados();
        } catch (e) {
            Alert.alert(e.message);
        }
    }


    async function limparCampos() {
        setDescricao("");
        setIdCat("");
        setPrecoUn("");
        setId(undefined);
        setValue(null);
        setOpen(false);
        Keyboard.dismiss();
    }

    function editar(identificador) {
        const produto = produtos.find(produto => produto.id == identificador);

        if (produto != undefined) {
            setId(produto.id);
            setDescricao(produto.descricao);
            setPrecoUn(produto.precoUn);
            setIdCat(produto.idCat);
            setValue(produto.idCat);
        }

        console.log(produto);
    }

    function removerElemento(identificador) {
        Alert.alert('Atenção', 'Confirma a remoção do produto?',
            [
                {
                    text: 'Sim',
                    onPress: () => efetivaRemoverElemento(identificador),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }


    async function efetivaRemoverElemento(identificador) {
        try {
            await Produto.excluiProduto(identificador);
            Keyboard.dismiss();
            limparCampos();
            await carregaDados();
            Alert.alert('Produto apagado com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
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
                <Text style={styles.titulo}>Cadastro de Produtos</Text>
            </View>

            <View>
                <Text style={styles.lblDropdown}>Selecione a categoria</Text>
                <DropDownPicker open={open}
                    value={value}
                    items={categorias}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setCategorias} style={styles.campoDrop}>
                </DropDownPicker>
            </View>

            <View style={styles.areaDados}>

                <View style={styles.areaDescricao}>
                    <Text>Descrição do produto</Text>
                    <TextInput style={styles.caixaTexto}
                        onChangeText={(texto) => setDescricao(texto)}
                        value={descricao} />
                </View>

                <View style={styles.areaPreco}>
                    <Text>Preço unitário</Text>
                    <TextInput style={styles.caixaTexto}
                        onChangeText={(texto) => setPrecoUn(texto)}
                        value={precoUn}
                        keyboardType='num-pad' />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => salvaDados()}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

            <ScrollView style={styles.listaProdutos}>
                {
                    produtos.map((produto, index) => (
                        <CardProduto produto={produto} key={index.toString()}
                            removerElemento={removerElemento} editar={editar} />
                    ))
                }
            </ScrollView>
        </View>
    )
}