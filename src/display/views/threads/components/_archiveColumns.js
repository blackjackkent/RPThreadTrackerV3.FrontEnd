import React from 'react';

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
				<i title="Unarchive Thread" className="fas fa-unlock" />
			</span>
		),
		width: 30,
		style: {
			cursor: 'pointer',
			textAlign: 'center',
			userSelect: 'none'
		}
	}, {
		Header: 'Thread Title',
		accessor: 'thread.userTitle',
		Cell: row => (
			<a
				target="_blank"
				href={row.original.thread && row.original.thread.threadHomeUrl}
			>
				{row.value} <i className="fas fa-external-link-alt" />
			</a>
		),
		minWidth: 200
	}, {
		Header: 'Character',
		accessor: 'thread.character.urlIdentifier',
		Cell: row => <span>{row.value} {row.original.thread.character.characterName && `(${row.original.thread.character.characterName})`}</span>,
		minWidth: 250
	}, {
		Header: 'Tracked Partner',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		minWidth: 200,
		filterable: false
	}
];
export default getColumns;
