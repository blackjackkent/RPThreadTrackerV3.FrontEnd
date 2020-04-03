export default (threads, threadsStatus) => {
	if (!threads.length) {
		return false;
	}
	const threadsWithStatusesCount = threads.filter((t) => t.postId).length;
	if (threadsWithStatusesCount > 0 && !threadsStatus.length) {
		return false;
	}
	return true;
};
