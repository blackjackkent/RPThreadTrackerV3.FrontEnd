import React from 'react';
import Moment from 'react-moment';

const getColumns = () => [
	{
		expander: true,
		width: 65,
		Expander: () =>
			(
				<div>
					<i className="fas fa-cog" />
				</div>
			),
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	}, {
		Header: 'Thread Title',
		accessor: 'thread.userTitle',
		minWidth: 200
	}, {
		Header: 'Character',
		accessor: 'thread.character.urlIdentifier',
		Cell: row => <span>{row.value} {row.original.thread.character.characterName && `(${row.original.thread.character.characterName})`}</span>,
		minWidth: 250
	}, {
		Header: 'Last Poster',
		accessor: 'status.LastPosterUrlIdentifier',
		Cell: row => <a href={row.original.status && row.original.status.LastPostUrl}> {row.value} </a>,
		minWidth: 250,
		filterable: false
	}, {
		Header: 'Last Post Date',
		accessor: 'status.LastPostDate',
		Cell: (row) => {
			if (!row.original.status) {
				return (<span>Awaiting Starter</span>);
			}
			return row.original.status.LastPostDate ?
				(<Moment format="MMMM D, YYYY h:mmA">{row.original.status.LastPostDate}</Moment>) :
				(<span>Post Not Found</span>);
		},
		minWidth: 200,
		filterable: false
	}, {
		Header: 'Date Queued',
		accessor: 'thread.dateMarkedQueued',
		Cell: (row) => {
			return row.original.thread.dateMarkedQueued &&
				(<Moment format="MMMM D, YYYY h:mmA">{new Date(row.original.thread.dateMarkedQueued)}</Moment>);
		},
		minWidth: 200,
		filterable: false
	}, {
		Header: 'Tracked Partner',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		minWidth: 200,
		filterable: false
	}
];
export default getColumns;
