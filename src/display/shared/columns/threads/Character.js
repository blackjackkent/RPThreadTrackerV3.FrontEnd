import React from 'react';
import columns from '../../../../infrastructure/constants/columns';
import CharacterSelectItem from '../../CharacterSelectItem';

export default (characters, includeFilter) => ({
	Header: columns.CHARACTER.name,
	accessor: columns.CHARACTER.key,
	Cell: row => <span>{row.value}{row.original.thread.character.characterName && ` (${row.original.thread.character.characterName})`}</span>,
	minWidth: 250,
	sortable: true,
	resizable: true,
	filterable: includeFilter,
	// eslint-disable-next-line react/prop-types
	Filter: ({ filter, onChange }) => (
		<select
			onChange={event => onChange(event.target.value)}
			style={{ width: '100%' }}
			value={filter ? filter.value : ''}
		>
			<option value="">Show All</option>
			{characters.map(character =>
				<CharacterSelectItem key={character.characterId} character={character} />)}
		</select>
	),
	filterMethod: (filter, row) => {
		const characterId = parseInt(filter.value, 10);
		// eslint-disable-next-line no-underscore-dangle
		return characterId === row._original.thread.character.characterId;
	}
});
