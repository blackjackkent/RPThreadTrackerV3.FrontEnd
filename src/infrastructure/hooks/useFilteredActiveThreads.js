import { useContext, useEffect, useState } from 'react';
import { ThreadsContext } from './contexts';

function useFilteredActiveThreads(filter, includeThreadsWithoutStatus = true) {
	const { activeThreads: threads, activeThreadsStatus: threadsStatusChunks } = useContext(
		ThreadsContext
	);
	const [filteredThreads, setFilteredThreads] = useState([]);
	useEffect(() => {
		const threadData = threads?.threads;
		if (!threadData?.length || !threadsStatusChunks) {
			return;
		}
		const threadsStatus = Object.values(threadsStatusChunks).reduce(
			(acc, curr) => acc.concat(curr),
			[]
		);
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
	}, [filter, includeThreadsWithoutStatus, threads, threadsStatusChunks]);
	return filteredThreads;
}
export default useFilteredActiveThreads;
