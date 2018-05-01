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
