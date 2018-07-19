import React from 'react';

export default title => ({
	id: 'deleteButton',
	Cell: () => (
		<span>
			<i title={title} className="fas fa-trash-alt" />
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
