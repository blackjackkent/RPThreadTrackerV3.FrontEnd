import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useActiveThreadsQuery() {
	const { data: activeThreads } = useQuery(queryKeys.ACTIVE_THREADS, () => {
		return axios.get(`${API_BASE_URL}api/thread`).then((res) => Promise.resolve(res.data));
	});
	const requests = JSON.parse(activeThreads?.threadStatusRequestJson);
	const chunks = [];
	for (let i = 0, j = requests.length; i < j; i += 10) {
		chunks.push(requests.slice(i, i + 10));
	}

	const activeThreadsQuery = useQuery(queryKeys.ACTIVE_THREADS, () => {
		return axios.get(`${API_BASE_URL}api/character`).then((res) => Promise.resolve(res.data));
	});
	return activeThreadsQuery;
}
export default useActiveThreadsQuery;
