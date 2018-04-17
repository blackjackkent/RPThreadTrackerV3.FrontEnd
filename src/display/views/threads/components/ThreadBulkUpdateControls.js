import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired,
	selectedThreadCount: PropTypes.number.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired
};

const ThreadBulkUpdateControls = (props) => {
	const {
		isArchive,
		isQueue,
		selectedThreadCount,
		bulkToggleThreadsAreMarkedQueued,
		bulkToggleThreadsAreArchived,
		openBulkUntrackThreadsModal
	} = props;
	return (
		<div className="thread-bulk-update-controls">
			<span className="control-button">
				<button
					className="btn btn-primary"
					onClick={() => bulkToggleThreadsAreMarkedQueued()}
					disabled={selectedThreadCount === 0}
				>
					{isQueue ? 'Unmark' : 'Mark'} Selected as Queued <i className="fas fa-clock" />
				</button>
			</span>
			<span className="control-button">
				<button
					className="btn btn-primary"
					onClick={() => bulkToggleThreadsAreArchived()}
					disabled={selectedThreadCount === 0}
				>
					{isArchive ? 'Unarchive' : 'Archive'} Selected{' '}
					<i className="fas fa-lock" />
				</button>
			</span>
			<span>
				<button
					className="btn btn-danger"
					onClick={() => openBulkUntrackThreadsModal()}
					disabled={selectedThreadCount === 0}
				>
					Untrack Selected <i className="fas fa-trash-alt" />
				</button>
			</span>
		</div>
	);
};
ThreadBulkUpdateControls.propTypes = propTypes;
export default ThreadBulkUpdateControls;
