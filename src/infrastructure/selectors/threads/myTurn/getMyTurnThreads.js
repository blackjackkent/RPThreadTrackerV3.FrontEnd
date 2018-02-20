import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		let results = [];
		const statuses = threadsStatus.filter(s => s.IsCallingCharactersTurn && !s.IsQueued);
		results = results.concat(statuses.map((s) => {
			const thread = threads.find(t => t.postId === s.PostId);
			return { thread, status: s };
		}));
		results = results.concat(threads.filter(t => !t.postId)
			.map(t => ({ thread: t, status: null })));
		return results;
	}
);
export default getMyTurnThreads;
