import React, { useState } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '~/display/shared/styled/Card';
import RecentActivityRow from './RecentActivityRow';
import NoThreadsMessage from './NoThreadsMessage';
import NoRecentActivityMessage from './NoRecentActivityMessage';
import NoCharactersMessage from '../shared/NoCharactersMessage';
import NoActiveCharactersMessage from '../shared/NoActiveCharactersMessage';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import filters from '~/infrastructure/constants/filters';
import { useRecentActivity, useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import { useCharactersContext } from '~/infrastructure/hooks/contexts';
import UntrackThreadModal from '~/display/shared/modals/UntrackThreadModal';
import ArchiveThreadModal from '~/display/shared/modals/ArchiveThreadModal';
import QueueThreadModal from '~/display/shared/modals/QueueThreadModal';

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
	const { characters } = useCharactersContext();
	const { filteredThreads: allThreads, isThreadsLoading } = useFilteredActiveThreads(filters.ALL);
	const recentActivityThreads = useRecentActivity();

	const [actedThread, setActedThread] = useState(null);
	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const [isArchiveThreadModalOpen, setIsArchiveThreadModalOpen] = useState(false);
	const [isQueueThreadModalOpen, setIsQueueThreadModalOpen] = useState(false);

	const onUntrackThreadClick = (thread) => {
		setActedThread(thread);
		setIsUntrackThreadModalOpen(true);
	};

	const onArchiveThreadClick = (thread) => {
		setActedThread(thread);
		setIsArchiveThreadModalOpen(true);
	};

	const onQueueThreadClick = (thread) => {
		setActedThread(thread);
		setIsQueueThreadModalOpen(true);
	};
	return (
		<Card className="recent-activity-card">
			<UntrackThreadModal
				actedThread={actedThread}
				isModalOpen={isUntrackThreadModalOpen}
				setIsModalOpen={setIsUntrackThreadModalOpen}
			/>
			<ArchiveThreadModal
				actedThread={actedThread}
				isModalOpen={isArchiveThreadModalOpen}
				setIsModalOpen={setIsArchiveThreadModalOpen}
			/>
			<QueueThreadModal
				actedThread={actedThread}
				isModalOpen={isQueueThreadModalOpen}
				setIsModalOpen={setIsQueueThreadModalOpen}
			/>
			<CardHeader>
				<FontAwesomeIcon icon={['fas', 'bolt']} /> Recent Activity
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
							onArchiveThreadClick={onArchiveThreadClick}
							onQueueThreadClick={onQueueThreadClick}
							onUntrackThreadClick={onUntrackThreadClick}
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
