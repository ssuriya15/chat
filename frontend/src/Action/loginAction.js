import LoginApi from "../Api/loginApi"

export function login(){
     return function(dispatch){
        dispatch({type:"LOGIN"})
    } 
}

export function signUp(data){
    return function(dispatch){
        LoginApi.signUp(data)
        .then((res)=>{
            console.log(res)
            dispatch({type:"SIGN_UP_SUCCESS",payload:res})
        })
    } 
}