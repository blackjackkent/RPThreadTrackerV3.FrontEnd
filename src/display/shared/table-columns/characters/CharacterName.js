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
	)
});
