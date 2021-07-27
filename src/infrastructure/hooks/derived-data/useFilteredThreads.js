import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import filters from '~/infrastructure/constants/filters';
import queryKeys from '~/infrastructure/constants/queryKeys';
import { useActiveThreadsContext } from '../contexts';
import { useArchivedThreadsQuery } from '../queries';

function useFilteredThreads(threads, threadsStatus, filter = null) {
	const [filteredThreads, setFilteredThreads] = useState([]);
	useEffect(() => {
		const threadData = threads?.threads;
		if (!threadData?.length || !threadsStatus) {
			return;
		}
		const filterFunc = filter ?? ((s) => s);
		const statuses = threadsStatus.filter(filterFunc) ?? [];
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
		if (filterFunc === filters.THEIR_TURN || filterFunc === filters.QUEUED) {
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
export const useFilteredActiveThreads = (filter) => {
	const {
		activeThreads: threads,
		activeThreadsStatus: threadsStatus,
		isThreadsLoading,
		refreshThreads
	} = useActiveThreadsContext();
	const filteredThreads = useFilteredThreads(threads, threadsStatus, filter);
	return { filteredThreads, isThreadsLoading, refreshThreads };
};

export const useArchivedThreads = () => {
	const {
		threadData,
		threadsStatus,
		isThreadsLoading,
		isThreadsStatusLoading,
		refreshThreads
	} = useArchivedThreadsQuery();
	const filteredThreads = useFilteredThreads(threadData, threadsStatus);
	return {
		filteredThreads,
		isThreadsLoading: isThreadsLoading || isThreadsStatusLoading,
		refreshThreads
	};
};
