import React from 'react';
import Moment from 'react-moment';

const getColumns = (characters, partners, lastPosters) => [
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
		},
		sortable: false,
		resizable: false,
		filterable: false
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
		},
		sortable: false,
		resizable: false,
		filterable: false
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
		},
		sortable: false,
		resizable: false,
		filterable: false
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
		},
		sortable: false,
		resizable: false,
		filterable: false
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
		},
		sortable: false,
		resizable: false,
		filterable: false
	},
	{
		Header: 'Thread Title',
		accessor: 'thread.userTitle',
		minWidth: 200,
		sortable: true,
		resizable: true,
		filterable: true
	},
	{
		Header: 'Character',
		accessor: 'thread.character.urlIdentifier',
		Cell: row => <span>{row.value} {row.original.thread.character.characterName && `(${row.original.thread.character.characterName})`}</span>,
		minWidth: 250,
		sortable: true,
		resizable: true,
		filterable: true,
		// eslint-disable-next-line react/prop-types
		Filter: ({ filter, onChange }) => (
			<select
				onChange={event => onChange(event.target.value)}
				style={{ width: '100%' }}
				value={filter ? filter.value : ''}
			>
				<option value="">Show All</option>
				{characters.map(character => <option key={character.characterId} value={character.urlIdentifier}>{character.urlIdentifier} {character.characterName && `(${character.characterName})`}</option>)}
			</select>
		)
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
		sortable: true,
		resizable: true,
		filterable: true,
		// eslint-disable-next-line react/prop-types
		Filter: ({ filter, onChange }) => (
			<select
				onChange={event => onChange(event.target.value)}
				style={{ width: '100%' }}
				value={filter ? filter.value : ''}
			>
				<option value="">Show All</option>
				{lastPosters.map(lp => <option key={lp} value={lp}>{lp}</option>)}
			</select>
		)
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
		sortable: true,
		resizable: true,
		filterable: true,
		// eslint-disable-next-line react/prop-types
		Filter: ({ filter, onChange }) => (
			<select
				onChange={event => onChange(event.target.value)}
				style={{ width: '100%' }}
				value={filter ? filter.value : ''}
			>
				<option value="">Show All</option>
				{partners.map(p => <option key={p} value={p}>{p}</option>)}
			</select>
		)
	}
];
export default getColumns;
