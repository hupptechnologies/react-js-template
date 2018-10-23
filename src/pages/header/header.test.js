// Header.test.js
import React from 'react';
import Header from './header';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from "./../../store";

const initialState = {"success":true}; 
const logoutState = {"success":true}; 
let wrapper;
let store;
beforeEach(() => {
	store = configureStore();
	store.dispatch({
		type:"LOGIN_SUCCESS",
		payload: {success:true}
	})
});

describe('Header', () => {
	it('renders <Header/> correctly', () => {
		const wrapper = mount(<Provider store={store}><Header/></Provider>);		
	});
	it('Logout button', () => {		
		const wrapper = mount(<Provider store={store}><Header/></Provider>);
		let logout = store.getState().loginReducer;
		expect(logout.success).toBe(initialState.success);
		// Click event
		const btn = wrapper.find('button.btn');		
		expect(btn.length).toBe(1);
		btn.simulate('click');
		expect(store.getState().loginReducer.success).toBe(false)
	});
	

})