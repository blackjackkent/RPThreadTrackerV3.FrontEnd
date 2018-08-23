import publicThreadFilterKeys from '../../constants/publicThreadFilterKeys';

export default (threadData, threadFilter) => {
	switch (threadFilter) {
		case publicThreadFilterKeys.ARCHIVED:
			return threadData.filter(t => t.thread.isArchived);
		case publicThreadFilterKeys.QUEUED:
			return threadData.filter(t => !t.thread.isArchived && t.status && t.status.isQueued);
		case publicThreadFilterKeys.PARTNERS_TURN:
			return threadData.filter(t => !t.thread.isArchived
				&& t.status
				&& !t.status.isCallingCharactersTurn
				&& !t.status.isQueued);
		case publicThreadFilterKeys.MY_TURN:
			return threadData.filter(t => !t.thread.isArchived
				&& (!t.status || t.status.isCallingCharactersTurn));
		default:
			return threadData;
	}
};
