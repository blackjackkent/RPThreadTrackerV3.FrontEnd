/* eslint-disable react/prop-types */
import React from 'react';

export default () => ({
	Header: 'URL Identifier',
	accessor: (row) => ({
		isOnHiatus: row.isOnHiatus,
		urlIdentifier: row.urlIdentifier,
		homeUrl: row.homeUrl
	}),
	Cell: ({ value }) => (
		<a className={value.isOnHiatus ? 'text-muted' : ''} href={value.homeUrl}>
			{value.urlIdentifier}
		</a>
	)
});
