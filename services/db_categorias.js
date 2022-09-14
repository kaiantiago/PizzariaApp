import * as SQLite from 'expo-sqlite';
import getDbConnection from 'dbservice.js';

export class Categoria {

    static async createTable() {
        return new Promise((resolve, reject) => {
            const query = `CREATE TABLE IF NOT EXISTS tbCategorias
            (
                id int not null primary key,
                descricao text not null    
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
                descricao: registros.rows.item(n).descricao
            }
            retorno.push(obj);
        }
        return retorno;
    }

    static listaCategorias(){
        lista('select * from tbCategorias', geraObjSelect)
    }

}

