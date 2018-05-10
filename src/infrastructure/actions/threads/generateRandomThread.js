import analytics from '../../constants/analytics';

export const GENERATE_RANDOM_THREAD = 'GENERATE_RANDOM_THREAD';
export function generateRandomThread() {
	return {
		type: GENERATE_RANDOM_THREAD,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Generated random thread'
			}
		}
	};
}
export const GENERATED_RANDOM_THREAD_SUCCESS = 'GENERATED_RANDOM_THREAD_SUCCESS';
export function generatedRandomThreadSuccess(data) {
	return {
		type: GENERATED_RANDOM_THREAD_SUCCESS,
		data
	};
}
