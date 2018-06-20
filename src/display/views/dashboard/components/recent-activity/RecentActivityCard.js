import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import RecentActivityRow from './RecentActivityRow';
import NoThreadsMessage from '../NoThreadsMessage';
import NoCharactersMessage from '../NoCharactersMessage';

const propTypes = {
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	allThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	archiveThread: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	markThreadQueued: PropTypes.func.isRequired
};

const RecentActivityCard = (props) => {
	const {
		recentActivityThreads, allThreads, characters, archiveThread, openUntrackThreadModal, markThreadQueued
	} = props;
	return (
		<Card className="recent-activity-card">
			<CardHeader>
				<i className="fas fa-bolt" /> Recent Activity
			</CardHeader>
			<CardBlock className="card-body">
				{characters.length === 0 && <NoCharactersMessage /> }
				{characters.length > 0 && allThreads.length === 0 && <NoThreadsMessage />}
				{characters.length > 0 && allThreads.length > 0 && <NoRecentActivityMessage />}
				{allThreads.length > 0 && recentActivityThreads.map(threadData =>
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
