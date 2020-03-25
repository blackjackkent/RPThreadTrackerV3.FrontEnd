import { isEqual } from 'lodash';

const filterDuplicatesFromArray = (array, key) => {
	if (!key) {
		return array.filter(
			(elem, pos, arr) => elem && pos === arr.findIndex((t) => isEqual(t, elem))
		);
	}
	return array.filter(
		(elem, index, arr) => index === arr.findIndex((t) => isEqual(t[key], elem[key]))
	);
};
export default filterDuplicatesFromArray;
