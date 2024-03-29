import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import { useThreadsStatusMutation } from '../mutations';

export function useThreadsQuery(isArchived = false) {
	const {
		threadsStatus,
		fetchThreadsStatusChunk,
		clearData: resetThreadsStatus,
		isLoading: isThreadsStatusLoading
	} = useThreadsStatusMutation();
	const threadsQuery = useQuery([queryKeys.THREADS, { isArchived }], () => {
		return axios.get(`${API_BASE_URL}api/thread?isArchived=${isArchived}`).then((res) => {
			return Promise.resolve(res.data);
		});
	});
	const { data: threadData, isLoading: isThreadsLoading } = threadsQuery;
	useEffect(() => {
		if (!threadData?.threads?.length) {
			return;
		}
		resetThreadsStatus();
		const requests = JSON.parse(threadData.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			const chunk = requests.slice(i, i + 10);
			chunks.push(chunk);
		}
		chunks.forEach((chunk) => {
			fetchThreadsStatusChunk(chunk);
		});
	}, [threadData, fetchThreadsStatusChunk, resetThreadsStatus]);
	const queryClient = useQueryClient();
	const refreshThreads = () => {
		queryClient.resetQueries([queryKeys.THREADS, { isArchived }]);
	};
	return {
		threadData,
		threadsStatus,
		isThreadsLoading,
		isThreadsStatusLoading,
		refreshThreads,
		...threadsQuery
	};
}

export const useActiveThreadsQuery = () => useThreadsQuery(false);
export const useArchivedThreadsQuery = () => useThreadsQuery(true);
