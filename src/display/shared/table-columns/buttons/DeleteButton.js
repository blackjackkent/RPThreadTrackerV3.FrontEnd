import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (title) => ({
	id: columns.DELETE_BUTTON.key,
	Cell: () => (
		<span>
			<FontAwesomeIcon title={title} icon={['fas', 'trash-alt']} />
		</span>
	),
	width: 30,
	style: {
		cursor: 'pointer',
		textAlign: 'center',
		userSelect: 'none'
	},
	sortable: false,
	resizable: false,
	filterable: false
});
