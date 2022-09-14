import * as SQLite from 'expo-sqlite';
import {getDbConnection, lista} from 'dbservice.js';


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
                preco: registros.rows.item(n).preco,
                idCat: registros.rows.item(n).idCat
            }
            retorno.push(obj);
        }
        return retorno;
    }

    static listaProdutos(){
        lista('select * from tbProdutos', geraObjSelect)
    }

    static listaProdutosFiltro(idCat){
        lista('select * from tbProdutos where idCat = ' + idCat, geraObjSelect)
    }

}
