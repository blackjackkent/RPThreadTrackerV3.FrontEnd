import { useEffect, useState } from 'react';
import filters from '~/infrastructure/constants/filters';
import publicThreadFilterKeys from '~/infrastructure/constants/publicThreadFilterKeys';
import filterPublicStatusesByTurnFilter from '~/utility/filterPublicStatusesByTurnFilter';
import { useFilteredThreads } from './useFilteredThreads';

const shouldProcessThreads = (threads, threadsStatus) => {
	if (!threads) {
		return false;
	}
	const threadsWithStatusesCount = threads.filter((t) => t.postId).length;
	if (threadsWithStatusesCount > 0 && !threadsStatus.length) {
		return false;
	}
	return true;
};

const getFilterForView = (threadFilter) => {
	switch (threadFilter) {
		case publicThreadFilterKeys.ARCHIVED:
			return (t) => t.thread.isArchived;
		case publicThreadFilterKeys.QUEUED:
			return (t) => !t.thread.isArchived && t.status && filters.QUEUED(t.status);
		case publicThreadFilterKeys.PARTNERS_TURN:
			return (t) => !t.thread.isArchived && t.status && filters.THEIR_TURN(t.status);
		case publicThreadFilterKeys.MY_TURN:
			return (t) => !t.thread.isArchived && (!t.status || filters.MY_TURN(t.status));
		default:
			return (t) => t;
	}
};

function usePublicFilteredThreads(threads, threadsStatus, view, publicUiFilter = null) {
	const [filteredStatuses, setFilteredStatuses] = useState([]);
	const filteredThreads = useFilteredThreads(threads, filteredStatuses);
	console.log({
		threads,
		threadsStatus,
		filteredStatuses,
		filteredThreads
	});
	useEffect(() => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return;
		}
		setFilteredStatuses(filterPublicStatusesByTurnFilter(threadsStatus, threads, view));
	}, [threads, view, threadsStatus]);
	return filteredThreads.filter(getFilterForView(publicUiFilter));
}
export default usePublicFilteredThreads;
