import { combineReducers } from 'redux';
import characters from './characters/reducers';
import ui from './ui/reducers';

const rootReducer = combineReducers({
	characters,
	ui
});

export default rootReducer;
