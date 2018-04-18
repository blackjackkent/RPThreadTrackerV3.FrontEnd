export const UNTRACK_PUBLIC_VIEW = 'UNTRACK_PUBLIC_VIEW';
export function untrackPublicView(data) {
	return {
		type: UNTRACK_PUBLIC_VIEW,
		data
	};
}
