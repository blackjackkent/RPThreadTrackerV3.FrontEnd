import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	description: PropTypes.string,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			threadTagId: PropTypes.string,
			tagText: PropTypes.string
		})
	).isRequired
};
const defaultProps = {
	description: ''
};

const ThreadTableSubComponent = (props) => {
	const { tags, description } = props;
	const rows = [];
	if (tags && tags.length) {
		for (let i = 0; i < tags.length; i++) {
			const element = (
				<span className="tag-display-wrapper" key={tags[i].threadTagId}>
					#{tags[i].tagText}
				</span>
			);
			rows.push(element);
		}
	} else {
		rows.push(
			<span key="-1" className="tag-display-wrapper">
				There are no tags assigned to this thread.
			</span>
		);
	}
	return (
		<div className="thread-table-sub-component">
			{description && (
				<div className="thread-table-description-display">
					{description} <hr />
				</div>
			)}
			<div className="thread-table-tag-display">{rows}</div>
		</div>
	);
};

ThreadTableSubComponent.propTypes = propTypes;
ThreadTableSubComponent.defaultProps = defaultProps;
export default ThreadTableSubComponent;
