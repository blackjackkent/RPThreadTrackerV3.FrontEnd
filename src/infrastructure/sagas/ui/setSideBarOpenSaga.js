// #region imports
import { takeEvery, put } from 'redux-saga/effects';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';

import { SET_SIDEBAR_OPEN, loadSidebarOpenSuccess } from '../../actions';
// #endregion imports

function* setSidebarOpen(action) {
	cache.set(cacheKeys.SIDEBAR_OPEN, action.data);
	yield put(loadSidebarOpenSuccess(action.data));
}

export default function* setSideBarOpenSaga() {
	yield takeEvery(SET_SIDEBAR_OPEN, setSidebarOpen);
}
