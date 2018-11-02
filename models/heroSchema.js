const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
  name :String,
  nickname : String,
  sex : String,
  address : String,
  dowhat : String,
  imgArr:[],
  favourite:String,
  explain:String,
  createdAt : { type : Date, default : Date.now },
}, { collection: 'myhero', timestamps: true})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据


const Hero = module.exports = mongoose.model('hero',heroSchema);
