import * as SQLite from 'expo-sqlite';
import {getDbConnection, exclui, lista, createUniqueId, adiciona} from './dbservice';

export function geraObjSelectPedido(registros){
    var retorno = [];

    for (let n = 0; n < registros.rows.length; n++) {
        let obj = {
            id: registros.rows.item(n).id,
            descricao: registros.rows.item(n).descricao,
            preco: registros.rows.item(n).preco,
            idCat: registros.rows.item(n).idCat,
            idProd: registros.rows.item(n).idProd,
            idPed: registros.rows.item(n).idPed,
            qtd: registros.rows.item(n).qtd
        }
        retorno.push(obj);
    }
    return retorno;
}

export class ProdPedido {

    static async createTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbProdsPedidos
        (
            idProd text not null,
            idPed text not null,
            qtd int not null        
        )`;

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            tx.executeSql(
                query, [],
                (tx, resultado) => resolve(true)
            )
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
    };
    static geraObjSelect(registros){
        var retorno = [];

        for (let n = 0; n < registros.rows.length; n++) {
            let obj = {
                idProd: registros.rows.item(n).idProd,
                idPed: registros.rows.item(n).idPed,
                qtd: registros.rows.item(n).qtd
            }
            retorno.push(obj);
        }
        return retorno;
    }

    


    static listaProdutosDoPedido(idPed){
        return lista('select * from tbProdutos as p inner join tbProdsPedidos as pp on p.id = pp.idProd where pp.idPed = "' + idPed+'"', geraObjSelectPedido)
    }

    static adicionaProdutoDoPedido(pedido){
        return adiciona('insert into tbProdsPedidos (idProd, idPed, qtd) values (?,?,?)', [pedido.idProd, pedido.idPed, pedido.qtd] );
    }
}