import React from 'react';
import Moment from 'react-moment';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.DATE_QUEUED.name,
	accessor: columns.DATE_QUEUED.key,
	Cell: (row) => (
		<Moment format="MMMM D, YYYY h:mmA">
			{new Date(row.original.thread.dateMarkedQueued)}
		</Moment>
	),
	minWidth: 200,
	filterable: false
});
