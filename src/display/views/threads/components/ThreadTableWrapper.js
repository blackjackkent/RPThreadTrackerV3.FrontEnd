import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '../../../shared/styled/TrackerTable';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import ThreadTable from './ThreadTable';
import ThreadTableControls from './ThreadTableControls';
import UntrackThreadModal from '~/display/shared/modals/UntrackThreadModal';
import UpsertThreadModal from '~/display/shared/modals/UpsertThreadModal';
import ArchiveThreadModal from '~/display/shared/modals/ArchiveThreadModal';
import QueueThreadModal from '~/display/shared/modals/QueueThreadModal';
import { useUpdateUserSettingsMutation } from '~/infrastructure/hooks/mutations';
import {
	useThreadListCharacters,
	useThreadListLastPosters,
	useThreadListPartners,
	useThreadListTags
} from '~/infrastructure/hooks/derived-data';

const propTypes = {
	threadsWithStatus: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired,
	refreshThreads: PropTypes.func.isRequired,
	isQueuedView: PropTypes.bool,
	isArchivedView: PropTypes.bool,
	isAllThreadsView: PropTypes.bool
};
const defaultProps = {
	isQueuedView: false,
	isArchivedView: false,
	isAllThreadsView: false
};
const ThreadTableWrapper = ({
	threadsWithStatus,
	isLoading,
	getColumns,
	refreshThreads,
	isQueuedView,
	isArchivedView,
	isAllThreadsView
}) => {
	const { data: userSettings } = useUserSettingsQuery();
	const { updateUserSettings } = useUpdateUserSettingsMutation();
	const [filteredThreads, setFilteredThreads] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [filteredTag, setFilteredTag] = useState('');
	const [actedThread, setActedThread] = useState(null);

	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const [isUpsertThreadModalOpen, setIsUpsertThreadModalOpen] = useState(false);
	const [isArchiveThreadModalOpen, setIsArchiveThreadModalOpen] = useState(false);
	const [isQueueThreadModalOpen, setIsQueueThreadModalOpen] = useState(false);

	const tags = useThreadListTags(threadsWithStatus);
	const characters = useThreadListCharacters(threadsWithStatus);
	const partners = useThreadListPartners(threadsWithStatus);
	const lastPosters = useThreadListLastPosters(threadsWithStatus);

	useEffect(() => {
		let threads = [].concat(threadsWithStatus);
		if (filteredTag) {
			threads = threads.filter((t) => {
				if (!t.thread || !t.thread.threadTags) {
					return false;
				}
				return t.thread.threadTags.filter((tt) => tt.tagText === filteredTag).length > 0;
			});
		}
		setFilteredThreads(threads);
	}, [threadsWithStatus, filteredTag]);

	const onUntrackThreadClick = (thread) => {
		setActedThread(thread);
		setIsUntrackThreadModalOpen(true);
	};

	const onEditThreadClick = (thread) => {
		setActedThread(thread);
		setIsUpsertThreadModalOpen(true);
	};

	const onArchiveThreadClick = (thread) => {
		setActedThread(thread);
		setIsArchiveThreadModalOpen(true);
	};

	const onQueueThreadClick = (thread) => {
		setActedThread(thread);
		setIsQueueThreadModalOpen(true);
	};

	const onThreadTablePageSizeChange = (pageSize) => {
		updateUserSettings({
			...userSettings,
			threadTablePageSize: pageSize
		});
	};

	const onSelectedThreadsChange = (selectedThreads) => {
		setSelectedItems(selectedThreads);
	};

	return (
		<Style className="animated fadeIn threads-container">
			<UntrackThreadModal
				actedThread={actedThread}
				isModalOpen={isUntrackThreadModalOpen}
				setIsModalOpen={setIsUntrackThreadModalOpen}
			/>
			<UpsertThreadModal
				actedThread={actedThread}
				characters={characters}
				isModalOpen={isUpsertThreadModalOpen}
				setIsModalOpen={setIsUpsertThreadModalOpen}
			/>
			<ArchiveThreadModal
				actedThread={actedThread}
				isModalOpen={isArchiveThreadModalOpen}
				setIsModalOpen={setIsArchiveThreadModalOpen}
			/>
			<QueueThreadModal
				isQueueing={!isQueuedView}
				actedThread={actedThread}
				isModalOpen={isQueueThreadModalOpen}
				setIsModalOpen={setIsQueueThreadModalOpen}
			/>
			<Row>
				<Col>
					<ThreadTableControls
						filteredTag={filteredTag}
						tags={tags}
						refreshThreads={refreshThreads}
						selectedItems={selectedItems}
						setFilteredTag={setFilteredTag}
						isQueuedView={isQueuedView}
						isArchivedView={isArchivedView}
						isAllThreadsView={isAllThreadsView}
					/>
					<ThreadTable
						characters={characters}
						getColumns={getColumns}
						isLoading={isLoading}
						lastPosters={lastPosters}
						partners={partners}
						filteredThreads={filteredThreads}
						onUntrackThreadClick={onUntrackThreadClick}
						onEditThreadClick={onEditThreadClick}
						onArchiveThreadClick={onArchiveThreadClick}
						onQueueThreadClick={onQueueThreadClick}
						threadTablePageSize={userSettings?.threadTablePageSize}
						onThreadTablePageSizeChange={onThreadTablePageSizeChange}
						onSelectedThreadsChange={onSelectedThreadsChange}
					/>
				</Col>
			</Row>
		</Style>
	);
};
ThreadTableWrapper.propTypes = propTypes;
ThreadTableWrapper.defaultProps = defaultProps;
export default ThreadTableWrapper;
