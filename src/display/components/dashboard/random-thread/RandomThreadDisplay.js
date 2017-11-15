import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	thread: PropTypes.shape({}).isRequired
};

const RandomThreadDisplay = (props) => {
	const { thread } = props;
	if (!thread.userTitle) {
		return (
			<div className="random-thread-result">
				<p>Pick a random thread to respond to!</p>
			</div>
		);
	}
	return (
		<div className="random-thread-result">
			<div>
				<a href={thread.lastPostUrl}>
					{thread.userTitle}
					<i className="fa fa-external-link" />
				</a>
			</div>
			<div className="small ">
				Last Post by <a href={thread.lastPostUrl}>{thread.lastPosterUrlIdentifier}</a>
			</div>
		</div>
	);
};

RandomThreadDisplay.propTypes = propTypes;
export default RandomThreadDisplay;
