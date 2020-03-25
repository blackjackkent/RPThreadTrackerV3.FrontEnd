import getThreadDataFromExtensionQuery from '../getThreadDataFromExtensionQuery';

jest.mock('../getQuery', () => jest.fn(() => ({
	tumblrPostId: 12345,
	tumblrBlogShortname: 'my-test-blog'
})));

describe('behavior', () => {
	it('should return object with post ID if no characters passed', () => {
		const result = getThreadDataFromExtensionQuery([]);
		expect(result).toEqual({
			postId: 12345
		});
	});
	it('should return object with post ID and first character if no matching character in list', () => {
		const result = getThreadDataFromExtensionQuery([
			{
				characterId: 2,
				urlIdentifier: 'my-test-blog2'
			},
			{
				characterId: 3,
				urlIdentifier: 'my-test-blog3'
			}
		]);
		expect(result).toEqual({
			postId: 12345,
			characterId: 2
		});
	});
	it('should return object with post ID and matching character if no character in list', () => {
		const result = getThreadDataFromExtensionQuery([
			{
				characterId: 2,
				urlIdentifier: 'my-test-blog2'
			},
			{
				characterId: 1,
				urlIdentifier: 'my-test-blog'
			},
			{
				characterId: 3,
				urlIdentifier: 'my-test-blog3'
			}
		]);
		expect(result).toEqual({
			postId: 12345,
			characterId: 1
		});
	});
});
