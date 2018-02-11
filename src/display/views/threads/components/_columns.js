import React from 'react';
import Moment from 'react-moment';

export default [
	{
		expander: true,
		width: 65,
		Expander: () =>
			(
				<div>
					<i className="fa fa-cog" />
				</div>
			),
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	}, {
		Header: 'Thread Title',
		accessor: 'thread.userTitle'
	}, {
		Header: 'Last Poster',
		accessor: 'status',
		Cell: row => <a href={row.value && row.value.LastPostUrl}> {row.value && row.value.LastPosterUrlIdentifier} </a>,
		width: 150,
		filterable: false
	}, {
		Header: 'Last Post Date',
		accessor: 'status',
		Cell: (row) => {
			if (!row.value) {
				return (<span>Awaiting Starter</span>);
			}
			return row.value.LastPostDate ? (<Moment format="MMMM D, YYYY h:mmA">{row.value.LastPostDate}</Moment>) : (<span>Post Not Found</span>);
		},
		width: 200,
		filterable: false
	}, {
		Header: 'Watched Shortname',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : '' }</span>,
		width: 200,
		filterable: false
	}
];
