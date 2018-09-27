import getIsLoadingIconVisible from '../getIsLoadingIconVisible';

describe('behavior', () => {
	it('should return false if all values false', () => {
		const state = {
			loading: {}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(false);
	});
	it('should return true if activeThreadsLoading is true', () => {
		const state = {
			loading: {
				activeThreadsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if archivedThreadsLoading is true', () => {
		const state = {
			loading: {
				archivedThreadsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if bulkUntrackThreadLoading is true', () => {
		const state = {
			loading: {
				bulkUntrackThreadLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if bulkUpsertThreadsLoading is true', () => {
		const state = {
			loading: {
				bulkUpsertThreadsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if changeAccountInfoLoading is true', () => {
		const state = {
			loading: {
				changeAccountInfoLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if changePasswordLoading is true', () => {
		const state = {
			loading: {
				changePasswordLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if charactersLoading is true', () => {
		const state = {
			loading: {
				charactersLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if contactFormLoading is true', () => {
		const state = {
			loading: {
				contactFormLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if deletePublicViewLoading is true', () => {
		const state = {
			loading: {
				deletePublicViewLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if exportThreadsLoading is true', () => {
		const state = {
			loading: {
				exportThreadsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if publicViewsLoading is true', () => {
		const state = {
			loading: {
				publicViewsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if publicThreadsLoading is true', () => {
		const state = {
			loading: {
				publicThreadsLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if untrackCharactersLoading is true', () => {
		const state = {
			loading: {
				untrackCharactersLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if untrackThreadLoading is true', () => {
		const state = {
			loading: {
				untrackThreadLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if upsertCharactersLoading is true', () => {
		const state = {
			loading: {
				upsertCharactersLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if upsertPublicViewLoading is true', () => {
		const state = {
			loading: {
				upsertPublicViewLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
	it('should return true if upsertThreadLoading is true', () => {
		const state = {
			loading: {
				upsertThreadLoading: true
			}
		};
		const result = getIsLoadingIconVisible(state);
		expect(result).toBe(true);
	});
});
