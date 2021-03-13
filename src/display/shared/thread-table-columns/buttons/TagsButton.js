import React from 'react';
import columns from '~/infrastructure/constants/columns';

export default () => ({
	id: columns.EXPANDER.key,
	expander: true,
	width: 30,
	Cell: ({ row }) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div {...row.getToggleRowExpandedProps()}>
			<i className="fas fa-info-circle" />
		</div>
	),
	style: {
		cursor: 'pointer',
		textAlign: 'center',
		userSelect: 'none'
	},
	sortable: false,
	resizable: false,
	filterable: false
});
