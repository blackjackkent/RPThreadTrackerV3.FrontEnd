export const FETCHED_PUBLIC_VIEWS_SUCCESS = 'FETCHED_PUBLIC_VIEWS_SUCCESS';
export function fetchedPublicViewsSuccess(data) {
	return {
		type: FETCHED_PUBLIC_VIEWS_SUCCESS,
		data
	};
}
