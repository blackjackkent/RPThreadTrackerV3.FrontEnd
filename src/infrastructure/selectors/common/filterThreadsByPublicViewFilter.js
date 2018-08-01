import publicThreadFilterKeys from '../../constants/publicThreadFilterKeys';

export default (threadData, threadFilter) => {
	switch (threadFilter) {
		case publicThreadFilterKeys.ARCHIVED:
			return threadData.filter(t => t.thread.isArchived);
		case publicThreadFilterKeys.QUEUED:
			return threadData.filter(t => !t.thread.isArchived && t.status && t.status.IsQueued);
		case publicThreadFilterKeys.PARTNERS_TURN:
			return threadData.filter(t =>
				!t.thread.isArchived
				&& t.status
				&& !t.status.IsCallingCharactersTurn
				&& !t.status.IsQueued);
		case publicThreadFilterKeys.MY_TURN:
			return threadData.filter(t =>
				!t.thread.isArchived && (!t.status || t.status.IsCallingCharactersTurn));
		default:
			return threadData;
	}
};
