import React from 'react';

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
		Header: 'Tracked Partner',
		accessor: 'thread.partnerUrlIdentifier',
		Cell: row => <span>{row.value ? row.value : ''}</span>,
		minWidth: 200,
		filterable: false
	}
];
export default getColumns;
