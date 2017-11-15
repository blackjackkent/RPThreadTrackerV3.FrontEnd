import React from 'react';
import Moment from 'react-moment';
export default [{
	Header: 'Thread Title',
	accessor: 'userTitle' // String-based value accessors!
}, {
	Header: 'Last Poster',
	accessor: 'lastPosterUrlIdentifier',
	Cell: row => <a href={row.original.lastPostUrl}> {row.value} </a>
}, {
	Header: 'Last Post Date',
	accessor: 'lastPostDate',
	Cell: row => <Moment format="MMMM D, YYYY h:mmA">{row.value}</Moment>
}];
