import { createSelector } from 'reselect';

const getLoading = state => state.loading;
const getIsLoadingIconVisible = createSelector(
	[getLoading],
	(loading) => {
		if (loading.isLoadingIconVisible) {
			return true;
		}
		if (loading.charactersLoading) {
			return true;
		}
		return false;
	}
);
export default getIsLoadingIconVisible;
