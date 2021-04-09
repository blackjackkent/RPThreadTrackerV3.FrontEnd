export default (a, b) => {
	const aUrlIdentifier = a.urlIdentifier ?? '';
	const bUrlIdentifier = b.urlIdentifier ?? '';
	const urlCompare = aUrlIdentifier.localeCompare(bUrlIdentifier, undefined, {
		sensitivity: 'accent'
	});
	const aName = a.characterName ?? '';
	const bName = b.characterName ?? '';
	const nameCompare = aName.localeCompare(bName, undefined, {
		sensitivity: 'accent'
	});
	if (urlCompare === 0) {
		if (nameCompare === 0) {
			return 0;
		}
		return nameCompare;
	}
	return urlCompare;
};
