import { createSelector } from 'reselect';
import getIsLoadingIconVisible from './getIsLoadingIconVisible';
import { getUi } from '../common';

const getIsManageTagsLoadingIconVisible = createSelector(
	[getIsLoadingIconVisible, getUi],
	(isLoadingIconVisible, ui) => {
		if (isLoadingIconVisible) {
			return true;
		}
		if (ui.isBulkUpdateTagModalOpen) {
			return true;
		}
		if (ui.isBulkDeleteTagModalOpen) {
			return true;
		}
		return false;
	}
);
export default getIsManageTagsLoadingIconVisible;
