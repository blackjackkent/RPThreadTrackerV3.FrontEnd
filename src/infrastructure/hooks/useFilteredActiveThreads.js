import { useEffect, useState } from 'react';
import { useActiveThreadsContext } from './contexts';

function useFilteredActiveThreads(filter, includeThreadsWithoutStatus = true) {
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
		if (includeThreadsWithoutStatus) {
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
	}, [filter, includeThreadsWithoutStatus, threads, threadsStatus]);
	return filteredThreads;
}
export default useFilteredActiveThreads;
