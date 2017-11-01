import { combineReducers } from 'redux'
import news from './news';
import ui from './ui';
import user from './user';

export default combineReducers({ news, ui, user });
