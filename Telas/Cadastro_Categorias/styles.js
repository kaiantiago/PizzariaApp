import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    lblCadastro: {
        marginTop: 100    
    },
    campoCadastro: {
        alignSelf: 'center',
        marginTop: 10,
        height: 40,
        width: 280,
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8
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
    }
})

export default styles;