import { FETCHED_PUBLIC_THREADS_SUCCESS, FETCH_PUBLIC_THREADS, FETCHED_PUBLIC_THREADS_FAILURE } from '../actions';

const defaultState = {
	view: {},
	threads: []
};
function publicThreads(state = defaultState, action) {
	switch (action.type) {
		case FETCH_PUBLIC_THREADS:
		case FETCHED_PUBLIC_THREADS_FAILURE:
			return defaultState;
		case FETCHED_PUBLIC_THREADS_SUCCESS:
			return {
				view: action.data.view,
				threads: action.data.threads
			};
		default:
			return state;
	}
}

export default publicThreads;
