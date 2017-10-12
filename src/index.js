import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers/Reducers'
import App from './App'

let store = createStore(Reducers)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
