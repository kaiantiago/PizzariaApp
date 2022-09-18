import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardCategoria({categoria, removerElemento, editar}) {
   return (
       <View style={styles.contato} >

           <Text style={styles.listaNome}> {categoria.descricao}</Text>

           <View style={styles.dadosBotoesAcao}>
               <TouchableOpacity onPress={() => removerElemento(categoria.idC)}>
                   <Ionicons name="md-remove-circle" size={32} color="red" />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => editar(categoria.idC)}>
                   <Entypo name="edit" size={32} color="black" />
               </TouchableOpacity>
           </View>
       </View>
   );

};