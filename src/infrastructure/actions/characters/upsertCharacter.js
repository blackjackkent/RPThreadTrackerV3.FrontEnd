import analytics from '../../constants/analytics';

export const UPSERT_CHARACTER = 'UPSERT_CHARACTER';
export function upsertCharacter(data) {
	return {
		type: UPSERT_CHARACTER,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.CHARACTER,
				action: data.characterId ? 'Edited character' : 'Added character'
			}
		}
	};
}
export const UPSERT_CHARACTER_FAILURE = 'UPSERT_CHARACTER_FAILURE';
export function upsertCharacterFailure(data) {
	return {
		type: UPSERT_CHARACTER_FAILURE,
		data
	};
}
export const UPSERT_CHARACTER_SUCCESS = 'UPSERT_CHARACTER_SUCCESS';
export function upsertCharacterSuccess(character) {
	return {
		type: UPSERT_CHARACTER_SUCCESS,
		data: character
	};
}
