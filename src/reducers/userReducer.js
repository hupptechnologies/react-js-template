const defaultVal = { 
	details:{},
	listing:[],
	success:true,
	loading:false
}; 

export default (state = defaultVal, action) => {
	if(!action.type){
		action.type = "";
	}
	switch (action.type) {
		case 'USER_SUCCESS':
			return action.payload;
		case 'USER_ERROR':
			return action.payload;
		default:
			return state;
	}
}