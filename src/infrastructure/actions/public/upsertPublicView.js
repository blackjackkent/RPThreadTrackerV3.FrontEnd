export const UPSERT_PUBLIC_VIEW = 'UPSERT_PUBLIC_VIEW';
export function upsertPublicView(data) {
	return {
		type: UPSERT_PUBLIC_VIEW,
		data
	};
}
