import React, { useState } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
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
import {
	useUntrackThreadMutation,
	useUpdateThreadMutation
} from '~/infrastructure/hooks/mutations';

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
	const { untrackThread, isLoading: isUntrackThreadLoading } = useUntrackThreadMutation();
	const { updateThread } = useUpdateThreadMutation();
	const submitUntrackThread = () => {
		untrackThread(selectedThread)
			.then(() => {
				setIsUntrackThreadModalOpen(false);
				toast.success('Thread untracked!');
			})
			.catch(() => {
				toast.error(`There was an error untracking this thread.`);
			});
	};
	const submitArchiveThread = (thread) => {
		const updated = {
			...thread,
			isArchived: !thread.isArchived
		};
		updateThread(updated)
			.then(() => {
				toast.success('Thread archived!');
			})
			.catch(() => {
				toast.error(`There was an error archiving this thread.`);
			});
	};
	const markThreadQueued = (thread) => {
		const updated = {
			...thread,
			dateMarkedQueued: new Date(Date.now())
		};
		updateThread(updated)
			.then(() => {
				toast.success('Thread marked as queued!');
			})
			.catch(() => {
				toast.error(`There was an error marking this thread as queued.`);
			});
	};
	const openUntrackThreadModal = (thread) => {
		setSelectedThread(thread);
		setIsUntrackThreadModalOpen(true);
	};
	return (
		<Card className="recent-activity-card">
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				setIsModalOpen={setIsUntrackThreadModalOpen}
				submitForm={submitUntrackThread}
				submitButtonText="Untrack"
				closeButtonText="Cancel"
				isLoading={isUntrackThreadLoading}
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
							archiveThread={submitArchiveThread}
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
