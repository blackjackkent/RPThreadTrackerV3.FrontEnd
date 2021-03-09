import React from 'react';
import Moment from 'react-moment';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.LAST_POST_DATE.name,
	accessor: columns.LAST_POST_DATE.key,
	Cell: (row) => {
		if (!row.original.status) {
			return <span>Awaiting Starter</span>;
		}
		return row.original.status.lastPostDate ? (
			<Moment format="MMMM D, YYYY h:mmA">{row.original.status.lastPostDate}</Moment>
		) : (
			<span>Post Not Found</span>
		);
	},
	minWidth: 200,
	filterable: false
});
