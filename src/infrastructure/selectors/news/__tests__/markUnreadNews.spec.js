import markUnreadNews from '../markUnreadNews';

jest.mock('../../common', () => ({
	getNews: jest.fn(),
	getUserSettings: jest.fn()
}));

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
		postDate: new Date(2018, 4, 1)
	},
	{
		postId: 5,
		postDate: new Date(2018, 5, 1)
	}
];

describe('markUnreadNews', () => {
	it('should mark all items if no lastNewsReadDate', () => {
		// Act
		const result = markUnreadNews.resultFunc(getNews(), {});
		// Assert
		expect(result).toHaveLength(5);
		expect(result.filter((n) => n.isUnread)).toHaveLength(5);
	});
	it('should mark items with date greater than lastNewsReadDate', () => {
		// Arrange
		const userSettings = {
			lastNewsReadDate: new Date(2018, 2, 28)
		};
		const news = getNews();
		// Act
		const result = markUnreadNews.resultFunc(news, userSettings);
		// Assert
		expect(result).toHaveLength(5);
		expect(result.filter((n) => n.isUnread)).toHaveLength(3);
	});
});
