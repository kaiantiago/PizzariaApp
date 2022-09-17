import { react } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function Cadastro_Categorias({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Home')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Cadastro de categorias</Text>
            </View>
            <View>
                <Text style={styles.lblCadastro}>Qual categoria quer cadastrar?</Text>
                <TextInput style={styles.campoCadastro}>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
        </View>
    )
}