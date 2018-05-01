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
