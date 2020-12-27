const Model = require("../Models/user")
const LoginValidator = require("../Validator/loginValidator")

module.exports.userDetailsbyUserId= async function(obj){       
    let result = await Model.user.findOne({"_id":obj.userId}) 
    let jsonObj = {}
     return result
}

module.exports.userListByUserId= async function(obj){       
    let result = await Model.user.find( {"_id":obj.userId} ) 
    let jsonObj = {}
     return result
}