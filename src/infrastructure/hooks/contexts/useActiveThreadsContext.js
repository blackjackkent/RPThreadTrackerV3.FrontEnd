import { createContext, useContext } from 'react';

export const ActiveThreadsContext = createContext({});
export default () => {
	const {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		refreshThreads
	} = useContext(ActiveThreadsContext);
	return {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		refreshThreads,
		isThreadsLoading: isActiveThreadsLoading || isActiveThreadsStatusLoading
	};
};
