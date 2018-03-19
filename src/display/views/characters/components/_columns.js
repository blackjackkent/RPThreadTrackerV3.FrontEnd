import React from 'react';
import platforms from '../../../../infrastructure/constants/platforms';

export default [
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
	},
	{
		Header: 'Character Name',
		accessor: 'characterName',
		Cell: row => <span className={row.original.isOnHiatus ? 'text-muted' : ''}>{row.value ? row.value : 'Unnamed Character'}</span>
	}, {
		Header: 'URL Identifier',
		accessor: 'urlIdentifier',
		Cell: row => <a href={row.original.homeUrl}> {row.value} </a>
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
