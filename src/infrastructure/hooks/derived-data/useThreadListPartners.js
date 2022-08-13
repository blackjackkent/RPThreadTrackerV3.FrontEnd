import { useEffect, useState } from 'react';
import { filterDuplicatesFromArray } from '~/utility';

function useThreadListPartners(threadsWithStatus) {
	const [partners, setPartners] = useState([]);

	const getPartnersFromThreads = (threads) => {
		const partnerList = threads.map((t) => t.thread.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partnerList);
	};

	useEffect(() => {
		if (!threadsWithStatus.length) {
			setPartners([]);
			return;
		}
		setPartners(getPartnersFromThreads(threadsWithStatus));
	}, [threadsWithStatus]);
	return partners;
}
export default useThreadListPartners;
