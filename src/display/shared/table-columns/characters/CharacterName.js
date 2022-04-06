/* eslint-disable react/prop-types */
import React from 'react';

export default () => ({
	Header: 'Character Name',
	accessor: (row) => ({
		characterName: row.characterName,
		isOnHiatus: row.isOnHiatus
	}),
	Cell: ({ value }) => (
		<span className={value.isOnHiatus ? 'text-muted' : ''}>
			{value.characterName ? value.characterName : 'Unnamed Character'}
		</span>
	),
	disableFilters: true,
	sortType: (rowA, rowB) => {
		const aName = rowA.original.characterName ?? '';
		const bName = rowB.original.characterName ?? '';
		const result = aName.localeCompare(bName, undefined, {
			sensitivity: 'accent'
		});
		return result;
	}
});
