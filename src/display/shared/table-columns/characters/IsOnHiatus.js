/* eslint-disable react/prop-types */
import React from 'react';

export default () => ({
	Header: 'Status',
	accessor: (row) => row.isOnHiatus,
	Cell: ({ value }) => (
		<span className={value ? 'text-muted' : ''}>{value ? 'On Hiatus' : 'Active'}</span>
	),
	sortType: (rowA, rowB) => {
		return rowA.original.isOnHiatus - rowB.original.isOnHiatus;
	}
});
