import { useEffect, useState } from 'react';
import { filterDuplicatesFromArray } from '~/utility';

function useThreadListLastPosters(threadsWithStatus) {
	const [lastPosters, setLastPosters] = useState([]);

	const getLastPostersFromThreads = (threads) => {
		const lastPosterList = threads.map((s) => s.status?.lastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosterList);
	};

	useEffect(() => {
		if (!threadsWithStatus.length) {
			setLastPosters([]);
			return;
		}
		setLastPosters(getLastPostersFromThreads(threadsWithStatus));
	}, [threadsWithStatus]);
	return lastPosters;
}
export default useThreadListLastPosters;
