import express from 'express';
import { config } from 'dotenv';
import { executeSQL, getConnection } from './db';

config();
getConnection();

const app = express();

app.get("/db-test", async (req, res) => {
    const data = await executeSQL("select name from test");
    res.json(data);
})

app.listen(parseInt(process.env.SERVER_PORT), () => {
    console.log("서버 켜짐");
})