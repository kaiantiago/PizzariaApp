import * as SQLite from 'expo-sqlite';
import getDbConnection from 'dbservice.js';

export async function createTable() {
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