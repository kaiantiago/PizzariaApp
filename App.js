import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Telas/Home/index';
import Admin from './Telas/Admin/index';
import Cadastro_Categorias from './Telas/Cadastro_Categorias/index'
import Cadastro_Produtos from './Telas/Cadastro_Produtos/index';
import Comprar from './Telas/Comprar/index'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Admin,
    Cadastro_Categorias,
    Cadastro_Produtos,
    Comprar
  })
);

export default function App() {
  return (
    <Routes/>
  );
}