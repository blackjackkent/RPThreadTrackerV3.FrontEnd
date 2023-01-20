/* eslint-disable react/prop-types */
import React from 'react';
import { DateTime } from 'luxon';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.LAST_POST_DATE.name,
	accessor: columns.LAST_POST_DATE.key,
	Cell: ({ row }) => {
		if (!row.original.status) {
			return <span>Awaiting Starter</span>;
		}
		return row.original.status.lastPostDate ? (
			DateTime.fromISO(row.original.status.lastPostDate).toFormat('ff')
		) : (
			<span>Post Not Found</span>
		);
	},
	disableFilters: true,
	sortDescFirst: true
});
