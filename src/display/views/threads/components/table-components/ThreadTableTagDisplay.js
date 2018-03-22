import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ThreadTableTagDisplay = (props) => {
	const { tags } = props;
	const rows = [];
	if (tags) {
		for (let i = 0; i < tags.length; i++) {
			const element = (
				<span
					className="tag-display-wrapper"
					key={tags[i].threadTagId}
				>
					#{tags[i].tagText}
				</span>);
			rows.push(element);
		}
	}
	return (
		<div className="thread-table-tag-display">
			{rows}
		</div>
	);
};

ThreadTableTagDisplay.propTypes = propTypes;

export default ThreadTableTagDisplay;
