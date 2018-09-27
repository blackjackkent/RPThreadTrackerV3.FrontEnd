export default (a, b) => {
	if (a.tagText === b.tagText) {
		return 0;
	}
	return a.tagText > b.tagText ? 1 : -1;
};
