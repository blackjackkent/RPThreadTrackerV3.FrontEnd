import sortCharacters from '../sortCharacters';

describe('function', () => {
	it('should sort by character name if both URLs are equal', () => {
		const characterA = { urlIdentifier: 'my-url-identifier', characterName: 'Character A' };
		const characterB = { urlIdentifier: 'my-url-identifier', characterName: 'Character B' };
		expect(sortCharacters(characterA, characterB)).toBe(-1);
		expect(sortCharacters(characterB, characterA)).toBe(1);
		expect(sortCharacters(characterA, characterA)).toBe(0);
	});
	it('should sort by character URL if URLs are different', () => {
		const characterA = { urlIdentifier: 'my-url-identifierB', characterName: 'Character A' };
		const characterB = { urlIdentifier: 'my-url-identifierA', characterName: 'Character B' };
		expect(sortCharacters(characterA, characterB)).toBe(1);
		expect(sortCharacters(characterB, characterA)).toBe(-1);
		expect(sortCharacters(characterA, characterA)).toBe(0);
	});
});
