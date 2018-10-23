import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
	      <Route path="/" component={App}/>
	    </Router>
	</Provider>
	 ,
	document.getElementById('root')
);