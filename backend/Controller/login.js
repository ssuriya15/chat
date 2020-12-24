const LoginDao = require("../Models/login")

module.exports.signUp= function(req,res){
    
    try{
        let obj = {
            name:req.body.name,
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password,
        };
        let signUpModel = new LoginDao.login(obj) 
        signUpModel.save()
        .then((data)=>{            
            res.status(200).json({
                success:"Signup successfully",
                details:data
            }) 
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
module.exports.login= function(req,res){
    
    try{
        let obj = {
            userName:req.body.userName,
            password:req.body.password, 
        };
        LoginDao.login.findOne({"userName":obj.userName})
        .then((data)=>{  
            if(data.password === obj.password){
                res.status(200).json({
                    success:"login successfully",
                    userId:data._id
                }) 
            }else{
                res.status(200).json({
                    failure:"password mismatch",
                    userId:data._id
                }) 
            }     
            
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
module.exports.listName= function(req,res){
    
    try{
        let List = {
        name:req.body.name
        };
        let loginModel = new LoginDao.list(List) 
        loginModel.save()
        .then((data)=>{            
            res.status(200).json({
                success:"added successfully",
                details:data
            }) 
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
module.exports.deleteName= function(req,res){
    
    try{
        LoginDao.list.findOneAndDelete({"_id":req.body.id})
        .then((data)=>{            
            res.status(200).json({
                success:"deleted successfully",
                details:data
            }) 
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
module.exports.editName= function(req,res){
    
    try{
        LoginDao.list.findOneAndUpdate({"_id":req.body.id},{name:req.body.name})
        .then((data)=>{            
            res.status(200).json({
                success:"edited successfully",
                details:data
            }) 
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
module.exports.listUsr= function(req,res){
    
    try{
        LoginDao.list.find()
        .then((data)=>{            
            res.status(200).json({
                success:"Listed successfully",
                details:data
            }) 
        })
                    
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}