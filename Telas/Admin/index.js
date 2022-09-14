import { react } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

//Lista de Pedidos

export default function Admin({ navigation }) {
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
        </View>
    )
}