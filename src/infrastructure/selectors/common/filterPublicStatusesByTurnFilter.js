import filters from '../../constants/filters';

const filterByArchived = (statuses, threads, filter, isArchived) => {
	const baseFiltered = statuses.filter(filter);
	const result = baseFiltered.filter(
		(s) =>
			threads.filter(
				(t) => (isArchived ? t.isArchived : !t.isArchived) && t.threadId === s.threadId
			).length > 0
	);
	return result;
};

export default (statuses, threads, view) => {
	let filteredStatuses = [];
	if (view.turnFilter && view.turnFilter.includeMyTurn) {
		filteredStatuses = filteredStatuses.concat(
			filterByArchived(statuses, threads, filters.MY_TURN, false)
		);
	}
	if (view.turnFilter && view.turnFilter.includeTheirTurn) {
		filteredStatuses = filteredStatuses.concat(
			filterByArchived(statuses, threads, filters.THEIR_TURN, false)
		);
	}
	if (view.turnFilter && view.turnFilter.includeQueued) {
		filteredStatuses = filteredStatuses.concat(
			filterByArchived(statuses, threads, filters.QUEUED, false)
		);
	}
	if (view.turnFilter && view.turnFilter.includeArchived) {
		filteredStatuses = filteredStatuses.concat(
			filterByArchived(statuses, threads, filters.ALL, true)
		);
	}
	return filteredStatuses;
};
