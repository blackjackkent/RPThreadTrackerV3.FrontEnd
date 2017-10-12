import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import characters from './characters/reducers';

console.log(characters);
export default function configureStore(preloadedState) {
	console.log(characters);
	return createStore(characters, preloadedState, applyMiddleware(thunkMiddleware));
}
