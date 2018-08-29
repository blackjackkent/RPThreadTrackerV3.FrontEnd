import analytics from '../analytics';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(analytics).toMatchSnapshot();
	});
});
