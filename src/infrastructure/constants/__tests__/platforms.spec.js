import platforms from '../platforms';

describe('object structure', () => {
	it('should have expected values', () => {
		expect(platforms).toMatchSnapshot();
	});
});
