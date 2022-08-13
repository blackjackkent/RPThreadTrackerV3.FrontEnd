import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (isArchivePage) => ({
	id: columns.ARCHIVE_BUTTON.key,
	Cell: () => (
		<div className="icon-column">
			<FontAwesomeIcon
				title={isArchivePage ? 'Unarchive Thread' : 'Archive Thread'}
				icon={['fas', isArchivePage ? 'unlock' : 'lock']}
			/>
		</div>
	)
});
