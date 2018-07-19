import React from 'react';

export default isQueuePage => ({
	id: 'queueButton',
	Cell: () => (
		<span>
			<i title={isQueuePage ? 'Unmark Thread Queued' : 'Mark Thread Queued'} className="fas fa-clock" />
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
