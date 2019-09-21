// #region imports
import { takeEvery, put } from 'redux-saga/effects';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';

import {
	LOAD_SIDEBAR_OPEN,
	loadSidebarOpenSuccess
} from '../../actions';
// #endregion imports

function* loadSidebarOpen() {
	let sidebarOpen = cache.get(cacheKeys.SIDEBAR_OPEN);
	if (sidebarOpen == null) {
		sidebarOpen = true;
	}
	yield put(loadSidebarOpenSuccess(sidebarOpen));
}

export default function* loadSideBarOpenSaga() {
	yield takeEvery(LOAD_SIDEBAR_OPEN, loadSidebarOpen);
}
