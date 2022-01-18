import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function usePublicViewsQuery() {
	const publicViewsQuery = useQuery(queryKeys.PUBLIC_VIEWS, () => {
		return axios.get(`${API_BASE_URL}api/publicviewmanagement`).then((res) => {
			console.log(res.data);
			return Promise.resolve(res.data);
		});
	});
	return publicViewsQuery;
}
export default usePublicViewsQuery;
