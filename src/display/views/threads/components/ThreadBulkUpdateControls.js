import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired
};

const ThreadBulkUpdateControls = (props) => {
	const {
		isArchive,
		isQueue,
		bulkToggleThreadsAreMarkedQueued,
		bulkToggleThreadsAreArchived,
		openBulkUntrackThreadsModal
	} = props;
	return (
		<Row className="thread-bulk-update-controls">
			<Col xs={{ size: 6, offset: 3 }}>
				<span className="control-button">
					<button className="btn btn-primary" onClick={() => bulkToggleThreadsAreMarkedQueued()}>
						{isQueue ? 'Unmark' : 'Mark'} Selected as Queued <i className="fas fa-clock" />
					</button>
				</span>
				<button className="btn btn-primary" onClick={() => bulkToggleThreadsAreArchived()}>
					{isArchive ? 'Unarchive' : 'Archive'} Selected{' '}
					<i className="fas fa-archive" />
				</button>
				<button
					className="btn btn-danger"
					onClick={() => openBulkUntrackThreadsModal()}
				>
					Untrack Selected <i className="fas fa-trash-alt" />
				</button>
			</Col>
		</Row>
	);
};
ThreadBulkUpdateControls.propTypes = propTypes;
export default ThreadBulkUpdateControls;
