import * as SQLite from 'expo-sqlite';
import {getDbConnection, exclui, lista, createUniqueId} from 'dbservice.js';

export class Categoria {

    static async createTable() {
        return new Promise((resolve, reject) => {
            const query = `CREATE TABLE IF NOT EXISTS tbCategorias
            (
                idC text not null primary key,
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
                idC: registros.rows.item(n).idC,
                descricao: registros.rows.item(n).descricao
            }
            retorno.push(obj);
        }
        return retorno;
    }

    static listaCategorias(){
        return lista('select * from tbCategorias', geraObjSelect)
    }
    
    static adicionaCategoria(categoria){
        return adiciona('insert into tbCategorias (idC, descricao) values (?,?)', [createUniqueId(), categoria.descricao] );
    }

    static alteraCategoria(categoria){
        return adiciona('update tbCategorias set descricao=? where idC=?', [categoria.descricao, categoria.idC] );
    }

    static excluiCategoria(idCat){
        return exclui('delete from tbCategorias where idC=?', idCat);
        //exclui('delete from tbProdutos where idCat=?', idCat);
    }

    /*static validaDependencia(){
        return lista('select * from tbCategorias', geraObjSelect).length!=0;
    }*/

}

