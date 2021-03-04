import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useNewsQuery() {
	const newsQuery = useQuery(queryKeys.NEWS, () => {
		return axios
			.get(`${TUMBLR_CLIENT_BASE_URL}api/news`)
			.then((res) => Promise.resolve(res.data));
	});
	return newsQuery;
}
export default useNewsQuery;
