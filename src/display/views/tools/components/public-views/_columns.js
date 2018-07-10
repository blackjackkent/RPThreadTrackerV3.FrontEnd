import React from 'react';

export default [
	{
		id: 'editButton',
		Cell: () => (
			<span>
				<i title="Edit Public View" className="fas fa-edit" />
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
		id: 'deleteButton',
		Cell: () => (
			<span>
				<i title="Delete Public View" className="fas fa-trash-alt" />
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
		Header: 'View Name',
		accessor: 'name'
	}, {
		Header: 'View Slug',
		accessor: 'slug',
		Cell: row => (
			<a href={row.original.url} target="_blank" rel="noopener noreferrer">
				{row.value}
				<i className="fas fa-external-link-alt" />
			</a>)
	}
];
