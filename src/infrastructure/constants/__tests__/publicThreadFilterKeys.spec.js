import publicThreadFilterKeys from '../publicThreadFilterKeys';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(publicThreadFilterKeys).toMatchSnapshot();
	});
});
