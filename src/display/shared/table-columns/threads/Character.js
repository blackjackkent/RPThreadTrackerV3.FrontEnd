/* eslint-disable react/prop-types */
import React from 'react';
import columns from '~/infrastructure/constants/columns';
import { sortCharacters } from '~/utility';
import CharacterFilter from '~/display/shared/table-filters/CharacterFilter';

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
	Filter: CharacterFilter(characters),
	filter: (rows, _colIds, filterValue) => {
		const characterId = parseInt(filterValue, 10);
		return rows.filter((r) => characterId === r.original.thread.character.characterId);
	},
	sortType: (rowA, rowB) => {
		return sortCharacters(rowA?.original?.thread?.character, rowB?.original?.thread?.character);
	}
});
