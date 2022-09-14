import { react } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pizzaria App</Text>
            <View style={styles.areaMenu}>
                <View style={styles.areaLogo}>
                    <Image style={styles.areaLogo} source={require('../../Img/imagem_pizza.png')}></Image>
                </View>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Compra_Carrinho')
                }>
                    <Text style={styles.textButton}>Fazer um pedido</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Cadastro_Produtos')
                }>
                    <Text style={styles.textButton}>Cadastro de Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Cadastro_Categorias')
                }>
                    <Text style={styles.textButton}>Cadastro de Categorias</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Cadastro_Pedidos')
                }>
                    <Text style={styles.textButton}>Lista de Pedidos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}