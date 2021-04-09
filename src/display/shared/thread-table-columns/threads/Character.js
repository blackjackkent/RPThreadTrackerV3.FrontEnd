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
	Cell: ({ value }) => (
		<span>
			{value.urlIdentifier}
			{value.characterName && ` (${value.characterName})`}
		</span>
	),
	disableFilters: !includeFilter,
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
	filter: (rows, _colIds, filterValue) => {
		const characterId = parseInt(filterValue, 10);
		// eslint-disable-next-line no-underscore-dangle
		return rows.filter((r) => characterId === r.original.thread.character.characterId);
	},
	sortType: (rowA, rowB) => {
		return sortCharacters(rowA?.original?.thread?.character, rowB?.original?.thread?.character);
	}
});
