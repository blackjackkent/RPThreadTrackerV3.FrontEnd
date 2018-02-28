export const UPSERT_THREAD_FAILURE = 'UPSERT_THREAD_FAILURE';
export function upsertThreadFailure(data) {
	return {
		type: UPSERT_THREAD_FAILURE,
		data
	};
}
