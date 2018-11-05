const express = require('express');
const hero = require('./routers/hero')
const mongoose = require("mongoose");
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser")




//这一句是连接上数据库
 var db = mongoose.connect('mongodb://localhost:27017/lolTest',{ useNewUrlParser: true });

//这里的myDbs是数据库的名字，不是表的名字



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero)
app.use(express.static(path.resolve(__dirname, './dist')))
// 首页静态页面
app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
// 监听80端口
app.listen(3000);
console.log('server is running 3000');


