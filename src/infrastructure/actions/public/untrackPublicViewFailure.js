export const UNTRACK_PUBLIC_VIEW_FAILURE = 'UNTRACK_PUBLIC_VIEW_FAILURE';
export function untrackPublicViewFailure(data) {
	return {
		type: UNTRACK_PUBLIC_VIEW_FAILURE,
		data
	};
}
