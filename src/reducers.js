import { combineReducers } from 'redux';
import characters from './characters/reducers';

const rootReducer = combineReducers({
	characters
});

export default rootReducer;
