import * as SQLite from 'expo-sqlite';


export function getDbConnection() {
    const cx = SQLite.openDatabase('dbPizzaria.db');
    return cx;
}

export async function createTables() {
    //all methods in all
    return Promise.all();
};




export function obtemTodosChamados() {
    return lista ('select * from tbChamados')
}

export function obtemChamadosAtendidos() {
    return lista ('select * from tbChamados where situacao="A"')
}

export function obtemChamadosPendentes() {
    return lista ('select * from tbChamados where situacao="P"')
}

export function lista(queryQ) {
    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = queryQ;
            tx.executeSql(query, [],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            id: registros.rows.item(n).id,
                            nome: registros.rows.item(n).nome,
                            data: registros.rows.item(n).data,
                            descricao: registros.rows.item(n).descricao,
                            situacao: registros.rows.item(n).situacao
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}

export function adicionaChamado(chamado) {

    return new Promise((resolve, reject) => {
        let query = 'insert into tbChamados (id, nome , data, descricao, situacao) values (?,?,?,?,?)';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [chamado.id, chamado.nome, chamado.data, chamado.descricao, 'P'],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}


export function alteraChamado(chamado) {
    console.log('começando o método alteraChamado');
    return new Promise((resolve, reject) => {
        let query = 'update tbChamados set nome=?, descricao=? where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [chamado.nome, chamado.descricao, chamado.id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}

export function alteraChamadoAtendido(id) {
    console.log('começando o método alteraChamado');
    return new Promise((resolve, reject) => {
        let query = 'update tbChamados set situacao="A" where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}



export function excluiChamado(id) {
    console.log('Apagando chamado ' + id);
    return new Promise((resolve, reject) => {
        let query = 'delete from tbChamados where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}
