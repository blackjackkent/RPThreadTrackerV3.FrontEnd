import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import useUserSettingsQuery from './useUserSettingsQuery';
import NewsItem from '~/types/news/NewsItem';

declare const TUMBLR_CLIENT_BASE_URL: String;
function useNewsQuery() {
	const [markedNews, setMarkedNews] = useState<NewsItem[]>([]);
	const [unreadNewsCount, setUnreadNewsCount] = useState(0);
	const { data: userSettings } = useUserSettingsQuery();
	const { data: news } = useQuery<NewsItem[]>(queryKeys.NEWS, async () => {
		const res = await axios.get<NewsItem[]>(`${TUMBLR_CLIENT_BASE_URL}api/news`);
		return await Promise.resolve(res.data);
	});

	useEffect(() => {
		if (!userSettings || !news) {
			return;
		}
		const lastNewsReadDate = new Date(userSettings.lastNewsReadDate);
		const marked = news.map<NewsItem>((n) => ({
			...n,
			isUnread: !lastNewsReadDate || new Date(n.postDate) > lastNewsReadDate
		}));

		setMarkedNews(marked);
		setUnreadNewsCount(marked.filter((n) => n.isUnread).length);
	}, [news, userSettings]);

	return {
		userSettings,
		markedNews,
		unreadNewsCount,
		setUnreadNewsCount
	};
}
export default useNewsQuery;
