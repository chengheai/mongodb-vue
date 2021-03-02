const express = require("express");
const hero = require("../routers/hero");
const user = require("../routers/user");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

// 这一句是连接上数据库
mongoose.connect("mongodb://localhost:27017/lolTest", {
  useNewUrlParser: true
});

// 这里的myDbs是数据库的名字，不是表的名字

const app = express();

app.use(cors({
  origin: ['http://localhost:8080'] // 指定接受的地址
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", hero);
app.use("/api", user);

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// 监听端口
app.listen(50001);
console.log("server is running 50001");
