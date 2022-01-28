// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
	})
};
const defaultProps = {
	threadData: null
};

const RandomThreadDisplay = (props) => {
	const { threadData } = props;
	if (!threadData?.thread) {
		return (
			<div className="random-thread-result">
				<p>Pick a random thread to respond to!</p>
			</div>
		);
	}
	return (
		<div className="random-thread-result">
			{threadData.status && (
				<div>
					<p>
						<a href={threadData.status.lastPostUrl}>
							{threadData.thread.userTitle}{' '}
							<FontAwesomeIcon icon={['fas', 'external-link-alt']} />
						</a>
					</p>
					<div className="small">
						Last Post by{' '}
						<a href={threadData.status.lastPostUrl}>
							{threadData.status.lastPosterUrlIdentifier}
						</a>
					</div>
				</div>
			)}
			{!threadData.status && (
				<div>
					<p>{threadData.thread.userTitle}</p>
					<div className="small">Awaiting Starter</div>
				</div>
			)}
		</div>
	);
};

RandomThreadDisplay.propTypes = propTypes;
RandomThreadDisplay.defaultProps = defaultProps;
export default RandomThreadDisplay;
