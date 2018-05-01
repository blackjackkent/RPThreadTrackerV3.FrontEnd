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
