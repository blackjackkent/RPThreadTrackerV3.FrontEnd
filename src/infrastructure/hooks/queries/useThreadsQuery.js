import { useQueries, useQuery, useInfiniteQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import { useThreadsStatusMutation } from '../mutations';

function useThreadsQuery(isArchived = false) {
	const activeThreadsQuery = useQuery([queryKeys.THREADS, { isArchived }], () => {
		return axios.get(`${API_BASE_URL}api/thread`).then((res) => Promise.resolve(res.data));
	});
	const { fetchThreadsStatusChunk } = useThreadsStatusMutation();
	const { data: activeThreads } = activeThreadsQuery;
	useEffect(() => {
		if (!activeThreads?.threads?.length) {
			return;
		}
		const requests = JSON.parse(activeThreads.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			chunks.push(requests.slice(i, i + 10));
		}
		chunks.forEach((chunk) => {
			fetchThreadsStatusChunk(chunk);
		});
	}, [activeThreads, activeThreadsQuery.data, fetchThreadsStatusChunk]);
	return { activeThreads, ...activeThreadsQuery };
}
export default useThreadsQuery;
