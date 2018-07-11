import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	refreshThreads: PropTypes.func.isRequired
};

const ThreadRefreshButton = (props) => {
	const { refreshThreads, isArchive } = props;
	return (
		<div className="thread-refresh-button">
			<Button
				color="primary"
				onClick={() => refreshThreads(isArchive)}
			>
				Refresh <i className="fas fa-sync-alt" />
			</Button>
		</div>
	);
};
ThreadRefreshButton.propTypes = propTypes;
export default ThreadRefreshButton;
