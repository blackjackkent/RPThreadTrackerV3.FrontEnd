import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function usePublicViewsQuery() {
	const publicViewsQuery = useQuery(queryKeys.PUBLIC_VIEWS, () => {
		return axios.get(`${API_BASE_URL}api/publicviewmanagement`).then((res) => {
			return Promise.resolve(res.data);
		});
	});
	return publicViewsQuery;
}
export default usePublicViewsQuery;
