import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	toggleThreadsAreArchived: PropTypes.func.isRequired,
	openUntrackThreadsModal: PropTypes.func.isRequired,
	selectedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ThreadBulkUpdateControls = (props) => {
	const {
		isArchive,
		toggleThreadsAreArchived,
		selectedThreads,
		openUntrackThreadsModal
	} = props;
	return (
		<Row>
			<Col xs={{ size: 6, offset: 3 }}>
				<button className="btn btn-primary" onClick={() => toggleThreadsAreArchived(selectedThreads)}>
					{isArchive ? 'Unarchive' : 'Archive'} Selected{' '}
					<i className="fas fa-archive" />
				</button>
				<button
					className="btn btn-danger"
					onClick={() => openUntrackThreadsModal(selectedThreads)}
				>
					Untrack <i className="fas fa-trash-alt" />
				</button>
			</Col>
		</Row>
	);
};
ThreadBulkUpdateControls.propTypes = propTypes;
export default ThreadBulkUpdateControls;
