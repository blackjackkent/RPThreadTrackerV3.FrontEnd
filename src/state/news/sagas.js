import { call, put, takeEvery } from 'redux-saga/effects'
import NewsApi from '../../api/NewsApi';
function* fetchNews(action) {
	try {
		const news = yield call(NewsApi.getNews);
		yield put({ type: "NEWS_FETCH_SUCCEEDED", news: news });
	} catch (e) {
		yield put({ type: "NEWS_FETCH_FAILED", message: e.message });
	}
}

export default function* newsSaga() {
	yield takeEvery("NEWS_FETCH_REQUESTED", fetchNews);
}
