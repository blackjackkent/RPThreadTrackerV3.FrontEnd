import sortTags from '../sortTags';

describe('function', () => {
	it('should sort by tag text if both URLs are equal', () => {
		const tagA = {
			tagText: 'Tag A'
		};
		const tagB = {
			tagText: 'Tag B'
		};
		expect(sortTags(tagA, tagB)).toBe(-1);
		expect(sortTags(tagB, tagA)).toBe(1);
		expect(sortTags(tagA, tagA)).toBe(0);
	});
});
