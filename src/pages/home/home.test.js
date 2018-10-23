// Hoome.react.test.js
import React from 'react';
import Home from './home';
import { shallow, mount, render } from 'enzyme';

describe('Home', () => {

	it('renders <Home/> correctly', () => {
		const wrapper = mount(<Home/>);		
	});
})