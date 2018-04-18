export const UPSERT_PUBLIC_VIEW_SUCCESS = 'UPSERT_PUBLIC_VIEW_SUCCESS';
export function upsertPublicViewSuccess(data) {
	return {
		type: UPSERT_PUBLIC_VIEW_SUCCESS,
		data
	};
}
