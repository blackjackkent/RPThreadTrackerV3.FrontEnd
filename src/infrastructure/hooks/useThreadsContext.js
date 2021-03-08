import { createContext, useContext } from 'react';

export const ThreadsContext = createContext({});
export default () => {
	const {
		activeThreads,
		activeThreadsStatus,
		archivedThreads,
		archivedThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		isArchivedThreadsLoading,
		isArchivedThreadsStatusLoading
	} = useContext(ThreadsContext);
	return {
		activeThreads,
		activeThreadsStatus,
		archivedThreads,
		archivedThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		isArchivedThreadsLoading,
		isArchivedThreadsStatusLoading,
		isThreadsLoading:
			isActiveThreadsLoading ||
			isActiveThreadsStatusLoading ||
			isArchivedThreadsLoading ||
			isArchivedThreadsStatusLoading
	};
};
