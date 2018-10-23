let data = localStorage.getItem("ldasdewreogin");
const login = (data) ? {success:true,type:""} : {success:false,type:""};

export default (state = login, action) => {
	if(!action.type){
		action.type = "";
	}
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return  action.payload;
		case 'LOGOUT_SUCCESS':
			return action.payload;
		case 'LOGIN_ERROR':
			return action.payload;
		case 'LOGIN_RESET':
			return action.payload;
		default:
			return state;
	}
}