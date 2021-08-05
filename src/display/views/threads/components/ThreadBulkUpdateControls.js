import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, InputGroup, Input } from 'reactstrap';
import CleanSelect from '../../../shared/styled/CleanSelect';

const propTypes = {
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired,
	isAllThreads: PropTypes.bool.isRequired,
	selectedThreadCount: PropTypes.number.isRequired,
	executeBulkAction: PropTypes.func.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired
};

const ThreadBulkUpdateControls = (props) => {
	const {
		isArchive,
		isQueue,
		isAllThreads,
		selectedThreadCount,
		executeBulkAction,
		bulkToggleThreadsAreArchived,
		bulkToggleThreadsAreMarkedQueued,
		openBulkUntrackThreadsModal
	} = props;
	const [action, setAction] = useState('');

	const submitBulkAction = (e) => {
		e.preventDefault();
		if (action === 'toggle-queued') {
			executeBulkAction(bulkToggleThreadsAreMarkedQueued);
		}
		if (action === 'toggle-archived') {
			executeBulkAction(bulkToggleThreadsAreArchived);
		}
		if (action === 'untrack') {
			executeBulkAction(openBulkUntrackThreadsModal);
		}
	};

	const handleInputChange = (event) => {
		const { target } = event;
		const { value } = target;
		setAction(value);
	};
	return (
		<div className="thread-bulk-update-controls">
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
								Bulk Actions ({selectedThreadCount} Threads Selected)
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
