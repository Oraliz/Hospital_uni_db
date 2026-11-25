const express = require('express');
const mysql2 = require('mysql2');
const routes= require('./routes')
const myconn = require('express-myconnection');
const { swaggerDocs } = require('./swaggerConfig');

const app = express();
app.set('port', process.env.PORT||3000)

const db = {
    host: "localhost",
    user: "admin",
    password: "cevOlla1",
    port: 3308,
    database: "db_hospital_uni"
}

app.use(myconn(mysql2,db,'single'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API practica")
})

app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en el puerto 3000")
    swaggerDocs(app, app.get('port'));
})