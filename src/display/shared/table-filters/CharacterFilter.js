import React from 'react';
import { sortCharacters } from '~/utility';
import CharacterSelectItem from '../CharacterSelectItem';

function CharacterFilter(characters) {
	// eslint-disable-next-line react/prop-types
	return ({ column: { filterValue, setFilter } }) => {
		const options = characters
			.sort(sortCharacters)
			.map((character) => (
				<CharacterSelectItem key={character.characterId} character={character} />
			));
		return (
			<select
				onChange={(e) => {
					setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
				}}
				style={{
					width: '100%'
				}}
				value={filterValue}
			>
				<option value="">Show All</option>
				{options}
			</select>
		);
	};
}
export default CharacterFilter;
