const express = require("express");
const hero = require("../routers/hero");
const user = require("../routers/user");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// 这一句是连接上数据库
mongoose.connect("mongodb://localhost:27017/lolTest", {
  useNewUrlParser: true
});

// 这里的myDbs是数据库的名字，不是表的名字

const app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header('Access-Control-Allow-Credentials', true); // 告诉客户端可以在HTTP请求中带上Cookie
//   res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
//       "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", hero);
app.use("/api", user);

// 监听端口
app.listen(50001);
console.log("server is running 50001");
