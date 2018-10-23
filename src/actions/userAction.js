import UserService from '../api/user'
export const FETCH_USER = ({details}) => dispatch =>{
	dispatch({
		type: 'USER_SUCCESS',
		payload: {success:true,details:details,loading:false}
	})
}

export const FETCH_LISTING = ({listing}) => dispatch =>{
	dispatch({
		type: 'USER_SUCCESS',
		payload: {success:true,listing:listing,loading:false}
	})
}

export const fetchUserDetails = () => {
	return dispatch => {
		const id = 2;
		UserService.fetchData(id).then(res => {
			if(res.status === 200){
				let details = res.data.data;
				dispatch({
					type: 'USER_SUCCESS',
					payload: {success:true,details:details,listing:[],loading:false}
				})
			}else{
				dispatch({
					type: 'USER_ERROR',
					payload: {success:true,details:{},listing:[],loading:false}
				})
			}
		}).catch(e=>{
			dispatch({
				type: 'USER_ERROR',
				payload: {success:true,details:{},listing:[],loading:false}
			})
		})
	}
}

export const fetchUserListing = () => {
	return dispatch => {
		UserService.fetchListing().then(res => {
			if(res.status === 200){
				let listing = res.data.data;
				dispatch({
					type: 'USER_SUCCESS',
					payload: {success:true,listing:listing,details:{},loading:false}
				})
			}else{
				dispatch({
					type: 'USER_ERROR',
					payload: {success:true,listing:[],details:{},loading:false}
				})
			}
		}).catch(e=>{
			dispatch({
				type: 'USER_ERROR',
				payload: {success:true,details:{},listing:[],loading:false}
			})
		})
	}
}