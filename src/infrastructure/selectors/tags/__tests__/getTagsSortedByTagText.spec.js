import getTagsSortedByTagText from '../getTagsSortedByTagText';

jest.mock('../../common', () => ({
	getTags: jest.fn()
}));

describe('behavior', () => {
	it('should return empty array when no tags in state', () => {
		const result = getTagsSortedByTagText.resultFunc([]);
		expect(result).toHaveLength(0);
	});
	it('should execute sort function on state tags', () => {
		const tags = ['tag5', 'tag3', 'tag8', 'tag2', 'tag7', 'tag9'];
		const result = getTagsSortedByTagText.resultFunc(tags);
		expect(result).toEqual(['tag2', 'tag3', 'tag5', 'tag7', 'tag8', 'tag9']);
	});
});
