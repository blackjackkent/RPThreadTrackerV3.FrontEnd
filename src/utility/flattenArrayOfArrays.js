function flattenArrayOfArrays(array) {
	return array.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArrayOfArrays(b) : b), []);
}
export default flattenArrayOfArrays;
