import React from 'react';

export default title => ({
	id: 'editButton',
	Cell: () => (
		<span>
			<i title={title} className="fas fa-edit" />
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
