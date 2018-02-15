import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import RecentActivityRow from './RecentActivityRow';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	archiveThread: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	markThreadQueued: PropTypes.func.isRequired
};

const RecentActivityCard = (props) => {
	const { threads, archiveThread, openUntrackThreadModal, markThreadQueued } = props;
	return (
		<Card className="recent-activity-card">
			<CardHeader>
				<i className="fa fa-align-justify" /> Recent Activity
			</CardHeader>
			<CardBlock className="card-body">
				{threads.map(threadData =>
					(<RecentActivityRow
						threadData={threadData}
						key={threadData.thread.threadId}
						archiveThread={archiveThread}
						openUntrackThreadModal={openUntrackThreadModal}
						markThreadQueued={markThreadQueued}
					/>))}
			</CardBlock>
		</Card>
	);
};
RecentActivityCard.propTypes = propTypes;
export default RecentActivityCard;
