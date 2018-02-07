import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		return threads.reduce((result, t) => {
			const status = threadsStatus.find(s => s.PostId === t.postId);
			if (status.IsCallingCharactersTurn) {
				result.push({ thread: t, status });
			}
			return result;
		}, []);
	}
);
export default getMyTurnThreads;
