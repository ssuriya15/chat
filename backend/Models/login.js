const mongoose = require("mongoose");
let loginSchema = mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   userName:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   }
});

module.exports.login = mongoose.model("login",loginSchema)
let create = mongoose.Schema({
   name:{
       type:String,
       required:true
   }
});

module.exports.list = mongoose.model("list",create)