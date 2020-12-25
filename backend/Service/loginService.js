const LoginDao = require("../Models/user")
const LoginValidator = require("../Validator/loginValidator")

module.exports.login= async function(obj){       
    let result = await LoginDao.user.findOne({"userName":obj.userName}) 
    let jsonObj = {}
    let failure = LoginValidator.login(obj)
    if(failure.failure){   
        jsonObj = failure
    }else{     
        if(result.password === obj.password){
            jsonObj = {
                    success:"login successfully",
                    userId:result._id
                    }
        }else{
            jsonObj =  LoginValidator.loginPasswordMismatch()
        }
    }
     return jsonObj
}
module.exports.signUp= async function(obj){  
    
    let jsonObj = {}
    let failure = LoginValidator.signUp(obj)
    let userNameList = await LoginDao.user.find({"userName":obj.userName}) 
    if(failure.failure){   
        jsonObj = failure
    }
     if(userNameList.length !== 0){   
        jsonObj ={failure:{...jsonObj.failure,...LoginValidator.userNameExist().failure}} 
    }
    if(!failure.failure && userNameList.length === 0){     
        let signUpModel = new LoginDao.user(obj) 
        let result = await signUpModel.save()
        jsonObj = {
            success:"Signup successfully",
            details:result
        }
    }
     return jsonObj
}