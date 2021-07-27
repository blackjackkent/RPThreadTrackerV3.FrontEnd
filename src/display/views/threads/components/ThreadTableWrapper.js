import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '../_styles';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import GenericConfirmationModal from '~/display/shared/modals/GenericConfirmationModal';
import useThreadFilterData from '~/infrastructure/hooks/derived-data/useThreadFilterData';
import useUntrackThreadModal from '~/infrastructure/hooks/modals/useUntrackThreadModal';
import ThreadTable from './ThreadTable';
import ThreadTableControls from './ThreadTableControls';

const propTypes = {
	threadsWithStatus: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired
};

const ThreadTableWrapper = ({ threadsWithStatus, isLoading, getColumns }) => {
	const { data: userSettings } = useUserSettingsQuery();

	const [filteredThreads, setFilteredThreads] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [filteredTag, setFilteredTag] = useState(undefined);
	const [actedThread, setActedThread] = useState(null);

	const { tags, characters, partners, lastPosters } = useThreadFilterData(threadsWithStatus);

	const {
		isUntrackThreadLoading,
		isUntrackThreadModalOpen,
		setIsUntrackThreadModalOpen,
		submitUntrackThread
	} = useUntrackThreadModal();

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

	const refreshThreads = () => {};

	return (
		<Style className="animated fadeIn threads-container">
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				setIsModalOpen={setIsUntrackThreadModalOpen}
				submitForm={submitUntrackThread}
				submitButtonText="Untrack"
				closeButtonText="Cancel"
				isLoading={isUntrackThreadLoading}
				data={actedThread}
				headerText="Confirm Thread Untracking"
				bodyText={
					<span>
						Are you sure you want to untrack <strong>{actedThread?.userTitle}</strong>?
					</span>
				}
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
					/>
				</Col>
			</Row>
		</Style>
	);
};
ThreadTableWrapper.propTypes = propTypes;
export default ThreadTableWrapper;
