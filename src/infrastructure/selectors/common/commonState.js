export const getAllActiveThreads = state => state.activeThreads;
export const getAllActiveThreadStatus = state => state.activeThreadsStatus;
export const getAllArchivedThreads = state => state.archivedThreads;
export const getAllArchivedThreadStatus = state => state.archivedThreadsStatus;
export const getFilteredTag = state => (state.threadFilter ? state.threadFilter.filteredTag : null);
export const getPublicThreadFilter = state => state.publicThreadFilter;
export const getAllPublicThreads = state => state.publicThreads.threads;
export const getAllPublicThreadsStatus = state => state.publicThreadsStatus;
export const getAllCharacters = state => state.characters;
