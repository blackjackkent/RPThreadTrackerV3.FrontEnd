import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

const getColumns = (characters, partners) => [
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
				<i title="Unarchive Thread" className="fas fa-unlock" />
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
	}, {
		Header: columns.THREAD_TITLE.name,
		accessor: columns.THREAD_TITLE.key,
		Cell: row => (
			<a
				target="_blank"
				href={row.original.thread && row.original.thread.threadHomeUrl}
			>
				{row.value} <i className="fas fa-external-link-alt" />
			</a>
		),
		minWidth: 200,
		sortable: true,
		resizable: true,
		filterable: true
	}, {
		Header: columns.CHARACTER.name,
		accessor: columns.CHARACTER.key,
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
	}, {
		Header: columns.TRACKED_PARTNER.name,
		accessor: columns.TRACKED_PARTNER.key,
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		minWidth: 200,
		filterable: false,
		sortable: true,
		resizable: true,
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
