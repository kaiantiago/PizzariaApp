import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        flex: 1
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 85,
        marginLeft: 20
    },
    areaBtnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
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
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    lblDropdown2: {
        marginTop: 90  
    },
    lblDropdown: {
        marginTop: 10  
    },
    campoDrop: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20,
        height: 40,
        width: 280,
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '45%',
        height: 60,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01f601',
        marginTop: 20,
    },
    textButton: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    drop: {
        width: 280,
        height: 40
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
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
        marginTop:10
    },
    textoBotao: {
        color: '#FFF',
    },
})

export default styles;