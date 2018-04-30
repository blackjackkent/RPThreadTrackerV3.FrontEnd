import { takeEvery } from 'redux-saga/effects';
import ReactGA from 'react-ga';
import analytics from '../constants/analytics';

function trackPageview(action) {
	ReactGA.pageview(action.analytics.path);
}
function trackEvent(action) {
	ReactGA.event(action.analytics.event);
}
function trackModalView(action) {
	ReactGA.modalview(action.analytics.path);
}

function handleAnalytics(action) {
	try {
		if (!action.analytics) {
			return;
		}
		switch (action.analytics.func) {
			case analytics.funcs.PAGEVIEW:
				trackPageview(action);
				break;
			case analytics.funcs.EVENT:
				trackEvent(action);
				break;
			case analytics.funcs.MODALVIEW:
				trackModalView(action);
				break;
			default:
				break;
		}
	} catch (e) {
		// eslint-disable-next-line no-empty
	}
}

export default function* analyticsSaga() {
	yield takeEvery('*', handleAnalytics);
}
