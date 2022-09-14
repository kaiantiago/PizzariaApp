import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Telas/Home/index';
import Admin from './Telas/Admin/index';
import Compra_Carrinho from './Telas/Admin/index';
import Cadastro_Categorias from './Telas/Cadastro_Categorias/index'
import Cadastro_Produtos from './Telas/Cadastro_Produtos/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Admin,
    Compra_Carrinho,
    Cadastro_Categorias,
    Cadastro_Produtos
  })
);

export default function App() {
  return (
    <Routes/>
  );
}