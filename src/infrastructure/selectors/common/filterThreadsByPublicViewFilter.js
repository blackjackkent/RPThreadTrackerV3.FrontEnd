import publicThreadFilterKeys from '../../constants/publicThreadFilterKeys';
import filters from '../../constants/filters';

export default (threadData, threadFilter) => {
	switch (threadFilter) {
		case publicThreadFilterKeys.ARCHIVED:
			return threadData.filter((t) => t.thread.isArchived);
		case publicThreadFilterKeys.QUEUED:
			return threadData.filter(
				(t) => !t.thread.isArchived && t.status && filters.QUEUED(t.status)
			);
		case publicThreadFilterKeys.PARTNERS_TURN:
			return threadData.filter(
				(t) => !t.thread.isArchived && t.status && filters.THEIR_TURN(t.status)
			);
		case publicThreadFilterKeys.MY_TURN:
			return threadData.filter(
				(t) => !t.thread.isArchived && (!t.status || filters.MY_TURN(t.status))
			);
		default:
			return threadData;
	}
};
