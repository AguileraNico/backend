import db = require('mssql');
import { dbConfig } from '../utils/db-config';
import { queries } from './liga.query';
import { formatResult, responseError, responseOk } from '../utils/response';

export class LigaController {

    constructor() { }

    public positions = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool)
                .input('DivisionCd', db.Int, body.DivisionCd);
                return await req.execute(queries.positions)
                    .then(function (resultSet) {
                        pool.close();
                        return responseOk(JSON.parse(formatResult(resultSet)))
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
                const req = new db.Request(pool)
                .input('Division', db.Int, body.DivisionCd)
                .input('Liga', db.Int, body.LigaCd)
                .input('Round', db.Int, body.RoundCd);
                return await req.execute(queries.fixture)
                    .then(function (resultSet) {
                        pool.close();
                        return responseOk(JSON.parse(formatResult(resultSet)))
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

    public lastRoundFixture = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool)
                .input('Liga', db.Int, body.LigaCd)
                .input('Division', db.Int, body.DivisionCd);
                return await req.execute(queries.lastRoundFixture)
                    .then(function (resultSet) {
                        pool.close();
                        return responseOk(JSON.parse(formatResult(resultSet)))
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

    public lastRound = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool)
                .input('Liga', db.Int, body.LigaCd)
                .input('Division', db.Int, body.DivisionCd);
                return await req.execute(queries.lastRound)
                    .then(function (resultSet) {
                        pool.close();
                        return responseOk(JSON.parse(formatResult(resultSet)))
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
                        return responseOk(JSON.parse(formatResult(resultSet)))
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
                        return responseOk(JSON.parse(formatResult(resultSet)))
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