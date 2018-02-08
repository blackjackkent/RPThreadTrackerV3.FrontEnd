import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		const statuses = threadsStatus.filter(s => !s || (s.IsCallingCharactersTurn && !s.IsQueued));
		return statuses.map((s) => {
			const thread = threads.find(t => t.postId === s.PostId);
			return { thread, status: s };
		});
	}
);
export default getMyTurnThreads;
