import { combineReducers } from 'redux';
import news from './news';
import ui from './ui';
import user from './user';
import userSettings from './userSettings';
import characters from './characters';
import threads from './threads';

export default combineReducers({
	news,
	ui,
	user,
	userSettings,
	characters,
	threads
});
