const mongoose = require("mongoose");
let user = mongoose.Schema({
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

module.exports.user = mongoose.model("user",user)
let create = mongoose.Schema({
   name:{
       type:String,
       required:true
   }
});

module.exports.list = mongoose.model("list",create)