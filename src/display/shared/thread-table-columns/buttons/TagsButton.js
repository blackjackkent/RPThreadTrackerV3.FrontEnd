import React from 'react';

export default () => ({
	expander: true,
	width: 30,
	Expander: () => (
		<div>
			<i className="fas fa-info-circle" />
		</div>
	),
	style: {
		cursor: 'pointer',
		textAlign: 'center',
		userSelect: 'none'
	},
	sortable: false,
	resizable: false,
	filterable: false
});
