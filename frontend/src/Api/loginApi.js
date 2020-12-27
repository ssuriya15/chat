import axios from "./api"
import qs from "qs";

class LoginApi{
    static signUp(data){
        return axios.post("/signUp",data)
    }
    static login(data){
        return axios.post("/login",data)
    }
}

export default LoginApi;