import analytics from '../../constants/analytics';

export const EXPORT_THREADS = 'EXPORT_THREADS';
export function exportThreads(data) {
	return {
		type: EXPORT_THREADS,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Exported threads'
			}
		}
	};
}
export const EXPORT_THREADS_FAILURE = 'EXPORT_THREADS_FAILURE';
export function exportThreadsFailure(data) {
	return {
		type: EXPORT_THREADS_FAILURE,
		data
	};
}
export const EXPORT_THREADS_SUCCESS = 'EXPORT_THREADS_SUCCESS';
export function exportThreadsSuccess(data) {
	return {
		type: EXPORT_THREADS_SUCCESS,
		data
	};
}
