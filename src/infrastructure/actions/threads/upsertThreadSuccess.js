export const UPSERT_THREAD_SUCCESS = 'UPSERT_THREAD_SUCCESS';
export function upsertThreadSuccess(thread) {
	return {
		type: UPSERT_THREAD_SUCCESS,
		data: thread
	};
}
