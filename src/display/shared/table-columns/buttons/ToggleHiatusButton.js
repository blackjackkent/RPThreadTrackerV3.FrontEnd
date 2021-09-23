/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	id: columns.TOGGLE_HIATUS_BUTTON.key,
	Cell: ({ row }) => (
		<div className="icon-column">
			<FontAwesomeIcon
				title={`${row.original.isOnHiatus ? 'Remove From Hiatus' : 'Set On Hiatus'}`}
				icon={['fas', 'power-off']}
			/>
		</div>
	)
});
