import React from 'react';
import Moment from 'react-moment';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.DATE_QUEUED.name,
	accessor: columns.DATE_QUEUED.key,
	Cell: ({ value }) => <Moment format="MMMM D, YYYY h:mmA">{new Date(value)}</Moment>,
	minWidth: 200,
	filterable: false
});
