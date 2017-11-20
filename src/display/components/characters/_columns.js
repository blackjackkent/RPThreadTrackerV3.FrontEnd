import React from 'react';
import Moment from 'react-moment';

export default [
	{
		Header: 'Character Name',
		accessor: 'characterName',
		Cell: row => <span>{row.value ? row.value : 'Unnamed Character'}</span>
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
