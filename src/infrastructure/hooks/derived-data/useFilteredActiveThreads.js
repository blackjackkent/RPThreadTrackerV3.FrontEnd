import { useEffect, useState } from 'react';
import filters from '~/infrastructure/constants/filters';
import { useActiveThreadsContext } from '../contexts';

function useFilteredActiveThreads(filter) {
	const {
		activeThreads: threads,
		activeThreadsStatus: threadsStatus
	} = useActiveThreadsContext();
	const [filteredThreads, setFilteredThreads] = useState([]);
	useEffect(() => {
		const threadData = threads?.threads;
		if (!threadData?.length || !threadsStatus) {
			return;
		}
		const statuses = threadsStatus.filter(filter) ?? [];
		let results = statuses.reduce((result, status) => {
			const thread = threadData.find(
				(t) => t.postId === status.postId && t.threadId === status.threadId
			);
			if (thread) {
				result.push({
					thread,
					status
				});
			}
			return result;
		}, []);
		if (filter === filters.THEIR_TURN || filter === filters.QUEUED) {
			results = results.concat(
				threadData
					.filter((t) => !t.postId)
					.map((t) => ({
						thread: t,
						status: null
					}))
			);
		}
		setFilteredThreads(results);
	}, [filter, threads, threadsStatus]);
	return filteredThreads;
}
export default useFilteredActiveThreads;
