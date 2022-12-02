import { useEffect, useState } from 'react';
import filters from '~/infrastructure/constants/filters';
import { useActiveThreadsContext } from '../contexts';
import { useArchivedThreadsQuery } from '../queries';

export const useFilteredThreads = (threads, threadsStatus, filter = null) => {
	const [filteredThreads, setFilteredThreads] = useState([]);
	useEffect(() => {
		if (!threads?.length || !threadsStatus) {
			return;
		}
		const filterFunc = filter ?? ((s) => s);
		const statuses = threadsStatus.filter(filterFunc) ?? [];
		let results = statuses.reduce((result, status) => {
			const thread = threads.find(
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
		if (filterFunc !== filters.THEIR_TURN && filterFunc !== filters.QUEUED) {
			results = results.concat(
				threads
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
};
export const useFilteredActiveThreads = (filter) => {
	const {
		activeThreads: threads,
		activeThreadsStatus: threadsStatus,
		isThreadsLoading,
		refreshThreads
	} = useActiveThreadsContext();
	const filteredThreads = useFilteredThreads(threads?.threads, threadsStatus, filter);
	return { filteredThreads, isThreadsLoading, refreshThreads };
};

export const useArchivedThreads = () => {
	const { threadData, threadsStatus, isThreadsLoading, isThreadsStatusLoading, refreshThreads } =
		useArchivedThreadsQuery();
	const filteredThreads = useFilteredThreads(threadData?.threads, threadsStatus);
	return {
		filteredThreads,
		isThreadsLoading: isThreadsLoading || isThreadsStatusLoading,
		refreshThreads
	};
};
