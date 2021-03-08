import { createContext, useContext } from 'react';

export const ActiveThreadsContext = createContext({});
export default () => {
	const {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading
	} = useContext(ActiveThreadsContext);
	return {
		activeThreads,
		activeThreadsStatus,
		isActiveThreadsLoading,
		isActiveThreadsStatusLoading,
		isThreadsLoading: isActiveThreadsLoading || isActiveThreadsStatusLoading
	};
};
