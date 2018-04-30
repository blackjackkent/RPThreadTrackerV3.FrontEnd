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
