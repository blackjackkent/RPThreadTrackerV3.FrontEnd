import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '../_styles';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import useThreadFilterData from '~/infrastructure/hooks/derived-data/useThreadFilterData';
import ThreadTable from './ThreadTable';
import ThreadTableControls from './ThreadTableControls';
import UntrackThreadModal from '~/display/shared/modals/UntrackThreadModal';
import UpsertThreadModal from '~/display/shared/modals/UpsertThreadModal';
import ArchiveThreadModal from '~/display/shared/modals/ArchiveThreadModal';
import QueueThreadModal from '~/display/shared/modals/QueueThreadModal';

const propTypes = {
	threadsWithStatus: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired,
	refreshThreads: PropTypes.func.isRequired
};

const ThreadTableWrapper = ({ threadsWithStatus, isLoading, getColumns, refreshThreads }) => {
	const { data: userSettings } = useUserSettingsQuery();

	const [filteredThreads, setFilteredThreads] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [filteredTag, setFilteredTag] = useState(undefined);
	const [actedThread, setActedThread] = useState(null);

	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const [isUpsertThreadModalOpen, setIsUpsertThreadModalOpen] = useState(false);
	const [isArchiveThreadModalOpen, setIsArchiveThreadModalOpen] = useState(false);
	const [isQueueThreadModalOpen, setIsQueueThreadModalOpen] = useState(false);

	const { tags, characters, partners, lastPosters } = useThreadFilterData(threadsWithStatus);

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
					/>
				</Col>
			</Row>
		</Style>
	);
};
ThreadTableWrapper.propTypes = propTypes;
export default ThreadTableWrapper;
