const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: '50.62.138.129',
    user: 'tms_desarrollo',
    password: 'Tms*2021.',
    database: 'DB_TMS_DESARROLLO'
}

//middlewres
app.use(myconn(mysql, dbOptions, 'single'));

//routes
app.get('/', (req, res)=>{
    res.send('welcome to my app');
});
app.use('/api', routes);
app.use(express.json());

//server runing
app.listen(app.get('port'), ()=>{
    console.log('server running on port ', app.get('port'));
});