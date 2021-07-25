import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
				data-spec="thread-refresh-button-submit"
			>
				Refresh <FontAwesomeIcon icon={['fas', 'sync-alt']} />
			</Button>
		</div>
	);
};
ThreadRefreshButton.propTypes = propTypes;
export default ThreadRefreshButton;
