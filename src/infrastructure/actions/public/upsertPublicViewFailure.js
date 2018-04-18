export const UPSERT_PUBLIC_VIEW_FAILURE = 'UPSERT_PUBLIC_VIEW_FAILURE';
export function upsertPublicViewFailure(data) {
	return {
		type: UPSERT_PUBLIC_VIEW_FAILURE,
		data
	};
}
