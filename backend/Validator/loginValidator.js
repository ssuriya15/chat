
module.exports ={
    login:  function(obj){ 
        let failure = "";
        
        if(!obj.password){
            failure={...failure,
                    invalidPassword:"Password can't be empty"
                }
         }
         if(!obj.userName){
            failure={...failure,
                 invalidUserName:"User name can't be empty"
                 }
         }
         return {failure:failure}
    },
    signUp:  function(obj){ 
        let failure = "";
        
        if(!obj.password){
            failure={...failure,
                    invalidPassword:"Password can't be empty"
                }
         }
        if(!obj.name){
            failure={...failure,
                    invalidName:"Name can't be empty"
                }
         }
        if(!obj.email){
            failure={...failure,
                    invalidEmail:"Email can't be empty"
                }
         }
         if(!obj.userName){
            failure={...failure,
                 invalidUserName:"User name can't be empty"
                 }
         }
         return {failure:failure}
    },
    loginPasswordMismatch: function(){
        let failure = {
            invalidPassword:"Incorrect password"
        };
         return {failure:failure}
    },
    userNameExist: function(){
        let failure = {
            invalidUserName:"User name already exist"
        };
         return {failure:failure}
    }
}