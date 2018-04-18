export const UNTRACK_PUBLIC_VIEW_SUCCESS = 'UNTRACK_PUBLIC_VIEW_SUCCESS';
export function untrackPublicViewSuccess(data) {
	return {
		type: UNTRACK_PUBLIC_VIEW_SUCCESS,
		data
	};
}
