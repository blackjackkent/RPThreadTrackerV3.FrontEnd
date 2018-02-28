export const UPSERT_THREAD = 'UPSERT_THREAD';
export function upsertThread(data) {
	return {
		type: UPSERT_THREAD,
		data
	};
}
