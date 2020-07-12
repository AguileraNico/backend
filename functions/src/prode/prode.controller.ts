import db = require('mssql');
import { dbConfig } from '../utils/db-config';
import { queries } from './prode.query';
import { formatResult, responseError, responseOk } from '../utils/response';

export class ProdeController {

    constructor() { }

    public saveUserMatch = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool)
                .input('TournamentCd', db.Int, body.TournamentCd)
                .input('MatchCd', db.Int, body.MatchCd)
                .input('UserCd', db.VarChar(50), body.UserCd)
                .input('LocalGoal', db.Int, body.LocalGoal)
                .input('VisitorGoal', db.Int, body.VisitorGoal);
                return await req.execute(queries.saveUserMatch)
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

    public userFixture = async function (body: any): Promise<any> {
        const pool = new db.ConnectionPool(dbConfig());
        return await pool.connect()
            .then(async function () {
                const req = new db.Request(pool)
                .input('Liga', db.Int, body.LigaCd)
                .input('Division', db.Int, body.DivisionCd)
                .input('User', db.VarChar, body.UserCd);
                return await req.execute(queries.userFixture)
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