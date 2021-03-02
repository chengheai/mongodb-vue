
// 引入express模块
const express = require('express');
// 定义路由级中间件
const router = express.Router();
// 引入数据模型模块
const Hero = require('../models/heroSchema');

// 查询所有英雄信息路由
router.get('/hero', (req, res) => {
  // console.log('========',req.query.pageSize)
  // console.log('+++++++++++++',Hero.count())
  let total = 0;

  Hero.count({}, function(err, count) {
    if (err) return;
    total = count;
    res.set('x-header', total)
  })

  Hero.find({})
    .limit(Math.min(parseInt(req.query.pageSize) || 10, 100))
    .skip(parseInt(req.query.currentPage - 1) * req.query.pageSize || 0)
    .sort({ updatedAt: -1 })
    .then(heros => {
      res.json(heros);
    })
    .catch(err => {
      res.json(err);
    })
});

// 通过ObjectId查询单个英雄信息路由
router.get('/hero/:id', (req, res) => {
  Hero.findById(req.params.id)
    .then(hero => {
      res.json(hero);
    })
    .catch(err => {
      res.json(err);
    });
});

// 添加一个英雄信息路由
router.post('/hero', (req, res) => {
  // 使用Hero model上的create方法储存数据
  Hero.create(req.body, (err, hero) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hero);
    }
  });
});

// 更新一条英雄信息数据路由
router.put('/hero/:id', (req, res) => {
  Hero.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nickname: req.body.nickname,
        sex: req.body.sex,
        address: req.body.address,
        dowhat: req.body.dowhat,
        favourite: req.body.favourite,
        explain: req.body.explain
      }
    },
    {
      new: true
    }
  )
    .then(hero => res.json(hero))
    .catch(err => res.json(err));
});

// 添加图片路由
router.put('/addpic/:id', (req, res) => {
  Hero.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        imgArr: req.body.url
      }
    },
    {
      new: true
    }
  )
    .then(hero => res.json(hero))
    .catch(err => res.json(err));
});

// 删除一条英雄信息路由
router.delete('/hero/:id', (req, res) => {
  Hero.findOneAndRemove({
    _id: req.params.id
  })
    .then(hero => res.send(`${hero.name}删除成功`))
    .catch(err => res.json(err));
});

module.exports = router;
