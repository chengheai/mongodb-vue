const express = require('express');
const hero = require('./routers/hero')
const mongoose = require("mongoose");

const bodyParser = require("body-parser")




//这一句是连接上数据库
 var db = mongoose.connect('mongodb://localhost:27017/lolTest',{ useNewUrlParser: true });

//这里的myDbs是数据库的名字，不是表的名字



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero)
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


