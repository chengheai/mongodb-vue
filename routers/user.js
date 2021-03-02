
// 引入express模块
const express = require('express');
// 定义路由级中间件
const router = express.Router();
// 引入数据模型模块
const User = require('../models/User');

router.post('/user/register', (req, res) => {
  // 这里的req.body 其实使用了body-parser中间件 用来对前端发送来的数据进行解析
  // 查询数据库中name= req.body.name 的数据
  User.find({ userName: req.body.userName }, (err, data) => {
    if (err) {
      res.send({ status: 1002, message: '查询失败', data: err });
    } else {
      console.log('查询成功' + data);
      // data为返回的数据库中的有相同name的集合
      if (data.length > 0) {
        res.send({ status: 1001, message: '该用户名已经注册！' });
      } else {
        const newName = new User({
          userName: req.body.userName,
          password: req.body.password
        });

        // newName.save 往数据库中插入数据
        newName.save((err, data) => {
          if (err) {
            res.send({ status: 1002, message: '注册失败！', data: err });
          } else {
            res.send({ status: 1000, message: '注册成功!' });
          }
        });
      }
    }
  });
});
// 登录接口
router.post('/user/login', (req, res) => {
  User.find({ userName: req.body.userName }, (err, data) => {
    if (err) {
      // res.send(err);
      res.send({ status: 1002, message: '查询数据库失败!', data: err });
    } else {
      console.log('data: ', data);
      if (data.length > 0) {
        if (data[0].password === req.body.password) {
          res.send({ status: 1000, message: '登录成功!', data: data })
        } else {
          res.send({ status: 1001, message: '密码错误!', data: err });
        }
      } else {
        res.send({ status: 1001, message: '登录失败，该用户没有注册!', data: err });
      }
    }
  });
});

module.exports = router;
