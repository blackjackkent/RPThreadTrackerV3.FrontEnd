import analytics from '../../constants/analytics';

export const UPSERT_THREAD = 'UPSERT_THREAD';
export function upsertThread(data) {
	return {
		type: UPSERT_THREAD,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: data.threadId ? 'Updated thread' : 'Added thread'
			}
		}
	};
}
