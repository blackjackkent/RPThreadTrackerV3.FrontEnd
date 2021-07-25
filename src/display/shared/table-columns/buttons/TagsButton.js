import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '~/infrastructure/constants/columns';

export default () => ({
	id: columns.EXPANDER.key,
	expander: true,
	width: 30,
	/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
	Cell: ({ row }) => (
		<div {...row.getToggleRowExpandedProps()}>
			{row.isExpanded && <FontAwesomeIcon icon={['fas', 'chevron-down']} />}
			{!row.isExpanded && <FontAwesomeIcon icon={['fas', 'chevron-right']} />}
		</div>
	),
	/* eslint-enable react/jsx-props-no-spreading, react/prop-types */
	style: {
		cursor: 'pointer',
		textAlign: 'center',
		userSelect: 'none'
	},
	sortable: false,
	resizable: false,
	filterable: false
});
