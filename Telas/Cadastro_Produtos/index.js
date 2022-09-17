import { react } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';

export default function Cadastro_Produtos({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ])
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
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems} style={styles.campoDrop}>
                </DropDownPicker>
            </View>
        </View>
    )
}