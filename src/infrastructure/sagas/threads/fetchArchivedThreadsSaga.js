import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_ARCHIVED_THREADS,
	fetchedArchivedThreadsSuccess
} from '../../actions';

export default function* fetchActiveThreadsSaga() {
	yield take(FETCH_ARCHIVED_THREADS);
	const response = yield call(axios.get, 'http://localhost:3001/archivedThreads');
	yield put(fetchedArchivedThreadsSuccess(response.data));
}
