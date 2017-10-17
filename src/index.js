import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './state/reducers';
import newsSagas from './state/news/sagas';
import App from './App';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(newsSagas)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
