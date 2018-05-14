import columns from './columns';

export const legacyPublicSlugs = [
	'yourturn',
	'theirturn',
	'myturn',
	'archived',
	'queued',
	'legacy'
];

function getSortKey(orderBy) {
	if (orderBy === 'UserTitle') {
		return columns.THREAD_TITLE.key;
	}
	if (orderBy === 'LastPostDate') {
		return columns.LAST_POST_DATE.key;
	}
	if (orderBy === 'LastPosterShortname') {
		return columns.LAST_POSTER.key;
	}
	if (orderBy === 'WatchedShortname') {
		return columns.TRACKED_PARTNER.key;
	}
	return columns.THREAD_TITLE.key;
}

export function buildLegacyView(queryData) {
	return {
		name: 'Untitled',
		slug: 'legacy',
		columns: [
			columns.THREAD_TITLE.key,
			columns.LAST_POSTER.key,
			columns.LAST_POST_DATE.key,
			columns.TRACKED_PARTNER.key
		],
		characters: queryData.currentBlog ? [queryData.currentBlog] : [],
		tags: queryData.filteredTag ? [queryData.filteredTag] : [],
		userId: queryData.userId,
		sortDescending: queryData.sortDescending === 'true',
		sortKey: getSortKey(queryData.currentOrderBy)
	};
}
