import getNewsUnreadCount from '../getNewsUnreadCount';

jest.mock('../markUnreadNews', () => jest.fn());

const getNews = () => [
	{
		postId: 1,
		postDate: new Date(2018, 1, 1)
	},
	{
		postId: 2,
		postDate: new Date(2018, 2, 1)
	},
	{
		postId: 3,
		postDate: new Date(2018, 3, 1)
	},
	{
		postId: 4,
		postDate: new Date(2018, 4, 1),
		isUnread: true
	},
	{
		postId: 5,
		postDate: new Date(2018, 5, 1),
		isUnread: true
	}
];

describe('getNewsUnreadCount', () => {
	it('should return count of marked items', () => {
		// Act
		const result = getNewsUnreadCount.resultFunc(getNews());
		// Assert
		expect(result).toBe(2);
	});
});
