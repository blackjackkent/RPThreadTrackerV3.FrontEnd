import getNewsUnreadCount, { markUnreadNews } from '../getNews';

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
		const state = {
			userSettings: {},
			news: getNews()
		};
		const result = markUnreadNews(state);
		expect(result).toHaveLength(5);
		expect(result.filter(n => n.isUnread)).toHaveLength(5);
	});
	it('should mark items with date greater than lastNewsReadDate', () => {
		const state = {
			userSettings: {
				lastNewsReadDate: new Date(2018, 2, 28)
			},
			news: getNews()
		};
		const result = markUnreadNews(state);
		expect(result).toHaveLength(5);
		expect(result.filter(n => n.isUnread)).toHaveLength(3);
	});
});
describe('getNewsUnreadCount', () => {
	it('should return count of marked items', () => {
		const state = {
			userSettings: {
				lastNewsReadDate: new Date(2018, 2, 28)
			},
			news: getNews()
		};
		const result = getNewsUnreadCount(state);
		expect(result).toBe(3);
	});
});
