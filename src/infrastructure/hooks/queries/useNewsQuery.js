import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import useUserSettingsQuery from './useUserSettingsQuery';

function useNewsQuery() {
	const [markedNews, setMarkedNews] = useState([]);
	const [unreadNewsCount, setUnreadNewsCount] = useState(0);
	const userSettingsQuery = useUserSettingsQuery();
	const newsQuery = useQuery(queryKeys.NEWS, () => {
		return axios
			.get(`${TUMBLR_CLIENT_BASE_URL}api/news`)
			.then((res) => Promise.resolve(res.data));
	});

	useEffect(() => {
		const { data: userSettings } = userSettingsQuery;
		const { data: news } = newsQuery;

		if (!userSettings || !news) {
			return;
		}

		const lastNewsReadDate = new Date(userSettings.lastNewsReadDate);
		const marked = news.map((n) => ({
			...n,
			isUnread: !lastNewsReadDate || new Date(n.postDate) > lastNewsReadDate
		}));

		setMarkedNews(marked);
		setUnreadNewsCount(marked.filter((n) => n.isUnread).length);
	}, [newsQuery.data, userSettingsQuery.data]);

	return {
		userSettings: userSettingsQuery.data,
		markedNews,
		unreadNewsCount,
		setUnreadNewsCount
	};
}
export default useNewsQuery;
