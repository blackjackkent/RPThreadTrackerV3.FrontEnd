const filterDuplicatesFromArray = (array, key) => {
	if (!key) {
		return array.filter((elem, pos, arr) => elem && arr.indexOf(elem) === pos);
	}
	return array.filter((elem, index, arr) => {
		return index === arr.findIndex(t => (t[key] === elem[key]));
	});
};
export default filterDuplicatesFromArray;
