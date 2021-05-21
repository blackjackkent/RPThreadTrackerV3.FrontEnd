import React from 'react';
import platforms from '../../../../infrastructure/constants/platforms';

export default () => ({
	Header: 'Platform',
	accessor: 'platformId',
	Cell: (row) => (
		<span className={row.original.isOnHiatus ? 'text-muted' : ''}>{platforms[row.value]}</span>
	)
});
