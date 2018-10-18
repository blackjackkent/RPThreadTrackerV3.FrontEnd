import React from 'react';
import PropTypes from 'prop-types';
import {
	Form, Button, InputGroup, Input
} from 'reactstrap';
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

class ThreadBulkUpdateControls extends React.Component {
	constructor() {
		super();
		this.state = { action: '' };
		this.submitBulkAction = this.submitBulkAction.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	submitBulkAction(e) {
		e.preventDefault();
		const {
			executeBulkAction,
			bulkToggleThreadsAreArchived,
			bulkToggleThreadsAreMarkedQueued,
			openBulkUntrackThreadsModal
		} = this.props;
		const { action } = this.state;
		if (action === 'toggle-queued') {
			executeBulkAction(bulkToggleThreadsAreMarkedQueued);
		}
		if (action === 'toggle-archived') {
			executeBulkAction(bulkToggleThreadsAreArchived);
		}
		if (action === 'untrack') {
			executeBulkAction(openBulkUntrackThreadsModal);
		}
	}

	handleInputChange(event) {
		const { target } = event;
		const { value } = target;
		this.setState({
			action: value
		});
	}

	render() {
		const {
			isArchive,
			isQueue,
			isAllThreads,
			selectedThreadCount
		} = this.props;
		return (
			<div className="thread-bulk-update-controls">
				<Form
					onSubmit={this.submitBulkAction}
					data-spec="thread-bulk-update-controls-form"
				>
					<CleanSelect>
						<InputGroup>
							<Input
								data-spec="thread-bulk-update-controls-select"
								type="select"
								name="tag"
								id="tag"
								className="clean-select"
								onChange={this.handleInputChange}
							>
								<option value="">Bulk Actions</option>
								{!isArchive && !isAllThreads && <option value="toggle-queued">{isQueue ? 'Unmark' : 'Mark'} Selected Threads Queued</option>}
								<option value="toggle-archived">{isArchive ? 'Unarchive' : 'Archive'} Selected Threads</option>
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
	}
}
ThreadBulkUpdateControls.propTypes = propTypes;
export default ThreadBulkUpdateControls;
