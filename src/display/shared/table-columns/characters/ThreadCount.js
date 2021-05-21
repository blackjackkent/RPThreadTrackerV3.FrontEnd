import React from 'react';

export default (threadCounts) => ({
	id: 'threadCount',
	Header: 'Thread Count',
	accessor: (row) => threadCounts[row.characterId],
	Cell: (row) => (
		<span className={row.original.isOnHiatus ? 'text-muted' : ''}>
			{row.value ? row.value : 0}
		</span>
	),
	width: 150
});
