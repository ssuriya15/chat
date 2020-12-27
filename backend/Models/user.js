const mongoose = require("mongoose");
let user = mongoose.Schema({
    img:{
        type:String
    },
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
   },
   location:{
       type:String
   }
});

module.exports.user = mongoose.model("user",user)
