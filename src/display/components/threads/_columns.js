import React from 'react';
import Moment from 'react-moment';
export default [
	{
		Header: 'Thread Title',
		accessor: 'userTitle', // String-based value accessors!,
	}, {
		Header: 'Character ID',
		accessor: 'characterId', // String-based value accessors!,
	}, {
		Header: 'Last Poster',
		accessor: 'lastPosterUrlIdentifier',
		Cell: row => <a href={row.original.lastPostUrl}> {row.value} </a>,
		width: 150,
		filterable: false
	}, {
		Header: 'Last Post Date',
		accessor: 'lastPostDate',
		Cell: row => <Moment format="MMMM D, YYYY h:mmA">{row.value}</Moment>,
		width: 200,
		filterable: false
	}, {
		Header: "Watched Shortname",
		accessor: "trackedUserUrlIdentifier",
		Cell: row => <a href={row.original.lastPostUrl}> {row.value} </a>,
		width: 150,
		filterable: false
	}, {
		expander: true,
		width: 65,
		Expander: ({ isExpanded, ...rest }) =>
			<div>
				<i className="fa fa-cog" />
			</div>,
		style: {
			cursor: "pointer",
			textAlign: "center",
			userSelect: "none"
		}
	}
];
