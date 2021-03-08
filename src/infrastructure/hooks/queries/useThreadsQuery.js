import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useEffect } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import { useThreadsStatusMutation } from '../mutations';

function useThreadsQuery(isArchived = false, enabled = true) {
	const threadsQuery = useQuery(
		[queryKeys.THREADS, { isArchived }],
		() => {
			return axios
				.get(`${API_BASE_URL}api/thread?isArchived=${isArchived}`)
				.then((res) => Promise.resolve(res.data));
		},
		{ enabled }
	);
	const {
		threadsStatus,
		fetchThreadsStatusChunk,
		isLoading: isThreadsStatusLoading
	} = useThreadsStatusMutation();
	const { data: threadData, isLoading: isThreadsLoading } = threadsQuery;
	useEffect(() => {
		if (!threadData?.threads?.length) {
			return;
		}
		const requests = JSON.parse(threadData.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			const chunk = requests.slice(i, i + 10);
			chunks.push(chunk);
		}
		chunks.forEach((chunk) => {
			fetchThreadsStatusChunk(chunk);
		});
	}, [threadData, threadsQuery.data, fetchThreadsStatusChunk]);
	return { threadData, threadsStatus, isThreadsLoading, isThreadsStatusLoading, ...threadsQuery };
}
export default useThreadsQuery;
