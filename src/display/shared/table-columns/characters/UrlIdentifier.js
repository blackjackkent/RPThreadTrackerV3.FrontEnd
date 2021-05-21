import React from 'react';

export default () => ({
	Header: 'URL Identifier',
	accessor: 'urlIdentifier',
	Cell: (row) => (
		<a className={row.original.isOnHiatus ? 'text-muted' : ''} href={row.original.homeUrl}>
			{row.value}
		</a>
	)
});
