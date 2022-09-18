import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    contato: {
        backgroundColor: '#aada36',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    listaNome: {
        width: '90%',
        fontSize: 26,
        paddingRight: 10,
        paddingLeft: 10
    },

    dadosListaTelefone: {
        width: '40%',
        flexDirection: 'row',
    },
    dadosBotoesAcao: {
        width: '10%',
    },
    iconTelefone: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    listaTelefone: {
        color: "#FFF",
        fontSize: 18,
    },


});


export default styles;