export default (a, b) => {
	if (a.urlIdentifier === b.urlIdentifier) {
		if (a.characterName === b.characterName) {
			return 0;
		}
		return a.characterName > b.characterName ? 1 : -1;
	}
	return a.urlIdentifier > b.urlIdentifier ? 1 : -1;
};
