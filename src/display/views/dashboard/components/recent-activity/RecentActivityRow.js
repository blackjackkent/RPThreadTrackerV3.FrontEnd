import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

const propTypes = {
	threadData: PropTypes.shape({
		status: PropTypes.shape({
			lastPostUrl: PropTypes.string,
			lastPosterUrlIdentifier: PropTypes.string,
			lastPostDate: PropTypes.string
		}),
		thread: PropTypes.shape({
			userTitle: PropTypes.string,
			postId: PropTypes.string
		})
	}).isRequired,
	onUntrackThreadClick: PropTypes.func.isRequired,
	onArchiveThreadClick: PropTypes.func.isRequired,
	onQueueThreadClick: PropTypes.func.isRequired
};

const RecentActivityRow = (props) => {
	const { threadData, onUntrackThreadClick, onArchiveThreadClick, onQueueThreadClick } = props;
	return (
		<Row>
			<Col xs="12" sm="6">
				<div>
					{threadData.status && (
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={threadData.status.lastPostUrl}
						>
							{threadData.thread.userTitle}
						</a>
					)}
					{!threadData.status && <span>{threadData.thread.userTitle}</span>}
				</div>
				<div className="small ">
					{threadData.status && (
						<span>
							Last Post by{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={threadData.status.lastPostUrl}
							>
								{threadData.status.lastPosterUrlIdentifier}
							</a>
						</span>
					)}
				</div>
			</Col>
			<Col sm="6" xs="12" className="text-right">
				<div>
					{threadData.status && (
						<Moment format="MMMM D, YYYY h:mm">{threadData.status.lastPostDate}</Moment>
					)}
					{!threadData.status && !threadData.thread.postId && (
						<span>Awaiting Starter</span>
					)}
				</div>
				<div className="small">
					<button type="button" onClick={() => onUntrackThreadClick(threadData.thread)}>
						Untrack
					</button>{' '}
					&bull;{' '}
					<button type="button" onClick={() => onArchiveThreadClick(threadData.thread)}>
						Archive
					</button>{' '}
					&bull;{' '}
					<button type="button" onClick={() => onQueueThreadClick(threadData.thread)}>
						Mark Queued
					</button>
				</div>
			</Col>
		</Row>
	);
};

RecentActivityRow.propTypes = propTypes;
export default RecentActivityRow;
