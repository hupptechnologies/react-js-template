import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from "./signupReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
	loginReducer,
	signupReducer,
	userReducer,
	form:formReducer
});