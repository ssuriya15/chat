import { signUp } from "../Action/loginAction"
import axios from "./api"
import qs from "qs";

class LoginApi{
    static signUp(data){
        let obj = qs.stringify(data)
        return axios.post("/signUp",obj)
    }
}

export default LoginApi;