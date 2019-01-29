export default (threads, threadsStatus, predicate, includeNullStatus) => {
	const statuses = threadsStatus.filter(predicate);
	let results = statuses.reduce((result, status) => {
		const thread = threads.find(t => t.postId === status.postId && t.threadId === status.threadId);
		if (thread) {
			result.push({ thread, status });
		}
		return result;
	}, []);
	if (includeNullStatus) {
		results = results.concat(threads.filter(t => !t.postId)
			.map(t => ({ thread: t, status: null })));
	}
	return results;
};
