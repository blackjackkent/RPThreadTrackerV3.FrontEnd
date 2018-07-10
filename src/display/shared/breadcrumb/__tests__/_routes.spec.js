import _routes from '../_routes';

describe('data', () => {
	it('should have all routes reflected', () => {
		expect(Object.getOwnPropertyNames(_routes)).toHaveLength(11);
	});
});
