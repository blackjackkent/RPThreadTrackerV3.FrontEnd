import { createContext, useContext } from 'react';

export const ActiveThreadsContext = createContext({});
export default () => {
	const {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		refetch
	} = useContext(ActiveThreadsContext);
	return {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		refetch,
		isThreadsLoading: isActiveThreadsLoading || isActiveThreadsStatusLoading
	};
};
