import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (isQueuePage) => ({
	id: columns.QUEUE_BUTTON.key,
	Cell: () => (
		<div className="icon-column">
			<FontAwesomeIcon
				title={isQueuePage ? 'Unmark Thread Queued' : 'Mark Thread Queued'}
				icon={['fas', 'clock']}
			/>
		</div>
	)
});
