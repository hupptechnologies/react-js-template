import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from "./signupReducer";
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
	loginReducer,
	signupReducer,
	form:formReducer
});