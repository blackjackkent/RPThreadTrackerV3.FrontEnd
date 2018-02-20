import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired
};

const RandomThreadDisplay = (props) => {
	const { threadData } = props;
	if (!threadData.thread) {
		return (
			<div className="random-thread-result">
				<p>Pick a random thread to respond to!</p>
			</div>
		);
	}
	return (
		<div className="random-thread-result">
			<div>
				<a href={threadData.status.LastPostUrl}>
					{threadData.thread.userTitle}{' '}
					<i className="fas fa-external-link-alt" />
				</a>
			</div>
			{threadData.status &&
				<div className="small ">
					Last Post by{' '}
					<a href={threadData.status.LastPostUrl}>{threadData.status.LastPosterUrlIdentifier}</a>
				</div>
			}
			{!threadData.status &&
				<div className="small ">
					Awaiting Starter
				</div>
			}
		</div>
	);
};

RandomThreadDisplay.propTypes = propTypes;
export default RandomThreadDisplay;
