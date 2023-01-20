import React from 'react';

export default {
	name: {
		helpMessage: (
			<span>
				For your own use; a name that will help you remember what this view contains.
			</span>
		)
	},
	slug: {
		helpMessage: <span>The unique URL identifier for this public view.</span>,
		tooltip: (
			<span>
				Will be rendered as{' '}
				<em>
					http://www.rpthreadtracker.com/public/{'{'}your-username
					{'}'}/
					<strong>
						{'{'}slug{'}'}
					</strong>
				</em>
				.
			</span>
		)
	},
	columns: {
		helpMessage: <span>Which columns should be displayed to visitors in this public view.</span>
	},
	characterIds: {
		helpMessage: (
			<span>
				The characters whose threads should be displayed to visitors in this public view.
				(Leave unselected to display threads for all characters.)
			</span>
		)
	},
	tags: {
		helpMessage: (
			<span>
				The public view will only include threads with these tags. (Leave unselected to
				display threads with all tags.)
			</span>
		)
	}
};
