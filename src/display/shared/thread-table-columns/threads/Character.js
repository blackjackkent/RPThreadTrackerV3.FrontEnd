/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';
import { sortCharacters } from '../../../../utility';
import CharacterSelectItem from '../../CharacterSelectItem';

export default (characters, includeFilter) => ({
	id: columns.CHARACTER.key,
	Header: columns.CHARACTER.name,
	accessor: (row) => ({
		urlIdentifier: row.thread.character.urlIdentifier,
		characterName: row.thread.character.characterName
	}),
	Cell: (row) => (
		<span>
			{row.value.urlIdentifier}
			{row.value.characterName && ` (${row.value.characterName})`}
		</span>
	),
	minWidth: 250,
	sortable: true,
	resizable: true,
	filterable: includeFilter,
	// eslint-disable-next-line react/prop-types
	Filter: ({ filter, onChange }) => {
		const options = characters
			.sort(sortCharacters)
			.map((character) => (
				<CharacterSelectItem key={character.characterId} character={character} />
			));
		return (
			<select
				onChange={(event) => onChange(event.target.value)}
				style={{
					width: '100%'
				}}
				value={filter ? filter.value : ''}
			>
				<option value="">Show All</option>
				{options}
			</select>
		);
	},
	filterMethod: (filter, row) => {
		const characterId = parseInt(filter.value, 10);
		// eslint-disable-next-line no-underscore-dangle
		return characterId === row._original.thread.character.characterId;
	},
	sortMethod: sortCharacters
});
