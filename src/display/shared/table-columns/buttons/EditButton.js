import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (title) => ({
	id: columns.EDIT_BUTTON.key,
	maxWidth: 50,
	Cell: () => (
		<div className="icon-column">
			<FontAwesomeIcon title={title} icon={['fas', 'edit']} />
		</div>
	)
});
