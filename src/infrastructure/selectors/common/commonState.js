export const getAllActiveThreads = (state) => state.activeThreads;
export const getAllActiveThreadStatus = (state) => state.activeThreadsStatus;
export const getAllArchivedThreads = (state) => state.archivedThreads;
export const getAllArchivedThreadStatus = (state) => state.archivedThreadsStatus;
export const getFilteredTag = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredTag;
	}
	return null;
};
export const getPublicThreadFilter = (state) => state.publicThreadFilter;
export const getAllPublicThreads = (state) => state.publicThreads.threads;
export const getPublicThreadsView = (state) => state.publicThreads.view;
export const getAllPublicThreadStatus = (state) => state.publicThreadsStatus;
export const getAllCharacters = (state) => state.characters;
export const getNews = (state) => state.news;
export const getUserSettings = (state) => state.userSettings;
export const getTags = (state) => state.tags;
export const getLoading = (state) => state.loading;
export const getUi = (state) => state.ui;
