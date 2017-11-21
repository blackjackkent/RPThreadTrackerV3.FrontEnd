const filterDuplicatesFromArray = array =>
	array.filter((elem, pos, arr) => elem && arr.indexOf(elem) === pos);
export default filterDuplicatesFromArray;
