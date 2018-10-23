let data = localStorage.getItem("ldasdewreogin");
const signup = (data) ? {success:true,type:""} : {success:false,type:""};

export default (state = signup, action) => {
	if(!action.type){
		action.type = "";
	}
	switch (action.type) {
		case 'SIGNUP_SUCCESS':
			return  action.payload;
		case 'SIGNUP_ERROR':
			return action.payload;
		case 'SIGNUP_RESET':
			return action.payload;
		default:
			return state;
	}
}