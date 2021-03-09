// #region imports
import React from 'react';
import PropTypes from 'prop-types';
// #endregion imports

const propTypes = {
	threadData: PropTypes.shape({
		status: PropTypes.shape({
			lastPostUrl: PropTypes.string,
			lastPosterUrlIdentifier: PropTypes.string
		}),
		thread: PropTypes.shape({
			userTitle: PropTypes.string,
			postId: PropTypes.string
		})
	}).isRequired
};

const RandomThreadDisplay = (props) => {
	const { threadData } = props;
	if (!threadData?.thread) {
		return (
			<div className="random-thread-result" data-spec="random-thread-result">
				<p>Pick a random thread to respond to!</p>
			</div>
		);
	}
	return (
		<div className="random-thread-result" data-spec="random-thread-result">
			{threadData.status && (
				<div>
					<p data-spec="random-thread-title">
						<a href={threadData.status.lastPostUrl}>
							{threadData.thread.userTitle} <i className="fas fa-external-link-alt" />
						</a>
					</p>
					<div className="small" data-spec="random-thread-subtitle">
						Last Post by{' '}
						<a href={threadData.status.lastPostUrl}>
							{threadData.status.lastPosterUrlIdentifier}
						</a>
					</div>
				</div>
			)}
			{!threadData.status && (
				<div>
					<p data-spec="random-thread-title">{threadData.thread.userTitle}</p>
					<div className="small" data-spec="random-thread-subtitle">
						Awaiting Starter
					</div>
				</div>
			)}
		</div>
	);
};

RandomThreadDisplay.propTypes = propTypes;
export default RandomThreadDisplay;
