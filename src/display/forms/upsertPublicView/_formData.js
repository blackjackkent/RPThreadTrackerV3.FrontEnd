import React from 'react';

export default {
	name: {
		helpMessage: (
			<span>
				For your own use; a name that will help you remember{' '}
				what this view contains.
			</span>
		)
	},
	slug: {
		helpMessage: (
			<span>
				The unique URL identifier for this public view.
			</span>
		),
		tooltip: (
			<span>Will be rendered as <em>http://www.rpthreadtracker.com/public/<strong>{'{'}slug{'}'}</strong></em>.</span>
		)
	},
	columns: {
		helpMessage: (
			<span>
				Which columns should be displayed to visitors in this public view.
			</span>
		),
		tooltip: (
			<span>Ctrl-click or shift-click to select multiple columns.</span>
		)
	}
};
