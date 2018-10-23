import axios from 'axios';
import { API } from "./../config/config";
let headers = {
    headers: {'Content-Type': 'application/json'}
}
class AuthService {
    static login(data) {
        return axios.post(`${API}/login`,data, headers).then((response)=> {
        	return response;
        }).catch((error)=> {
        	throw (error.response);
        });
    }
    static signup(data) {
        return axios.post(`${API}/signup`,data, headers).then((response)=> {
            return response;
        }).catch((error)=> {
            throw (error.response);
        });
    }

    static testLogin(data){
        return axios.post(`${API}api/login`,data, headers).then((response)=> {
        	return response;
        }).catch((error)=> {
            return error.response;
        });
    }
}
export default AuthService;