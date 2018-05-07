function getSortFunction(key) {
	return (a, b) => {
		if (a[key] < b[key]) {
			return -1;
		}
		if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	};
}

function sortByObjectProperty(collection, key) {
	const func = getSortFunction(key);
	return collection.sort(func);
}

export default sortByObjectProperty;
