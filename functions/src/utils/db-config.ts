export function dbConfig() {
    return {
        server: process.env.server ? process.env.server : 'localhost',
        user: process.env.user ? process.env.user : 'NodeUser',
        password: process.env.password ? process.env.password : 'Node123',
        database: process.env.database ? process.env.database : 'apostando'
    }
}
