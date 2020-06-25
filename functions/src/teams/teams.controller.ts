import db = require('mssql');
import { dbConfig } from '../utils/db-config';
import { queries } from './teams.query';
import { formatResult, responseError } from '../utils/response';

export class TeamsController {

    constructor() { }

    public posiciones = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool);
                return await req.execute(queries.position)
                    .then(function (resultSet) {
                        pool.close();
                        return JSON.parse(formatResult(resultSet))
                    })
                    .catch(function (err) {
                        pool.close();
                        return responseError(err);
                    });
            })
            .catch(function (err) {
                pool.close();
                return responseError(err);
            });
    }
}