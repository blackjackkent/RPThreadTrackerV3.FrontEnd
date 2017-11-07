import { createSelector } from 'reselect'

const getNews = state => state.news
const getNewsUnreadCount = createSelector(
	[getNews],
	(news) => {
		return news.filter(n => n.isUnread).length;
	}
);
export default getNewsUnreadCount;