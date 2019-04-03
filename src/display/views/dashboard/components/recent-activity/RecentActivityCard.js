import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardBody } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import RecentActivityRow from './RecentActivityRow';
import NoThreadsMessage from '../NoThreadsMessage';
import NoCharactersMessage from '../NoCharactersMessage';
import NoRecentActivityMessage from '../NoRecentActivityMessage';
import NoActiveCharactersMessage from '../NoActiveCharactersMessage';
import LoadingIndicator from '../../../../shared/loading/LoadingIndicator';

const propTypes = {
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	allThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	archiveThread: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	markThreadQueued: PropTypes.func.isRequired,
	loadingInProgress: PropTypes.bool.isRequired
};

const getBlockContent = (
	loadingInProgress,
	characters,
	allThreads,
	recentActivityThreads,
	archiveThread,
	openUntrackThreadModal,
	markThreadQueued
) => {
	if (loadingInProgress) {
		return (
			<LoadingIndicator
				style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		);
	}
	if (characters.length === 0) {
		return (<NoCharactersMessage />);
	}
	const activeCharacters = characters.filter(c => !c.isOnHiatus);
	if (characters.length > 0 && activeCharacters.length === 0) {
		return (<NoActiveCharactersMessage />);
	}
	if (allThreads.length === 0) {
		return (<NoThreadsMessage />);
	}
	if (recentActivityThreads.length === 0) {
		return (<NoRecentActivityMessage />);
	}
	return recentActivityThreads.map(threadData => (
		<RecentActivityRow
			data-spec="recent-activity-card-row"
			threadData={threadData}
			key={threadData.thread.threadId}
			archiveThread={archiveThread}
			openUntrackThreadModal={openUntrackThreadModal}
			markThreadQueued={markThreadQueued}
		/>
	));
};

const RecentActivityCard = (props) => {
	const {
		recentActivityThreads,
		allThreads,
		characters,
		archiveThread,
		openUntrackThreadModal,
		markThreadQueued,
		loadingInProgress
	} = props;
	return (
		<Card className="recent-activity-card">
			<CardHeader>
				<i className="fas fa-bolt" /> Recent Activity
			</CardHeader>
			<CardBody className="card-body">
				{getBlockContent(
					loadingInProgress,
					characters,
					allThreads,
					recentActivityThreads,
					archiveThread,
					openUntrackThreadModal,
					markThreadQueued
				)}
			</CardBody>
		</Card>
	);
};
RecentActivityCard.propTypes = propTypes;
export default RecentActivityCard;
