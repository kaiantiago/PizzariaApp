import * as SQLite from 'expo-sqlite';
import {getDbConnection, exclui, lista} from 'dbservice.js';


export class Produto {

    static async createTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbProdutos
        (
            id int not null primary key,
            descricao text not null,
            preco text not null,
            idCat int not null     
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
                id: registros.rows.item(n).id,
                descricao: registros.rows.item(n).descricao,
                precoUn: registros.rows.item(n).precoUn,
                idCat: registros.rows.item(n).idCat
            }
            retorno.push(obj);
        }
        return retorno;
    }

    static listaProdutos(){
        return lista('select * from tbProdutos', geraObjSelect)
    }

    static listaProdutosFiltro(idCat){
        return lista('select * from tbProdutos where idCat = ' + idCat, geraObjSelect)
    }

    static adicionaProduto(pedido){
        return adiciona('insert into tbProdutos (id, descricao, precoUn, idCat) values (?,?,?)', [pedido.id, pedido.descricao, pedido.precoUn, pedido.idCat] );
    }

    static alteraProduto(pedido){
        return adiciona('update tbProdutos set descricao=?, precoUn=?, idCat=? where id=?', [pedido.descricao, pedido.precoUn, pedido.idCat, pedido.id] );
    }

    static excluiProduto(idProd){
        return exclui('delete from tbProdutos where id=?', idProd);
    }

    //valida dep todo

}
