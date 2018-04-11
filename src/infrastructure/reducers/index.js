import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import activeThreads from './activeThreads';
import activeThreadsStatus from './activeThreadsStatus';
import archivedThreads from './archivedThreads';
import bulkThreadsToEdit from './bulkThreadsToEdit';
import characterToEdit from './characterToEdit';
import characters from './characters';
import errors from './errors';
import loading from './loading';
import news from './news';
import publicThreads from './publicThreads';
import randomThread from './randomThread';
import tags from './tags';
import threadFilter from './threadFilter';
import threadToEdit from './threadToEdit';
import ui from './ui';
import user from './user';
import userSettings from './userSettings';

export default combineReducers({
	activeThreads,
	activeThreadsStatus,
	archivedThreads,
	bulkThreadsToEdit,
	characterToEdit,
	characters,
	errors,
	loading,
	news,
	publicThreads,
	randomThread,
	tags,
	threadFilter,
	threadToEdit,
	toastr,
	ui,
	user,
	userSettings
});
