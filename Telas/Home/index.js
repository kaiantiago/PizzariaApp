import { react } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pizzaria App</Text>
            
        </View>
    )
}