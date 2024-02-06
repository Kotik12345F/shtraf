import express, { json } from 'express'
import postgres from 'postgres'
import cors from 'cors'
import getitems from './constructs/getitem.js'
import register from './constructs/reg.js'
import testget from './constructs/testget.js'
import login from './constructs/log.js'
import sql from './db.js'
import createReport from './constructs/createreport.js'

const PORT = 1337
const app = express()

const allowedOrigins = ['http://localhost:3000','http://localhost:5173'];

const options = cors.CorsOptions = {
    origin:allowedOrigins
}


app.use(cors(options))
app.use(json())
app.get('/test',testget)
app.post('/reg', register)
app.post('/login', login)
app.post('/report', createReport)

const start = async () => {
    try{

        //создать таблицы

        // await sql`create table if not exists Roles(
        //     role varchar(100) unique primary key
        // )`
        // await sql`create table if not exists Users(
        //     id SERIAL PRIMARY KEY NOT NULL,
        //     name varchar(200) NOT NULL,
        //     role varchar(100),
        //     password varchar(100),
        //     reports serial,
        //     FOREIGN KEY (role) REFERENCES Roles(role)
        // )`

        //     await sql`insert into Roles(role) values('USER')` 
        //     await sql`insert into Roles(role) values('ADMIN')`



        app.listen(PORT, () => console.log(`zapustilsa na ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}
start()



