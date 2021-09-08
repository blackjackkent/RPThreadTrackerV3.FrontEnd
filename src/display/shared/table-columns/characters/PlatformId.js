/* eslint-disable react/prop-types */
import React from 'react';
import platforms from '../../../../infrastructure/constants/platforms';

export default () => ({
	Header: 'Platform',
	accessor: (row) => ({
		platformId: row.platformId,
		isOnHiatus: row.isOnHiatus
	}),
	Cell: ({ value }) => (
		<span className={value.isOnHiatus ? 'text-muted' : ''}>{platforms[value.platformId]}</span>
	)
});
