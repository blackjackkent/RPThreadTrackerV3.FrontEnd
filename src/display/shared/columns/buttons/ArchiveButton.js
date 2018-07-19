import React from 'react';

export default isArchivePage => ({
	id: 'archiveButton',
	Cell: () => (
		<span>
			<i title={isArchivePage ? 'Unarchive Thread' : 'Archive Thread'} className="fas fa-lock" />
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
