import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (includeFilter) => ({
	Header: columns.THREAD_TITLE.name,
	accessor: columns.THREAD_TITLE.key,
	Cell: (row) => <span title={row.value}>{row.value}</span>,
	minWidth: 200,
	sortable: true,
	resizable: true,
	filterable: includeFilter
});
