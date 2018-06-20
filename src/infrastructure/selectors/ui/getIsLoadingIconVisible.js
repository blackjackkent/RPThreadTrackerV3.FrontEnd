import { createSelector } from 'reselect';

const getLoading = state => state.loading;
const getIsLoadingIconVisible = createSelector(
	[getLoading],
	(loading) => {
		if (loading.activeThreadsLoading) {
			return true;
		}
		if (loading.archivedThreadsLoading) {
			return true;
		}
		if (loading.bulkUntrackThreadLoading) {
			return true;
		}
		if (loading.bulkUpsertThreadsLoading) {
			return true;
		}
		if (loading.changeAccountInfoLoading) {
			return true;
		}
		if (loading.changePasswordLoading) {
			return true;
		}
		if (loading.charactersLoading) {
			return true;
		}
		if (loading.contactFormLoading) {
			return true;
		}
		if (loading.deletePublicViewLoading) {
			return true;
		}
		if (loading.exportThreadsLoading) {
			return true;
		}
		if (loading.publicViewsLoading) {
			return true;
		}
		if (loading.untrackCharactersLoading) {
			return true;
		}
		if (loading.untrackThreadLoading) {
			return true;
		}
		if (loading.upsertCharactersLoading) {
			return true;
		}
		if (loading.upsertPublicViewLoading) {
			return true;
		}
		if (loading.upsertThreadLoading) {
			return true;
		}
		return false;
	}
);
export default getIsLoadingIconVisible;
