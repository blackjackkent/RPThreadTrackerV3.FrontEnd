export const GENERATED_RANDOM_THREAD_SUCCESS = 'GENERATED_RANDOM_THREAD_SUCCESS';
export function generatedRandomThreadSuccess(data) {
	return {
		type: GENERATED_RANDOM_THREAD_SUCCESS,
		data
	};
}
