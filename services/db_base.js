
import { Categoria }from './db_categorias';
import { ProdPedido } from './db_prods_pedidos';
import { Pedido } from './db_pedidos';
import { Produto } from './db_produtos';



export async function createTables() {
    //all methods in all
    return Promise.all([
        Categoria.createTable(), 
        ProdPedido.createTable(), 
        Pedido.createTable(), 
        Produto.createTable()]);
}