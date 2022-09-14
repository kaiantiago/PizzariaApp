import * as SQLite from 'expo-sqlite';
import getDbConnection from 'dbservice.js';


export class Pedido {

    static async createTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbPedidos
        (
            id int not null primary key,
            total int not null,
            cep text not null
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
                total: registros.rows.item(n).total,
                cep: registros.rows.item(n).cep
            }
            retorno.push(obj);
        }
        return retorno;
    }

    static listaPedidos(){
        lista('select * from tbPedidos', geraObjSelect)
    }

}
