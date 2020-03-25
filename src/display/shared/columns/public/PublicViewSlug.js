import React from 'react';

export default (username) => ({
	Header: 'View Slug',
	accessor: 'slug',
	Cell: (row) => (
		<a
			href={`/public/${encodeURIComponent(username)}/${row.value}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{row.value}
			<i className="fas fa-external-link-alt" />
		</a>
	)
});
