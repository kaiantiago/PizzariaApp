import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardProdutoCompra({produto, adicionar1, remover1}) {
   return (
       <View style={styles.contato} >
           <Text style={styles.listaNome}> {produto.descricao}</Text>
           <Text style={styles.listaTelefone} >{produto.qtd} </Text>
           <View style={styles.dadosBotoesAcao}>
               <TouchableOpacity onPress={() => adicionar1(produto.id)}>
                   <Entypo name="plus" size={32} color="red" />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => remover1(produto.id)}>
                   <Entypo name="minus" size={32} color="black" />
               </TouchableOpacity>
           </View>
       </View>
   );
};