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
		Header: 'Character',
		accessor: 'thread.character',
		Cell: row => <span>{row.value.characterName || row.value.urlIdentifier}</span>
	}, {
		Header: 'Last Poster',
		accessor: 'status.LastPosterUrlIdentifier',
		Cell: row => <a href={row.original.status && row.original.status.LastPostUrl}> {row.value} </a>,
		width: 150,
		filterable: false
	}, {
		Header: 'Last Post Date',
		accessor: 'status.LastPostDate',
		Cell: (row) => {
			if (!row.original.status) {
				return (<span>Awaiting Starter</span>);
			}
			return row.original.status.LastPostDate ? (<Moment format="MMMM D, YYYY h:mmA">{row.original.status.LastPostDate}</Moment>) : (<span>Post Not Found</span>);
		},
		width: 200,
		filterable: false
	}, {
		Header: 'Watched Shortname',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		width: 200,
		filterable: false
	}
];
