import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default (username) => ({
	Header: 'View Slug',
	accessor: 'slug',
	// eslint-disable-next-line react/prop-types
	Cell: ({ value }) => (
		<a
			href={`/public/${encodeURIComponent(username)}/${value}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{value} <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
		</a>
	)
});
