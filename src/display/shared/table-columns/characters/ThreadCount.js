/* eslint-disable react/prop-types */
import React from 'react';

export default (threadCounts) => ({
	id: 'threadCount',
	Header: 'Thread Count',
	accessor: (row) => ({
		threadCount: threadCounts[row.characterId],
		isOnHiatus: row.isOnHiatus
	}),
	Cell: ({ value }) => {
		const content = value.isOnHiatus ? '-' : value.threadCount;
		return <span className={value.isOnHiatus ? 'text-muted' : ''}>{content}</span>;
	},
	sortType: (rowA, rowB) => {
		const a = threadCounts[rowA.original.characterId] ?? 0;
		const b = threadCounts[rowB.original.characterId] ?? 0;
		return a - b;
	}
});
