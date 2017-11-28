import React from 'react';

export default [
	{
		Header: 'Character Name',
		accessor: 'characterName',
		Cell: row => <span className={row.original.isOnHiatus ? 'text-muted' : ''}>{row.value ? row.value : 'Unnamed Character'} {row.original.isOnHiatus ? '(On Hiatus)' : ''}</span>
	}, {
		Header: 'URL Identifier',
		accessor: 'urlIdentifier',
		Cell: row => <a href={row.original.homeUrl}> {row.value} </a>
	}, {
		Header: 'Platform',
		accessor: 'platform.platformName'
	}, {
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
	}
];
