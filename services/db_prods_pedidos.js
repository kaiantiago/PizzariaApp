import * as SQLite from 'expo-sqlite';
import getDbConnection from 'dbservice.js';

export async function createTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbProdsPedidos
        (
            idProd int not null,
            idPed int not null,
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