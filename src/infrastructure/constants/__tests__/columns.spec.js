import columns from '../columns';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(columns).toMatchSnapshot();
	});
});
