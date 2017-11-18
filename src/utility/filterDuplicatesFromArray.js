const filterDuplicatesFromArray = (array) => {
	return array.filter((elem, pos, arr) => elem && arr.indexOf(elem) == pos);
}
export default filterDuplicatesFromArray;
