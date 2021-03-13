/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

const stopPropagation = (e) => e.stopPropagation();

export default (lastPosters, includeFilter) => ({
	Header: columns.LAST_POSTER.name,
	accessor: columns.LAST_POSTER.key,
	Cell: ({ row }) => {
		return (
			<span>
				{row.value && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={row.original.status && row.original.status.lastPostUrl}
					>
						{row.original.status.lastPosterUrlIdentifier}{' '}
						<i className="fas fa-external-link-alt" />
					</a>
				)}
			</span>
		);
	},
	minWidth: 250,
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
			{lastPosters.sort().map((lp) => (
				<option key={lp} value={lp}>
					{lp}
				</option>
			))}
		</select>
	)
});
