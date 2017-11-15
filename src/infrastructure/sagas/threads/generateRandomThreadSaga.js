import { put, select, takeEvery } from 'redux-saga/effects';
import { getMyTurnThreads } from '../../selectors';

import {
	GENERATE_RANDOM_THREAD,
	generatedRandomThreadSuccess
} from '../../actions';

function* generateRandomThread() {
	const validThreads = yield select(getMyTurnThreads);
	const thread = validThreads[Math.floor(Math.random() * validThreads.length)];
	yield put(generatedRandomThreadSuccess(thread));
}

export default function* generateRandomThreadSaga() {
	yield takeEvery(GENERATE_RANDOM_THREAD, generateRandomThread);
}
