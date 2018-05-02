import analytics from '../../constants/analytics';

export const UNTRACK_THREAD = 'UNTRACK_THREAD';
export function untrackThread(data) {
	return {
		type: UNTRACK_THREAD,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Untracked thread'
			}
		}
	};
}
