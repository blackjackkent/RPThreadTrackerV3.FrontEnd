import getIsManageTagsLoadingIconVisible from '../getIsManageTagsLoadingIconVisible';

jest.mock('../../common', () => ({
	getUi: jest.fn()
}));
jest.mock('../getIsLoadingIconVisible', () => jest.fn());

describe('behavior', () => {
	it('should return false if all values false', () => {
		const isLoadingIconVisible = false;
		const ui = {
			isBulkUpdateTagModalOpen: false,
			isBulkDeleteTagModalOpen: false
		};
		const result = getIsManageTagsLoadingIconVisible.resultFunc(isLoadingIconVisible, ui);
		expect(result).toBe(false);
	});
	it('should return true if isLoadingIconVisible is true', () => {
		const isLoadingIconVisible = true;
		const ui = {
			isBulkUpdateTagModalOpen: false,
			isBulkDeleteTagModalOpen: false
		};
		const result = getIsManageTagsLoadingIconVisible.resultFunc(isLoadingIconVisible, ui);
		expect(result).toBe(true);
	});
	it('should return true if isBulkUpdateTagModalOpen is true', () => {
		const isLoadingIconVisible = false;
		const ui = {
			isBulkUpdateTagModalOpen: true,
			isBulkDeleteTagModalOpen: false
		};
		const result = getIsManageTagsLoadingIconVisible.resultFunc(isLoadingIconVisible, ui);
		expect(result).toBe(true);
	});
	it('should return true if isBulkDeleteTagModalOpen is true', () => {
		const isLoadingIconVisible = false;
		const ui = {
			isBulkUpdateTagModalOpen: false,
			isBulkDeleteTagModalOpen: true
		};
		const result = getIsManageTagsLoadingIconVisible.resultFunc(isLoadingIconVisible, ui);
		expect(result).toBe(true);
	});
});
