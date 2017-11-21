import { combineReducers } from 'redux';
import news from './news';
import ui from './ui';
import user from './user';
import userSettings from './userSettings';
import characters from './characters';
import activeThreads from './activeThreads';
import archivedThreads from './archivedThreads';
import randomThread from './randomThread';
import threadFilter from './threadFilter';
import characterToEdit from './characterToEdit';

export default combineReducers({
	news,
	ui,
	user,
	userSettings,
	characters,
	activeThreads,
	archivedThreads,
	randomThread,
	threadFilter,
	characterToEdit
});
