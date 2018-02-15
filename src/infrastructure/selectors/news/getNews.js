import { createSelector } from 'reselect';

const getNews = state => state.news;
const getUserSettings = state => state.userSettings;
const markUnreadNews = createSelector(
	[getNews, getUserSettings],
	(news, userSettings) => {
		const { lastNewsReadDate } = userSettings;
		return news.map(n => ({
			...n, isUnread: !lastNewsReadDate || n.PostDate > lastNewsReadDate
		}));
	}
);
const getNewsUnreadCount = createSelector(
	[markUnreadNews],
	news => news.filter(n => n.isUnread).length
);
export { markUnreadNews };
export default getNewsUnreadCount;
