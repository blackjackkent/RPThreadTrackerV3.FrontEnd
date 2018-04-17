

export default (threadData, tag) => {
	let results = [].concat(threadData);
	if (tag) {
		results = results.filter((t) => {
			if (!t.thread.threadTags) {
				return [];
			}
			return t.thread.threadTags.filter(tt => tt.tagText === tag).length > 0;
		});
	}
	return results;
};
