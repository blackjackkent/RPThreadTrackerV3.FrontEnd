import React from 'react';

export default () => ({
	Header: 'Character Name',
	accessor: 'characterName',
	Cell: (row) => (
		<span className={row.original.isOnHiatus ? 'text-muted' : ''}>
			{row.value ? row.value : 'Unnamed Character'}
		</span>
	)
});
