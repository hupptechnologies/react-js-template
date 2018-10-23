import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import configureStore from './store';
import { createBrowserHistory } from 'history'


it('renders <App/> crashing', () => {
	const div = document.createElement('div');

	ReactDOM.render(
  		<Provider store={configureStore()}>
  			<Router history={createBrowserHistory()}>
				<App />
			</Router>
		</Provider>,
  	 div);
	ReactDOM.unmountComponentAtNode(div);
});
