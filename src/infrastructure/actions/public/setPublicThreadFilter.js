export const SET_PUBLIC_THREAD_FILTER = 'SET_PUBLIC_THREAD_FILTER';
export function setPublicThreadFilter(filterKey) {
	return {
		type: SET_PUBLIC_THREAD_FILTER,
		data: filterKey
	};
}
