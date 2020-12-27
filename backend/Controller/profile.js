const ProfileService = require("../Service/profileService")

module.exports.userDetailsbyId = async function(req,res){
        try{
            let obj = {
                userId:req.body.userId
            };
            let resObj = await ProfileService.userDetailsbyUserId(obj)
            res.status(200).json(resObj)              
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}

module.exports.userListByUserId = async function(req,res){
        try{
            let obj = {
                userId:req.body.userId
            };
            let resObj = await ProfileService.userListByUserId(obj)
            res.status(200).json(resObj)              
        }catch(e){
            res.status(400).json({ msg: e.message, success: false });
        }
}
