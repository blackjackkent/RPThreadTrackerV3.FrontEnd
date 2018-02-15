import { createSelector } from 'reselect';

const getNews = state => state.news;
const getUserSettings = state => state.userSettings;
const markUnreadNews = createSelector(
	[getNews, getUserSettings],
	(news, userSettings) => {
		const { lastNewsReadDate } = userSettings;
		const dateValue = new Date(lastNewsReadDate);
		return news.map(n => ({
			...n, isUnread: !dateValue || n.PostDate > dateValue
		}));
	}
);
const getNewsUnreadCount = createSelector(
	[markUnreadNews],
	news => news.filter(n => n.isUnread).length
);
export { markUnreadNews };
export default getNewsUnreadCount;
