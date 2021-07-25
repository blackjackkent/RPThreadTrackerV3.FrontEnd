/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';
import LastPosterFilter from '../../table-filters/LastPosterFilter';

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
						{value} <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
					</a>
				)}
			</span>
		);
	},
	disableFilters: !includeFilter,
	Filter: LastPosterFilter(lastPosters)
});
