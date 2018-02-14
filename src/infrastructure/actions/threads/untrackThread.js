export const UNTRACK_THREAD = 'UNTRACK_THREAD';
export function untrackThread(data) {
	return {
		type: UNTRACK_THREAD,
		data
	};
}
