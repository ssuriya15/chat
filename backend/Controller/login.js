const LoginService = require("../Service/loginService")

module.exports.login= async function(req,res){
        try{
            let obj = {
                userName:req.body.userName,
                password:req.body.password, 
            };
            let resObj = await LoginService.login(obj)
            res.status(200).json(resObj)              
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}


module.exports.signUp=async function(req,res){
    
        try{
            let obj = {
                name:req.body.name,
                userName:req.body.userName,
                email:req.body.email,
                password:req.body.password,
            };
            let resObj = await LoginService.signUp(obj)
                res.status(200).json(resObj)  
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
} 
/* 
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
} */