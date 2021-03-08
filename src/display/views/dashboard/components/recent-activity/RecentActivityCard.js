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
import { useFilteredActiveThreads } from '~/infrastructure/hooks';
import filters from '~/infrastructure/constants/filters';
import useRecentActivity from '~/infrastructure/hooks/useRecentActivity';
import { useThreadsContext } from '~/infrastructure/hooks/contexts';
import useCharactersContext from '~/infrastructure/hooks/contexts/useCharactersContext';

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
	if (characters?.length === 0) {
		return <NoCharactersMessage />;
	}
	const activeCharacters = characters?.filter((c) => !c.isOnHiatus);
	if (characters?.length > 0 && activeCharacters.length === 0) {
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

const RecentActivityCard = () => {
	const { isThreadsLoading } = useThreadsContext();
	const { characters } = useCharactersContext();
	const allThreads = useFilteredActiveThreads(filters.ALL);
	const recentActivityThreads = useRecentActivity();
	const archiveThread = () => {};
	const openUntrackThreadModal = () => {};
	const markThreadQueued = () => {};
	return (
		<Card className="recent-activity-card">
			<CardHeader>
				<i className="fas fa-bolt" /> Recent Activity
			</CardHeader>
			<CardBody className="card-body">
				{getBlockContent(
					isThreadsLoading,
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
export default RecentActivityCard;
