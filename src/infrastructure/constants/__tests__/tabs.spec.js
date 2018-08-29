import tabs from '../tabs';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(tabs).toMatchSnapshot();
	});
});
