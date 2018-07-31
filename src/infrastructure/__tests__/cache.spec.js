// #region imports
import * as ls from 'local-storage';
import * as utility from '../../utility';
import cache from '../cache';
// #endregion imports

// #region mocks
jest.mock('../../utility', () => ({
	getQuery: jest.fn()
}));
jest.mock('local-storage', () => ({
	get: jest.fn(),
	set: jest.fn()
}));
// #endregion mocks

beforeEach(() => {
	jest.restoreAllMocks();
	jest.spyOn(utility, 'getQuery');
	jest.spyOn(ls, 'get');
});

describe('behavior', () => {
	describe('get', () => {
		it('should return null when cache is disabled', () => {
			utility.getQuery.mockReturnValue({ disableCache: true });
			const result = cache.get('test');
			expect(result).toBe(null);
		});
		it('should not return null when cache is not disabled', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue({ test: 'blah' });
			const result = cache.get('test');
			expect(result).toBe('blah');
		});
	});
});
