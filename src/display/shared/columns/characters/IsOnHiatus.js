import React from 'react';

export default () => ({
	Header: 'Status',
	accessor: 'isOnHiatus',
	Cell: (row) => (
		<span className={row.value ? 'text-muted' : ''}>{row.value ? 'On Hiatus' : 'Active'}</span>
	)
});
