import { useEffect, useState } from 'react';
import filters from '../../constants/filters';
import useFilteredActiveThreads from './useFilteredActiveThreads';

function sortByLastPostDate(a, b) {
	/* istanbul ignore if */
	if (!a.status && !b.status) {
		return 0;
	}
	/* istanbul ignore if */
	if (!a.status) {
		return 1;
	}
	/* istanbul ignore if */
	if (!b.status) {
		return -1;
	}
	return new Date(b.status.lastPostDate) - new Date(a.status.lastPostDate);
}
function useRecentActivity() {
	const myTurnThreads = useFilteredActiveThreads(filters.MY_TURN);
	const [recentActivityThreads, setRecentActivityThreads] = useState([]);
	useEffect(() => {
		let results = myTurnThreads.filter((t) => t.status || !t.thread.postId);
		results = results.sort(sortByLastPostDate);
		setRecentActivityThreads(results.slice(0, 5));
	}, [myTurnThreads]);
	return recentActivityThreads;
}
export default useRecentActivity;
