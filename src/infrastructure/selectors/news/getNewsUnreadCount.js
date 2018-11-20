import { createSelector } from 'reselect';
import markUnreadNews from './markUnreadNews';

const getNewsUnreadCount = createSelector(
	[markUnreadNews],
	news => news.filter(n => n.isUnread).length
);
export default getNewsUnreadCount;
