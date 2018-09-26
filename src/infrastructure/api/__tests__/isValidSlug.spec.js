import * as axios from 'axios';
import isValidSlug from '../isValidSlug';

global.API_BASE_URL = 'http://test-site/';
jest.mock('axios', () => ({
	get: jest.fn()
}));

describe('behavior', () => {
	it('should return rejected promise when GET request fails and view ID provided', async () => {
		axios.get.mockImplementationOnce(() => Promise.reject());
		return expect(isValidSlug('test-slug', '12345')).rejects.toBe(undefined);
	});
	it('should return rejected promise when GET request fails and view ID not provided', async () => {
		axios.get.mockImplementationOnce(() => Promise.reject());
		return expect(isValidSlug('test-slug')).rejects.toBe(undefined);
	});
	it('should return resolved promise when GET request succeeds and view ID provided', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve());
		return expect(isValidSlug('test-slug', '12345')).resolves.toBe(undefined);
	});
	it('should return resolved promise when GET request succeeds and view ID not provided', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve());
		return expect(isValidSlug('test-slug')).resolves.toBe(undefined);
	});
});
