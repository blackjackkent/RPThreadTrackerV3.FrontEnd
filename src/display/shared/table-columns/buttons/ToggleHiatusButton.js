/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	id: columns.TOGGLE_HIATUS_BUTTON.key,
	Cell: ({ row }) => (
		<span>
			<i
				title={`${row.original.isOnHiatus ? 'Remove From Hiatus' : 'Set On Hiatus'}`}
				className="fas fa-power-off"
			/>
		</span>
	),
	width: 30,
	sortable: false,
	resizable: false,
	filterable: false
});
