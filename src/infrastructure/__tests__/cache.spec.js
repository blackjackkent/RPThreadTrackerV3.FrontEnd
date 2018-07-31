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
	jest.resetAllMocks();
});

describe('behavior', () => {
	describe('get', () => {
		it('should return null if cache is disabled and key not whitelisted', () => {
			utility.getQuery.mockReturnValue({ disableCache: true });
			ls.get.mockReturnValue({ test: 'blah' });
			const response = cache.get('test');
			expect(response).toBe(null);
		});
		it('should get value if cache is enabled', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue({ test: 'blah' });
			const response = cache.get('test');
			expect(response).toBe('blah');
		});
		it('should get value if cache is disabled and key is whitelisted', () => {
			utility.getQuery.mockReturnValue({ disableCache: true });
			ls.get.mockReturnValue({ accessToken: 'blah' });
			const response = cache.get('accessToken');
			expect(response).toBe('blah');
		});
		it('should return null if cache is not yet initialized', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue(null);
			const response = cache.get('test');
			expect(response).toBe(null);
		});
		it('should return null if key does not exist', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue({ accessToken: 'blah' });
			const response = cache.get('test');
			expect(response).toBe(null);
		});
	});
	describe('set', () => {
		it('should do nothing if cache is disabled and key not whitelisted', () => {
			utility.getQuery.mockReturnValue({ disableCache: true });
			cache.set('test', 'blah');
			expect(ls.set).toHaveBeenCalledTimes(0);
		});
		it('should set value if cache is enabled', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue({ test: 'blah' });
			cache.set('test', 'blah2');
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', { test: 'blah2' });
		});
		it('should set value if cache is disabled and key is whitelisted', () => {
			utility.getQuery.mockReturnValue({ disableCache: true });
			ls.get.mockReturnValue({ test: 'blah' });
			cache.set('accessToken', 'blah2');
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', { test: 'blah', accessToken: 'blah2' });
		});
		it('should set value if cache is not yet initialized', () => {
			utility.getQuery.mockReturnValue({ disableCache: false });
			ls.get.mockReturnValue(null);
			cache.set('test', 'blah');
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', { test: 'blah' });
		});
	});
	describe('clearKey', () => {
		it('should clear value of key if it exists', () => {
			ls.get.mockReturnValue({ test: 'blah' });
			cache.clearKey('test');
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', { test: null });
		});
		it('should set null value for key if cache not yet initialized', () => {
			ls.get.mockReturnValue(null);
			cache.clearKey('test');
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', { test: null });
		});
	});
	describe('clear', () => {
		it('should delete all records for application key', () => {
			cache.clear();
			expect(ls.set).toHaveBeenCalledTimes(1);
			expect(ls.set).toHaveBeenLastCalledWith('rpthreadtracker-data', null);
		});
	});
});
