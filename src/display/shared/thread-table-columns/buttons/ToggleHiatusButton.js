import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	id: columns.TOGGLE_HIATUS_BUTTON.key,
	Cell: (row) => (
		<span>
			<i
				title={`${row.original.isOnHiatus ? 'Remove From Hiatus' : 'Set On Hiatus'}`}
				className="fas fa-power-off"
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
