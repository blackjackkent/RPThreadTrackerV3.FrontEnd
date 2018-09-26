

export default (threadData, tag) => {
	let results = [].concat(threadData);
	if (tag) {
		results = results.filter((t) => {
			if (!t.thread || !t.thread.threadTags) {
				return false;
			}
			return t.thread.threadTags.filter(tt => tt.tagText === tag).length > 0;
		});
	}
	return results;
};
