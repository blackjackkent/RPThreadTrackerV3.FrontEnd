import React, { useState } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import Card from '~/display/shared/styled/Card';
import RecentActivityRow from './RecentActivityRow';
import NoThreadsMessage from './NoThreadsMessage';
import NoRecentActivityMessage from './NoRecentActivityMessage';
import NoCharactersMessage from '../shared/NoCharactersMessage';
import NoActiveCharactersMessage from '../shared/NoActiveCharactersMessage';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import { useFilteredActiveThreads } from '~/infrastructure/hooks';
import filters from '~/infrastructure/constants/filters';
import useRecentActivity from '~/infrastructure/hooks/useRecentActivity';
import { useActiveThreadsContext, useCharactersContext } from '~/infrastructure/hooks/contexts';
import GenericConfirmationModal from '~/display/shared/modals/GenericConfirmationModal';

const renderBlockMessage = (characters, allThreads) => {
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
	return <NoRecentActivityMessage />;
};

const RecentActivityCard = () => {
	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const [selectedThread, setSelectedThread] = useState(null);
	const { isThreadsLoading } = useActiveThreadsContext();
	const { characters } = useCharactersContext();
	const allThreads = useFilteredActiveThreads(filters.ALL);
	const recentActivityThreads = useRecentActivity();
	const archiveThread = () => {};
	const openUntrackThreadModal = (thread) => {
		setSelectedThread(thread);
		setIsUntrackThreadModalOpen(true);
	};
	const closeUntrackThreadModal = () => {
		setIsUntrackThreadModalOpen(false);
		setSelectedThread(null);
	};
	const markThreadQueued = () => {};
	return (
		<Card className="recent-activity-card">
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				submitCallback={() => {}}
				submitButtonText="Untrack"
				closeCallback={closeUntrackThreadModal}
				closeButtonText="Cancel"
				data={selectedThread}
				headerText="Confirm Thread Untracking"
				bodyText={
					<span>
						Are you sure you want to untrack{' '}
						<strong>{selectedThread?.userTitle}</strong>?
					</span>
				}
			/>
			<CardHeader>
				<i className="fas fa-bolt" /> Recent Activity
			</CardHeader>
			<CardBody className="card-body">
				{isThreadsLoading && (
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
				)}
				{!isThreadsLoading &&
					recentActivityThreads &&
					recentActivityThreads?.map((threadData) => (
						<RecentActivityRow
							data-spec="recent-activity-card-row"
							threadData={threadData}
							key={threadData.thread.threadId}
							archiveThread={archiveThread}
							openUntrackThreadModal={openUntrackThreadModal}
							markThreadQueued={markThreadQueued}
						/>
					))}
				{!isThreadsLoading &&
					!recentActivityThreads &&
					renderBlockMessage(characters, allThreads)}
			</CardBody>
		</Card>
	);
};
export default RecentActivityCard;
