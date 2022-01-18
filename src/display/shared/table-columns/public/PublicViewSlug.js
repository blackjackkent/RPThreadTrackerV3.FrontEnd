import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			{row.value} <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
		</a>
	)
});
