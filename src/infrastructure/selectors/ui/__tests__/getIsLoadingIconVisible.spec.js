import getIsLoadingIconVisible from '../getIsLoadingIconVisible';

jest.mock('../../common', () => ({
	getLoading: jest.fn()
}));

describe('behavior', () => {
	it('should return false if all values false', () => {
		const loading = {};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(false);
	});
	it('should return true if activeThreadsLoading is true', () => {
		const loading = {
			activeThreadsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if archivedThreadsLoading is true', () => {
		const loading = {
			archivedThreadsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if bulkUntrackThreadLoading is true', () => {
		const loading = {
			bulkUntrackThreadLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if bulkUpsertThreadsLoading is true', () => {
		const loading = {
			bulkUpsertThreadsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if changeAccountInfoLoading is true', () => {
		const loading = {
			changeAccountInfoLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if changePasswordLoading is true', () => {
		const loading = {
			changePasswordLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if charactersLoading is true', () => {
		const loading = {
			charactersLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if contactFormLoading is true', () => {
		const loading = {
			contactFormLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if deletePublicViewLoading is true', () => {
		const loading = {
			deletePublicViewLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if exportThreadsLoading is true', () => {
		const loading = {
			exportThreadsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if publicViewsLoading is true', () => {
		const loading = {
			publicViewsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if publicThreadsLoading is true', () => {
		const loading = {
			publicThreadsLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if untrackCharactersLoading is true', () => {
		const loading = {
			untrackCharactersLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if untrackThreadLoading is true', () => {
		const loading = {
			untrackThreadLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if upsertCharactersLoading is true', () => {
		const loading = {
			upsertCharactersLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if upsertPublicViewLoading is true', () => {
		const loading = {
			upsertPublicViewLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if upsertThreadLoading is true', () => {
		const loading = {
			upsertThreadLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if bulkUpdateTagLoading is true', () => {
		const loading = {
			bulkUpdateTagLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
	it('should return true if bulkDeleteTagLoading is true', () => {
		const loading = {
			bulkDeleteTagLoading: true
		};
		const result = getIsLoadingIconVisible.resultFunc(loading);
		expect(result).toBe(true);
	});
});
