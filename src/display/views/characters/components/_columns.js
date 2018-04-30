import React from 'react';
import platforms from '../../../../infrastructure/constants/platforms';

export default [
	{
		id: 'editButton',
		Cell: row => (
			<span className={row.original.isOnHiatus ? 'text-muted' : ''}>
				<i title="Edit Character" className="fas fa-edit" />
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
		id: 'toggleHiatusButton',
		Cell: row => (
			<span className={row.original.isOnHiatus ? 'text-muted' : ''}>
				<i title={`${row.original.isOnHiatus ? 'Remove from Hiatus' : 'Set On Hiatus'}`} className="fas fa-power-off" />
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
		id: 'untrackButton',
		Cell: row => (
			<span className={row.original.isOnHiatus ? 'text-muted' : ''}>
				<i title="Untrack Character" className="fas fa-trash-alt" />
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
		Header: 'Character Name',
		accessor: 'characterName',
		Cell: row => <span className={row.original.isOnHiatus ? 'text-muted' : ''}>{row.value ? row.value : 'Unnamed Character'}</span>
	}, {
		Header: 'URL Identifier',
		accessor: 'urlIdentifier',
		Cell: row => <a className={row.original.isOnHiatus ? 'text-muted' : ''} href={row.original.homeUrl}> {row.value} </a>
	}, {
		Header: 'Platform',
		accessor: 'platformId',
		Cell: row => <span className={row.original.isOnHiatus ? 'text-muted' : ''}>{platforms[row.value]}</span>
	}, {
		Header: 'Status',
		accessor: 'isOnHiatus',
		Cell: row => <span className={row.original.isOnHiatus ? 'text-muted' : ''}> {row.value ? 'On Hiatus' : 'Active'} </span>
	}
];
