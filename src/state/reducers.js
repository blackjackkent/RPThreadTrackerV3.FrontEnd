import { combineReducers } from 'redux';
import characters from './characters/reducers';
import ui from './ui/reducers';
import news from './news/reducers';

const rootReducer = combineReducers({
	characters,
	ui,
	news
});

export default rootReducer;
