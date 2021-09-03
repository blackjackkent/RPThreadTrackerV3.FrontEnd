import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Form, Button, InputGroup, Input } from 'reactstrap';
import CleanSelect from '../../../shared/styled/CleanSelect';
import BulkUntrackThreadsModal from '~/display/shared/modals/BulkUntrackThreadsModal';
import { useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired,
	isAllThreads: PropTypes.bool.isRequired,
	selectedThreadCount: PropTypes.number.isRequired,
	selectedItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ThreadBulkUpdateControls = (props) => {
	const { isArchive, isQueue, isAllThreads, selectedThreadCount, selectedItems } = props;
	const [action, setAction] = useState('');

	const [selectedThreadObjects, setSelectedThreadObjects] = useState([]);
	useEffect(() => {
		setSelectedThreadObjects(selectedItems.map((t) => t.original.thread));
	}, [selectedItems]);

	const [isBulkUntrackThreadsModalOpen, setIsBulkUntrackThreadsModalOpen] = useState(false);

	const { bulkUpdateThreads } = useUpdateThreadMutation();
	const submitUpdateThreads = (actedThreads) => {
		bulkUpdateThreads(actedThreads)
			.then(() => {
				toast.success(`${actedThreads.length} threads updated!`);
			})
			.catch(() => {
				toast.error(`There was an error updating one or more of the selected threads.`);
			});
	};

	const bulkToggleThreadsAreMarkedQueued = () => {
		const updatedThreads = selectedThreadObjects.map((t) => ({
			...t,
			dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now()),
			isArchived: false
		}));
		bulkUpdateThreads(updatedThreads);
	};

	const bulkToggleThreadsAreArchived = () => {
		const updatedThreads = selectedThreadObjects.map((t) => ({
			...t,
			isArchived: !t.isArchived,
			dateMarkedQueued: null
		}));
		submitUpdateThreads(updatedThreads);
	};

	const handleInputChange = (event) => {
		const { target } = event;
		const { value } = target;
		setAction(value);
	};

	const submitBulkAction = (e) => {
		e.preventDefault();
		if (action === 'toggle-queued') {
			bulkToggleThreadsAreMarkedQueued();
		}
		if (action === 'toggle-archived') {
			bulkToggleThreadsAreArchived();
		}
		if (action === 'untrack') {
			setIsBulkUntrackThreadsModalOpen(true);
		}
	};

	return (
		<div className="thread-bulk-update-controls">
			<BulkUntrackThreadsModal
				actedThreads={selectedThreadObjects}
				isModalOpen={isBulkUntrackThreadsModalOpen}
				setIsModalOpen={setIsBulkUntrackThreadsModalOpen}
			/>
			<Form onSubmit={submitBulkAction} data-spec="thread-bulk-update-controls-form">
				<CleanSelect>
					<InputGroup>
						<Input
							data-spec="thread-bulk-update-controls-select"
							type="select"
							name="tag"
							id="tag"
							className="clean-select"
							onChange={handleInputChange}
						>
							<option value="">
								Bulk Actions ({selectedThreadCount} Thread
								{selectedThreadCount !== 1 ? 's' : ''} Selected)
							</option>
							{!isArchive && !isAllThreads && (
								<option value="toggle-queued">
									{isQueue ? 'Unmark' : 'Mark'} Selected Threads Queued
								</option>
							)}
							<option value="toggle-archived">
								{isArchive ? 'Unarchive' : 'Archive'} Selected Threads
							</option>
							<option value="untrack">Untrack Selected Threads</option>
						</Input>
						<Button
							data-spec="thread-bulk-update-controls-submit-button"
							color="primary"
							disabled={selectedThreadCount === 0}
						>
							Submit
						</Button>
					</InputGroup>
				</CleanSelect>
			</Form>
		</div>
	);
};
ThreadBulkUpdateControls.propTypes = propTypes;
export default ThreadBulkUpdateControls;
