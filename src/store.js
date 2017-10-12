import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import characters from './characters/reducers';

export default function configureStore(preloadedState) {
	return createStore(characters, preloadedState, applyMiddleware(thunkMiddleware));
}
