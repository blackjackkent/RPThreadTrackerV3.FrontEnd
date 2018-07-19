import React from 'react';

export default () => ({
	id: 'toggleHiatusButton',
	Cell: row => (
		<span>
			<i title={`${row.original.isOnHiatus ? 'Remove from Hiatus' : 'Set On Hiatus'}`} className="fas fa-power-off" />
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
