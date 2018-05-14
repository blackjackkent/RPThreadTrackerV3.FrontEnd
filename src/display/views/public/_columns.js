import React from 'react';
import Moment from 'react-moment';
import columnTypes from '../../../infrastructure/constants/columns';

const getColumns = (columnIds) => {
	const result = [];
	if (!columnIds) {
		return result;
	}
	if (columnIds.includes(columnTypes.THREAD_TITLE.key)) {
		result.push({
			Header: columnTypes.THREAD_TITLE.name,
			accessor: columnTypes.THREAD_TITLE.key,
			minWidth: 200
		});
	}
	if (columnIds.includes(columnTypes.CHARACTER.key)) {
		result.push({
			Header: columnTypes.CHARACTER.name,
			accessor: columnTypes.CHARACTER.key,
			Cell: row => <span>{row.value} {row.original.thread.character.characterName && `(${row.original.thread.character.characterName})`}</span>,
			minWidth: 250
		});
	}
	if (columnIds.includes(columnTypes.LAST_POSTER.key)) {
		result.push({
			Header: columnTypes.LAST_POSTER.name,
			accessor: columnTypes.LAST_POSTER.key,
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
			filterable: false
		});
	}
	if (columnIds.includes(columnTypes.LAST_POST_DATE.key)) {
		result.push({
			Header: columnTypes.LAST_POST_DATE.name,
			accessor: columnTypes.LAST_POST_DATE.key,
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
		});
	}
	if (columnIds.includes(columnTypes.TRACKED_PARTNER.key)) {
		result.push({
			Header: columnTypes.TRACKED_PARTNER.name,
			accessor: columnTypes.TRACKED_PARTNER.key,
			Cell: row => <span>{row.value ? row.value : ''}</span>,
			minWidth: 200,
			filterable: false
		});
	}
	return result;
};
export default getColumns;
