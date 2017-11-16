export const SET_FILTERED_CHARACTER_ID = 'SET_FILTERED_CHARACTER_ID';
export function setFilteredCharacterId(id) {
	return {
		type: SET_FILTERED_CHARACTER_ID,
		data: id
	};
}
