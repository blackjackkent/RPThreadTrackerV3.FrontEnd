import { createSelector } from 'reselect';

const filteredCharacterId = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredCharacterId;
	}
	return null;
};
const filteredTag = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredTag;
	}
	return null;
};
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, filteredCharacterId, filteredTag],
	(threads, threadsStatus, characterId, tag) => {
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
		if (characterId) {
			results = results.filter(t => t.thread.characterId === characterId);
		}
		if (tag) {
			results = results.filter((t) => {
				if (!t.thread.threadTags) {
					return [];
				}
				return t.thread.threadTags.filter(tt => tt.tagText === tag).length > 0;
			});
		}
		return results;
	}
);
export default getMyTurnFilteredThreads;
