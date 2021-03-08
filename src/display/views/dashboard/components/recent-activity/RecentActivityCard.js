import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardBody } from 'reactstrap';
import Card from '~/display/shared/styled/Card';
import RecentActivityRow from './RecentActivityRow';
import NoThreadsMessage from '../NoThreadsMessage';
import NoCharactersMessage from '../NoCharactersMessage';
import NoRecentActivityMessage from '../NoRecentActivityMessage';
import NoActiveCharactersMessage from '../NoActiveCharactersMessage';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import { ThreadsContext, useFilteredActiveThreads } from '~/infrastructure/hooks';
import filters from '~/infrastructure/constants/filters';
import useRecentActivity from '~/infrastructure/hooks/useRecentActivity';
import { useCharactersQuery } from '~/infrastructure/hooks/queries';

const propTypes = {
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})),
	allThreads: PropTypes.arrayOf(PropTypes.shape({})),
	characters: PropTypes.arrayOf(PropTypes.shape({})),
	archiveThread: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	markThreadQueued: PropTypes.func.isRequired,
	loadingInProgress: PropTypes.bool.isRequired
};
const defaultProps = {
	characters: [],
	recentActivityThreads: [],
	allThreads: []
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
	if (!characters) {
		return <NoCharactersMessage />;
	}
	const activeCharacters = characters.filter((c) => !c.isOnHiatus);
	if (characters.length > 0 && activeCharacters.length === 0) {
		return <NoActiveCharactersMessage />;
	}
	if (allThreads.length === 0) {
		return <NoThreadsMessage />;
	}
	if (recentActivityThreads?.length === 0) {
		return <NoRecentActivityMessage />;
	}
	return recentActivityThreads?.map((threadData) => (
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
	const { archiveThread, openUntrackThreadModal, markThreadQueued, loadingInProgress } = props;
	const allThreads = useFilteredActiveThreads(filters.ALL);
	const recentActivityThreads = useRecentActivity();
	const { data: characters } = useCharactersQuery();
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
RecentActivityCard.defaultProps = defaultProps;
export default RecentActivityCard;
