import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultFilter from './_defaultFilter';
import CheckboxTable from './CheckboxTable';
import ThreadBulkUpdateControls from './ThreadBulkUpdateControls';
import ThreadTableSubComponent from './ThreadTableSubComponent';
import TagFilterSelect from './TagFilterSelect';
import ThreadRefreshButton from './ThreadRefreshButton';

const propTypes = {
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool,
	isAllThreads: PropTypes.bool,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired,
	refreshThreads: PropTypes.func.isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tdProps: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({
		filteredTag: PropTypes.string
	}).isRequired,
	threadTablePageSize: PropTypes.number,
	updateThreadTablePageSize: PropTypes.func.isRequired
};
const defaultProps = {
	isArchive: false,
	isQueue: false,
	isAllThreads: false,
	threadTablePageSize: 10
};

function getData(filteredThreads) {
	const data = filteredThreads.map((item) => {
		// eslint-disable-next-line no-underscore-dangle
		const _id = item.thread.threadId;
		return {
			_id,
			...item
		};
	});
	return data;
}

class ThreadTable extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedItems: []
		};
		this.executeBulkAction = this.executeBulkAction.bind(this);
		this.onSelectionChanged = this.onSelectionChanged.bind(this);
	}

	onSelectionChanged(selectedItems) {
		this.setState({
			selectedItems
		});
	}

	executeBulkAction(func) {
		const { selectedItems } = this.state;
		const items = selectedItems.map((t) => t.thread);
		func(items);
	}

	render() {
		const {
			filteredThreads,
			columns,
			isArchive,
			isLoadingIconVisible,
			isQueue,
			isAllThreads,
			bulkToggleThreadsAreMarkedQueued,
			bulkToggleThreadsAreArchived,
			openBulkUntrackThreadsModal,
			tdProps,
			refreshThreads,
			setFilteredTag,
			threadFilter,
			threadTablePageSize,
			updateThreadTablePageSize,
			tags
		} = this.props;
		const { selectedItems } = this.state;
		return (
			<div>
				<Row>
					<Col xs="12" sm="6" xl="5">
						<TagFilterSelect
							setFilteredTag={setFilteredTag}
							tags={tags}
							filteredTag={threadFilter.filteredTag}
						/>
					</Col>
					<Col xs="12" sm="6" xl="5">
						<ThreadBulkUpdateControls
							isArchive={isArchive}
							isQueue={isQueue}
							isAllThreads={isAllThreads}
							selectedThreadCount={selectedItems.length}
							executeBulkAction={this.executeBulkAction}
							bulkToggleThreadsAreMarkedQueued={bulkToggleThreadsAreMarkedQueued}
							bulkToggleThreadsAreArchived={bulkToggleThreadsAreArchived}
							openBulkUntrackThreadsModal={openBulkUntrackThreadsModal}
						/>
					</Col>
					<Col
						xs={{
							size: 6,
							offset: 3
						}}
						sm={{
							size: 4,
							offset: 4
						}}
						xl={{
							size: 2,
							offset: 0
						}}
					>
						<ThreadRefreshButton
							isArchive={isArchive}
							refreshThreads={refreshThreads}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="public-tool-banner">
							Want to share this view publicly? Check out the new{' '}
							<Link href="/tools/public" to="/tools/public">
								Public Views tool
							</Link>
							.
						</p>
					</Col>
				</Row>
				<CheckboxTable
					className="-striped"
					data={getData(filteredThreads)}
					noDataText={isLoadingIconVisible ? 'Loading...' : 'No Threads Found'}
					defaultPageSize={threadTablePageSize || 10}
					onPageSizeChange={updateThreadTablePageSize}
					columns={columns}
					getTdProps={tdProps}
					defaultSorted={[
						{
							id: 'status.lastPostDate',
							desc: true
						}
					]}
					defaultFilterMethod={defaultFilter}
					showPaginationTop
					SubComponent={(row) => (
						<ThreadTableSubComponent
							description={row.original.thread.description}
							tags={row.original.thread.threadTags}
						/>
					)}
					onSelectionChanged={this.onSelectionChanged}
				/>
			</div>
		);
	}
}
ThreadTable.propTypes = propTypes;
ThreadTable.defaultProps = defaultProps;
export default ThreadTable;
