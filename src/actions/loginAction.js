import AuthService from '../api/auth'

export const login_success = () => dispatch => {
	dispatch({
		type: 'LOGIN_SUCCESS',
		payload: {success:true}
	})
}

export const logout = () => dispatch =>{
	localStorage.removeItem("ldasdewreogin");
	dispatch({
		type: 'LOGOUT_SUCCESS',
		payload: {success:false}
	})
}

export const loginReset = () => dispatch =>{
	dispatch({
		type: 'LOGIN_RESET',
		payload: {success:false}
	})
}

export const login = (values) => {
    return dispatch => {   
    	dispatch({
			type: 'LOGIN_ERROR',
			payload: {success:false,msg:null}
		})
    	if(values.email === "" || values.email === null || values.email === undefined){
    		dispatch({
				type: 'LOGIN_ERROR',
				payload: {success:false,msg:"Enter email"}
			})
            return;
        }
        if(values.password === "" || values.password === null || values.password === undefined){
        	dispatch({
				type: 'LOGIN_ERROR',
				payload: {success:false,msg:"Enter password"}
			})
            return;
        }
        AuthService.login(values).then(res => {
			console.log(res);
            if(res.status === 200){
                localStorage.setItem("ldasdewreogin",true);
                localStorage.setItem("token",res.data.token)
                dispatch({
					type: 'LOGIN_SUCCESS',
					payload: {success:true}
				})
            }
        }).catch(error => {
            if(error && error.data && error.data.message){
                dispatch({
					type: 'LOGIN_ERROR',
					payload: {success:false,msg:error.data.message}
				})
            }else{
               	dispatch({
					type: 'LOGIN_ERROR',
					payload: {success:false,msg:"Something went wrong.Please try later"}
				})
            }
        });
    }
}

export const signup = (values) => {
    return dispatch => {   
    	dispatch({
			type: 'SIGNUP_SUCCESS',
			payload: {success:false,msg:null}
		})
    	if(values.email === "" || values.email === null || values.email === undefined){
    		dispatch({
				type: 'SIGNUP_ERROR',
				payload: {success:false,msg:"Enter email"}
			})
            return;
        }
        if(values.password === "" || values.password === null || values.password === undefined){
        	dispatch({
				type: 'SIGNUP_ERROR',
				payload: {success:false,msg:"Enter password"}
			})
            return;
        }
        AuthService.signup(values).then(res => {
			console.log(res);
            if(res.status === 201){
                localStorage.setItem("ldasdewreogin",true);
                localStorage.setItem("token",res.data.token);
                dispatch({
					type: 'LOGIN_SUCCESS',
					payload: {success:true}
				})
                dispatch({
					type: 'SIGNUP_SUCCESS',
					payload: {success:true}
				})
            }
        }).catch(error => {
            if(error && error.data && error.data.message){
                dispatch({
					type: 'SIGNUP_ERROR',
					payload: {success:false,msg:error.data.message}
				})
            }else{
               	dispatch({
					type: 'SIGNUP_ERROR',
					payload: {success:false,msg:"Something went wrong.Please try later"}
				})
            }
        });
    }
}