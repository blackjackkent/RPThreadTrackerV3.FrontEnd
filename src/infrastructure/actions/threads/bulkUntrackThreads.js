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
