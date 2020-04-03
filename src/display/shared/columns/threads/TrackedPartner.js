/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (partners, includeFilter) => ({
	Header: columns.TRACKED_PARTNER.name,
	accessor: columns.TRACKED_PARTNER.key,
	Cell: (row) => <span>{row.value ? row.value : ''}</span>,
	minWidth: 200,
	sortable: true,
	resizable: true,
	filterable: includeFilter,
	// eslint-disable-next-line react/prop-types
	Filter: ({ filter, onChange }) => (
		<select
			onChange={(event) => onChange(event.target.value)}
			style={{
				width: '100%'
			}}
			value={filter ? filter.value : ''}
		>
			<option value="">Show All</option>
			{partners.sort().map((p) => (
				<option key={p} value={p}>
					{p}
				</option>
			))}
		</select>
	)
});
