import React from 'react';
import Moment from 'react-moment';

const getColumns = () => [
	{
		expander: true,
		width: 30,
		Expander: () =>
			(
				<div>
					<i className="fas fa-tags" />
				</div>
			),
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	},
	{
		id: 'deleteButton',
		Cell: () => (
			<span>
				<i title="Untrack Thread" className="fas fa-trash-alt" />
			</span>
		),
		width: 30,
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	},
	{
		id: 'editButton',
		Cell: () => (
			<span>
				<i title="Edit Thread" className="fas fa-edit" />
			</span>
		),
		width: 30,
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	},
	{
		id: 'archiveButton',
		Cell: () => (
			<span>
				<i title="Archive Thread" className="fas fa-lock" />
			</span>
		),
		width: 30,
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	},
	{
		id: 'queueButton',
		Cell: () => (
			<span>
				<i title="Mark Thread Queued" className="fas fa-clock" />
			</span>
		),
		width: 30,
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	},
	{
		Header: 'Thread Title',
		accessor: 'thread.userTitle',
		minWidth: 200
	},
	{
		Header: 'Character',
		accessor: 'thread.character.urlIdentifier',
		Cell: row => <span>{row.value} {row.original.thread.character.characterName && `(${row.original.thread.character.characterName})`}</span>,
		minWidth: 250
	},
	{
		Header: 'Last Poster',
		accessor: 'status.LastPosterUrlIdentifier',
		Cell: row => (
			<span>
				{row.value &&
					<a
						target="_blank"
						href={row.original.status && row.original.status.LastPostUrl}
					>
						{row.value} <i className="fas fa-external-link-alt" />
					</a>
				}
			</span>
		),
		minWidth: 250,
		filterable: false
	},
	{
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
	},
	{
		Header: 'Tracked Partner',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		minWidth: 200,
		filterable: false
	}
];
export default getColumns;
