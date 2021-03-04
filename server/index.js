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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", hero);
app.use("/api", user);

// 监听端口
app.listen(50001);
console.log("server is running 50001");
