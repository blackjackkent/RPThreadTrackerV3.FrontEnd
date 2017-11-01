import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { getStore } from './infrastructure/getStore';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = getStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
