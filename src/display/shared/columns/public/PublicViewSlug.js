import React from 'react';

export default () => ({
	Header: 'View Slug',
	accessor: 'slug',
	Cell: row => (
		<a href={row.original.url} target="_blank" rel="noopener noreferrer">
			{row.value}
			<i className="fas fa-external-link-alt" />
		</a>)
});
