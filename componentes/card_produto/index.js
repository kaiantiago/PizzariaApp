import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardProduto({produto, removerElemento, editar}) {
   return (
       <View style={styles.contato} >

           <Text style={styles.listaNome}> {produto.descricao}</Text>
           
           <Text style={styles.listaTelefone} >{produto.preco} </Text>
           <View style={styles.dadosBotoesAcao}>
               <TouchableOpacity onPress={() => removerElemento(produto.id)}>
                   <Ionicons name="md-remove-circle" size={32} color="red" />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => editar(produto.id)}>
                   <Entypo name="edit" size={32} color="black" />
               </TouchableOpacity>

           </View>
       </View>
   );

};