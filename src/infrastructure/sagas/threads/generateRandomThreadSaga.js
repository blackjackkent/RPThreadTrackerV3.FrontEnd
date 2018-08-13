import { put, select, takeEvery } from 'redux-saga/effects';
import { getMyTurnThreads } from '../../selectors';

import {
	GENERATE_RANDOM_THREAD,
	generatedRandomThreadSuccess
} from '../../actions';

function* generateRandomThread() {
	let validThreads = yield select(getMyTurnThreads);
	validThreads = validThreads.filter(t => !t.status || t.status.lastPostUrl);
	const threadData = validThreads[Math.floor(Math.random() * validThreads.length)];
	yield put(generatedRandomThreadSuccess(threadData));
}

export default function* generateRandomThreadSaga() {
	yield takeEvery(GENERATE_RANDOM_THREAD, generateRandomThread);
}
