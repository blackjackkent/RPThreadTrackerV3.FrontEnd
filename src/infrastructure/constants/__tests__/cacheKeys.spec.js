import cacheKeys from '../cacheKeys';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(cacheKeys).toMatchSnapshot();
	});
});
