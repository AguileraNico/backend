//import * as functions from "firebase-functions";

export function dbConfig() {
    return {
        server: process.env.server ? process.env.server : '127.0.0.1',
        user: process.env.user ? process.env.user : 'cloud',
        password: process.env.password ? process.env.password : '$Conejo1663',
        database: process.env.database ? process.env.database : 'apostando'
    }
}
