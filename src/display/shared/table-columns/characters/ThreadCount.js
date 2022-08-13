/* eslint-disable react/prop-types */
import React from 'react';

export default (threadCounts) => ({
	id: 'threadCount',
	Header: 'Thread Count',
	accessor: (row) => ({
		threadCount: threadCounts[row.characterId],
		isOnHiatus: row.isOnHiatus
	}),
	Cell: ({ value }) => (
		<span className={value.isOnHiatus ? 'text-muted' : ''}>
			{value.threadCount ? value.threadCount : 0}
		</span>
	),
	sortType: (rowA, rowB) => {
		const a = threadCounts[rowA.original.characterId] ?? 0;
		const b = threadCounts[rowB.original.characterId] ?? 0;
		return a - b;
	}
});
