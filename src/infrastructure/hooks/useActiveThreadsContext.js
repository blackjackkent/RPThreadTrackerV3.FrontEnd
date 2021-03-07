import { createContext, useContext } from 'react';

export const ActiveThreadsContext = createContext({});
export default () => {
	const {
		activeThreads,
		activeThreadsStatus,
		setActiveThreadsStatus,
		isThreadsLoading,
		isThreadsStatusLoading
	} = useContext(ActiveThreadsContext);
	return {
		activeThreads,
		activeThreadsStatus,
		setActiveThreadsStatus,
		isThreadsLoading,
		isThreadsStatusLoading
	};
};
