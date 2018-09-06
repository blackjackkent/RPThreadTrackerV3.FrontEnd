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
export const UPSERT_THREAD_FAILURE = 'UPSERT_THREAD_FAILURE';
export function upsertThreadFailure() {
	return {
		type: UPSERT_THREAD_FAILURE
	};
}
export const UPSERT_THREAD_SUCCESS = 'UPSERT_THREAD_SUCCESS';
export function upsertThreadSuccess(thread) {
	return {
		type: UPSERT_THREAD_SUCCESS,
		data: thread
	};
}
