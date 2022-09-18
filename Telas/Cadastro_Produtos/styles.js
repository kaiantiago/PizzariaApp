import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 85,
        marginLeft: 20

    },
    areaBtnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnVoltar: {
        width: '12%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01f601',
        marginRight: 10,
        marginLeft: 10
    },
    textBtnVoltar: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    areaDescricao: {
        width: '55%',
    },
    areaPreco: {
        width: '30%',
    },
    listaProdutos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    caixaTexto: {
        borderColor: "#000",
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botao: {
        width: '30%',
        height: 50,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01f601',
    },
    textoBotao: {
        color: '#FFF',
    },
})

export default styles;