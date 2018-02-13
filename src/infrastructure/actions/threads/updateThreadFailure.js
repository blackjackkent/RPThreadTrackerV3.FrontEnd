export const UPDATE_THREAD_FAILURE = 'UPDATE_THREAD_FAILURE';
export function updateThreadFailure(data) {
	return {
		type: UPDATE_THREAD_FAILURE,
		data
	};
}
