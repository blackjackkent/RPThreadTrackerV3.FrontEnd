export default (threads, threadsStatus, predicate, includeNullStatus) => {
	let results = [];
	const statuses = threadsStatus.filter(predicate);
	results = results.concat(statuses.map((s) => {
		const thread = threads.find(t => t.postId === s.postId);
		return { thread, status: s };
	}));
	if (includeNullStatus) {
		results = results.concat(threads.filter(t => !t.postId)
			.map(t => ({ thread: t, status: null })));
	}
	return results;
};
