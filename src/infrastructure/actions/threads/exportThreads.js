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
export function exportThreadsFailure() {
	return {
		type: EXPORT_THREADS_FAILURE
	};
}
export const EXPORT_THREADS_SUCCESS = 'EXPORT_THREADS_SUCCESS';
export function exportThreadsSuccess() {
	return {
		type: EXPORT_THREADS_SUCCESS
	};
}
