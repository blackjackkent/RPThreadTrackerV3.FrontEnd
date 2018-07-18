export default (threads, threadsStatus, predicate, includeNullStatus) => {
	let results = [];
	const statuses = threadsStatus.filter(predicate);
	results = results.concat(statuses.map((s) => {
		const thread = threads.find(t => t.postId === s.PostId);
		return { thread, status: s };
	}));
	if (includeNullStatus) {
		results = results.concat(threads.filter(t => !t.postId || t.isArchived)
			.map(t => ({ thread: t, status: null })));
	}
	return results;
};
