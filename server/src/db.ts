import {createPool, Connection } from 'mysql2/promise';
import {config} from 'dotenv';

config();

let connection: Connection;

getConnection();

export async function getConnection() {
    if(!connection) {
        connection = await createPool({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_NAME,
            connectionLimit: parseInt(process.env.DB_LIMIT)
        })
    }

    return connection;
}

export async function executeSQL(sql: string) {
    try {
        const data = await (await getConnection()).execute(sql);
        return data[0];
    } catch(e) {
        console.log(e);
        return undefined;
    }
}