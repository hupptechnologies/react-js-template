import axios from 'axios';
import { API } from "./../config/config";
let headers = {
    headers: {'Content-Type': 'application/json'}
}

class UserService {
	static fetchData(id) {
        return axios.get(`${API}/unknown/${id}`, headers).then((response)=> {
        	return response;
        }).catch((error)=> {
        	throw (error.response);
        });
    }
    static fetchListing(){
    	return axios.get(`${API}/unknown`, headers).then((response)=> {
        	return response;
        }).catch((error)=> {
        	throw (error.response);
        });
    }
}


export default UserService;