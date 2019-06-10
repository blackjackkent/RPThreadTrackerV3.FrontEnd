// #region imports
import { takeEvery, put } from 'redux-saga/effects';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';

import {
	SET_SITE_THEME,
	loadSiteThemeSuccess
} from '../../actions';
// #endregion imports

function* setSiteTheme(action) {
	cache.set(cacheKeys.USE_LIGHT_THEME, action.data);
	yield put(loadSiteThemeSuccess(action.data));
}

export default function* setSiteThemeSaga() {
	yield takeEvery(SET_SITE_THEME, setSiteTheme);
}
