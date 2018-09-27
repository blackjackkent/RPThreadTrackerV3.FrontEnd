import getTagsSortedByTagText from '../getTagsSortedByTagText';

describe('behavior', () => {
	it('should return empty array when no tags in state', () => {
		const state = { tags: [] };
		const result = getTagsSortedByTagText(state);
		expect(result).toHaveLength(0);
	});
	it('should execute sort function on state tags', () => {
		const state = {
			tags: [
				'tag5', 'tag3', 'tag8', 'tag2', 'tag7', 'tag9'
			]
		};
		const result = getTagsSortedByTagText(state);
		expect(result).toEqual([
			'tag2', 'tag3', 'tag5', 'tag7', 'tag8', 'tag9'
		]);
	});
});
