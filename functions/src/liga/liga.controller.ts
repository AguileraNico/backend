import db = require('mssql');
import { dbConfig } from '../utils/db-config';
import { queries } from './liga.query';
import { formatResult, responseError } from '../utils/response';

export class LigaController {

    constructor() { }

    public positions = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool);
                return await req.execute(queries.positions)
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

    public fixture = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool);
                return await req.execute(queries.fixture)
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

    public promedios = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool);
                return await req.execute(queries.promedios)
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

    public teams = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool);
                return await req.execute(queries.positions)
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