const mongoose = require('mongoose')

const Users = mongoose.Schema({
  userName :String,
  password : String,
  createdAt : { type : Date, default : Date.now },
}, { collection: 'user', timestamps: true})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据


const User = module.exports = mongoose.model('user',Users);
