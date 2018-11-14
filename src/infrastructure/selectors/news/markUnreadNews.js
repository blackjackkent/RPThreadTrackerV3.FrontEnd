import { createSelector } from 'reselect';
import { getNews, getUserSettings } from '../common';

const markUnreadNews = createSelector(
	[getNews, getUserSettings],
	(news, userSettings) => {
		const { lastNewsReadDate } = userSettings;
		const dateValue = new Date(lastNewsReadDate);
		return news.map(n => ({
			...n, isUnread: !lastNewsReadDate || !dateValue || new Date(n.postDate) > dateValue
		}));
	}
);
export default markUnreadNews;
