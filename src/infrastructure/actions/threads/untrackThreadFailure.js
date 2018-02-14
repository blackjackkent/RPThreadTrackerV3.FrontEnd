export const UNTRACK_THREAD_FAILURE = 'UNTRACK_THREAD_FAILURE';
export function untrackThreadFailure(data) {
	return {
		type: UNTRACK_THREAD_FAILURE,
		data
	};
}
