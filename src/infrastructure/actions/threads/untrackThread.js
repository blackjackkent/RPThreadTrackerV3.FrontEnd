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
export const UNTRACK_THREAD_FAILURE = 'UNTRACK_THREAD_FAILURE';
export function untrackThreadFailure(data) {
	return {
		type: UNTRACK_THREAD_FAILURE,
		data
	};
}
export const UNTRACK_THREAD_SUCCESS = 'UNTRACK_THREAD_SUCCESS';
export function untrackThreadSuccess() {
	return {
		type: UNTRACK_THREAD_SUCCESS
	};
}
