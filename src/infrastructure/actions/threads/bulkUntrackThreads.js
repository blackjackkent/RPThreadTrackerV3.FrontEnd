import analytics from '../../constants/analytics';

export const BULK_UNTRACK_THREADS = 'BULK_UNTRACK_THREADS';
export function bulkUntrackThreads(data) {
	return {
		type: BULK_UNTRACK_THREADS,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Bulk untracked threads'
			}
		}
	};
}
export const BULK_UNTRACK_THREADS_FAILURE = 'BULK_UNTRACK_THREADS_FAILURE';
export function bulkUntrackThreadsFailure() {
	return {
		type: BULK_UNTRACK_THREADS_FAILURE
	};
}
export const BULK_UNTRACK_THREADS_SUCCESS = 'BULK_UNTRACK_THREADS_SUCCESS';
export function bulkUntrackThreadsSuccess() {
	return {
		type: BULK_UNTRACK_THREADS_SUCCESS
	};
}
