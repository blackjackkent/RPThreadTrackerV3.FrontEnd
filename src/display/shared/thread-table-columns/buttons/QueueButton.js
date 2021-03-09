import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (isQueuePage) => ({
	id: columns.QUEUE_BUTTON.key,
	Cell: () => (
		<span>
			<i
				title={isQueuePage ? 'Unmark Thread Queued' : 'Mark Thread Queued'}
				className="fas fa-clock"
			/>
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
