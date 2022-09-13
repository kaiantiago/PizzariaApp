import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from '.Telas/Home/index';
import Admin from '.Telas/Admin/index';
import Carrinho from '.Telas/Admin/index';
import Cadastro_Produtos from '.Telas/Cadastro_Produtos/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
