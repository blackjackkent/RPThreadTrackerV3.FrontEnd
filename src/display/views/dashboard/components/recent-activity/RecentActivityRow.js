import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired,
	archiveThread: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	markThreadQueued: PropTypes.func.isRequired
};

const RecentActivityRow = (props) => {
	const {
		threadData, archiveThread, openUntrackThreadModal, markThreadQueued
	} = props;
	return (
		<Row>
			<Col xs="12" sm="6">
				<div>
					<a target="_blank" href={threadData.status.lastPostUrl}>{threadData.thread.userTitle}</a>
				</div>
				<div className="small ">
					Last Post by{' '}
					<a
						target="_blank"
						href={threadData.status.lastPostUrl}
					>
						{threadData.status.lastPosterUrlIdentifier}
					</a>
				</div>
			</Col>
			<Col sm="6" xs="12" className="text-right">
				<div>
					<Moment format="MMMM D, YYYY">
						{threadData.status.lastPostDate}
					</Moment>
				</div>
				<div className="small">
					<button
						onClick={() => openUntrackThreadModal(threadData.thread)}
						data-spec="recent-activity-row-untrack-button"
					>
						Untrack
					</button> &bull;{' '}
					<button
						onClick={() => archiveThread(threadData.thread)}
						data-spec="recent-activity-row-archive-button"
					>
						Archive
					</button> &bull;{' '}
					<button
						onClick={() => markThreadQueued(threadData.thread)}
						data-spec="recent-activity-row-queue-button"
					>
						Mark Queued
					</button>
				</div>
			</Col>
		</Row>
	);
};

RecentActivityRow.propTypes = propTypes;
export default RecentActivityRow;
