import { combineReducers } from 'redux';
import characters from './characters/reducers';
import ui from './ui/reducers';
import news from './news/reducers';
import user from './user/reducers';

const rootReducer = combineReducers({
	characters,
	ui,
	news,
	user
});

export default rootReducer;
