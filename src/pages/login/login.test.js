// Login.react.test.js
import React from 'react';
import Login from './login';
import LoginForm from "./loginForm";
import { shallow, mount, render } from 'enzyme';
import loginReducer  from "./../../reducers/loginReducer";
import { Provider } from 'react-redux'
import configureStore from "./../../store";
import { login } from "./../../actions/loginAction";
import AuthService from "./../../api/auth";

const initialState = {success:false}; 

let wrapper;
let store;
beforeEach(() => {
	store = configureStore();
	store.dispatch({
		type: 'LOGIN_RESET',
		payload: {success:false}
	});
});

describe('Login', () => {

	it('renders <Login/> correctly', () => {
		wrapper = mount(<Provider store={store}><Login><LoginForm login={store.getState().loginReducer}/></Login></Provider>);		
	});
	it('Login button click event', () => {
		const fakeEvent = { preventDefault: () =>{
			store.dispatch({
				type: 'LOGIN_SUCCESS',
				payload: {success:true}
			});
			expect(store.getState().loginReducer.success).toBe(true)
		}};
        const loginComponent = mount(<Provider store={store}><Login><LoginForm login={store.getState().loginReducer}/></Login></Provider>);
        expect(loginComponent.find('.login_form_submit').length).toBe(1);
        expect(store.getState().loginReducer.success).toBe(initialState.success);
        loginComponent.find('.login_form_submit').simulate('submit',fakeEvent);  

	});
	it("Login api with in-valid credential",async()=>{
		let log = await AuthService.testLogin({username:"johsdoe",password:"test"});
		expect(log.data.status).toBe("error");
	})
	it("Login api with valid credential",async()=>{
		let log = await AuthService.testLogin({username:"johndoe",password:"test"});
		expect(log.data.status).toBe("success");
	})

	

})