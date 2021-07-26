import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '~/infrastructure/constants/columns';

export default () => ({
	id: columns.EXPANDER.key,
	expander: true,
	/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
	Cell: ({ row }) => (
		<div {...row.getToggleRowExpandedProps()} className="icon-column">
			{row.isExpanded && <FontAwesomeIcon icon={['fas', 'chevron-down']} />}
			{!row.isExpanded && <FontAwesomeIcon icon={['fas', 'chevron-right']} />}
		</div>
	)
	/* eslint-enable react/jsx-props-no-spreading, react/prop-types */
});
