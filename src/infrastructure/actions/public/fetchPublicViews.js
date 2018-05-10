export const FETCH_PUBLIC_VIEWS = 'FETCH_PUBLIC_VIEWS';
export function fetchPublicViews() {
	return {
		type: FETCH_PUBLIC_VIEWS
	};
}
export const FETCHED_PUBLIC_VIEWS_FAILURE = 'FETCHED_PUBLIC_VIEWS_FAILURE';
export function fetchedPublicViewsFailure() {
	return {
		type: FETCHED_PUBLIC_VIEWS_FAILURE
	};
}
export const FETCHED_PUBLIC_VIEWS_SUCCESS = 'FETCHED_PUBLIC_VIEWS_SUCCESS';
export function fetchedPublicViewsSuccess(data) {
	return {
		type: FETCHED_PUBLIC_VIEWS_SUCCESS,
		data
	};
}
