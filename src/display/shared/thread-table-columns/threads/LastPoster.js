/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

const stopPropagation = (e) => e.stopPropagation();

export default (lastPosters, includeFilter) => ({
	Header: columns.LAST_POSTER.name,
	accessor: columns.LAST_POSTER.key,
	Cell: ({ row, value }) => {
		return (
			<span>
				{value && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={row.original.status && row.original.status.lastPostUrl}
					>
						{value} <i className="fas fa-external-link-alt" />
					</a>
				)}
			</span>
		);
	},
	disableFilters: !includeFilter,
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
