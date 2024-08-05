import { createPool } from "mysql2";
import { config } from "dotenv";
config();

//import 'dotenv/config' //use this for a shortcut to replace the above 2 lines

let connection = createPool ({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pwdDb,
    database: process.env.dbName,
    mulitipleStatements: true,
    conectionLimit: 30
})

connection.on('connection', (err) => {
    if(err) throw new Error('Couldn\'t connect to the database, please try again later')
})

export {
    connection
}