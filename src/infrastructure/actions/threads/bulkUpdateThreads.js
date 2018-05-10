import analytics from '../../constants/analytics';

export const BULK_UPDATE_THREADS = 'BULK_UPDATE_THREADS';
export function bulkUpdateThreads(data) {
	return {
		type: BULK_UPDATE_THREADS,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Bulk updated threads'
			}
		}
	};
}
export const BULK_UPDATE_THREADS_FAILURE = 'BULK_UPDATE_THREADS_FAILURE';
export function bulkUpdateThreadsFailure() {
	return {
		type: BULK_UPDATE_THREADS_FAILURE
	};
}
export const BULK_UPDATE_THREADS_SUCCESS = 'BULK_UPDATE_THREADS_SUCCESS';
export function bulkUpdateThreadsSuccess() {
	return {
		type: BULK_UPDATE_THREADS_SUCCESS
	};
}
