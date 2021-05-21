import React from 'react';
import columns from '../../../../infrastructure/constants/columns';

export default (isArchivePage) => ({
	id: columns.ARCHIVE_BUTTON.key,
	Cell: () => (
		<span>
			<i
				title={isArchivePage ? 'Unarchive Thread' : 'Archive Thread'}
				className={isArchivePage ? 'fas fa-unlock' : 'fas fa-lock'}
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
