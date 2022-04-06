import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (title) => ({
	id: columns.DELETE_BUTTON.key,
	Cell: () => (
		<div className="icon-column text-danger">
			<FontAwesomeIcon title={title} icon={['fas', 'trash-alt']} />
		</div>
	)
});
