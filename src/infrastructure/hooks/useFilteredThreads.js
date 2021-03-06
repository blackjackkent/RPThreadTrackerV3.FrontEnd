import { useEffect, useState } from 'react';

function useFilteredThreads(threads, threadsStatus, filter, includeThreadsWithoutStatus = true) {
	const [filteredThreads, setFilteredThreads] = useState([]);
	useEffect(() => {
		// console.log('running');
		// console.log(threads);
		// console.log(threadsStatus);
		// console.log('************************');
		const threadData = threads?.threads;
		if (!threadData?.length) {
			return;
		}
		const statuses = threadsStatus?.filter(filter) ?? [];
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
export default useFilteredThreads;
