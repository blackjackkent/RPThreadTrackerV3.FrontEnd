import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import { Row, Col } from 'reactstrap';
import ThreadBulkUpdateControls from './ThreadBulkUpdateControls';
import ThreadTableTagDisplay from './ThreadTableTagDisplay';
import TagFilterSelect from './TagFilterSelect';
import ThreadRefreshButton from './ThreadRefreshButton';

const CheckboxTable = checkboxHOC(ReactTable);
const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool,
	isQueue: PropTypes.bool,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired,
	refreshThreads: PropTypes.func.isRequired,
	tdProps: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired
};
const defaultProps = {
	isArchive: false,
	isQueue: false
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
			selection: [],
			selectAll: false
		};
		this.toggleSelection = this.toggleSelection.bind(this);
		this.toggleAll = this.toggleAll.bind(this);
		this.isSelected = this.isSelected.bind(this);
		this.executeBulkAction = this.executeBulkAction.bind(this);
		this.clearSelection = this.clearSelection.bind(this);
	}
	toggleSelection(key, shift, row) {
		let selection = [
			...this.state.selection
		];
		// eslint-disable-next-line no-underscore-dangle
		const keyIndex = selection.findIndex(s => s._id === key);
		if (keyIndex >= 0) {
			selection = [
				...selection.slice(0, keyIndex),
				...selection.slice(keyIndex + 1)
			];
		} else {
			selection.push(row);
		}
		this.setState({ selection });
	}
	toggleAll() {
		const selectAll = !this.state.selectAll;
		const selection = [];
		if (selectAll) {
			const wrappedInstance = this.checkboxTable.getWrappedInstance();
			const currentRecords = wrappedInstance.getResolvedState().sortedData;
			currentRecords.forEach((item) => {
				// eslint-disable-next-line no-underscore-dangle
				selection.push(item._original);
			});
		}
		this.setState({ selectAll, selection });
	}
	isSelected(key) {
		// eslint-disable-next-line no-underscore-dangle
		return this.state.selection.findIndex(s => s._id === key) > -1;
	}
	executeBulkAction(func) {
		func(this.state.selection.map(t => t.thread));
		this.clearSelection();
	}
	clearSelection() {
		this.setState({ selectAll: false, selection: [] });
	}
	render() {
		const { toggleSelection, toggleAll, isSelected } = this;
		const { selectAll } = this.state;
		const {
			filteredThreads,
			columns,
			isArchive,
			isLoadingIconVisible,
			isQueue,
			bulkToggleThreadsAreMarkedQueued,
			bulkToggleThreadsAreArchived,
			openBulkUntrackThreadsModal,
			tdProps,
			refreshThreads,
			setFilteredTag,
			threadFilter,
			tags
		} = this.props;

		const checkboxProps = {
			selectAll,
			isSelected,
			toggleSelection,
			toggleAll,
			selectType: 'checkbox'
		};
		return (
			<div>
				<Row>
					<Col xs="12" sm="6">
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
							selectedThreadCount={this.state.selection.length}
							bulkToggleThreadsAreMarkedQueued={
								() => this.executeBulkAction(bulkToggleThreadsAreMarkedQueued)
							}
							bulkToggleThreadsAreArchived={
								() => this.executeBulkAction(bulkToggleThreadsAreArchived)
							}
							openBulkUntrackThreadsModal={
								() => this.executeBulkAction(openBulkUntrackThreadsModal)
							}
						/>
					</Col>
					<Col xs={{ size: 6, offset: 3 }} sm={{ size: 4, offset: 4 }} xl={{ size: 1, offset: 0 }}>
						<ThreadRefreshButton isArchive={isArchive} refreshThreads={refreshThreads} />
					</Col>
				</Row>
				<CheckboxTable
					// eslint-disable-next-line no-return-assign
					ref={r => this.checkboxTable = r}
					className="-striped"
					data={getData(filteredThreads)}
					noDataText={isLoadingIconVisible ? 'Loading...' : 'No Threads Found'}
					defaultPageSize={filteredThreads.length > 10 ? 20 : 10}
					columns={columns}
					getTdProps={tdProps}
					defaultSorted={[
						{
							id: 'status.LastPostDate',
							desc: true
						}
					]}
					defaultFilterMethod={(filter, row) => {
						const id = filter.pivotId || filter.id;
						return row[id] !== undefined
							? String(row[id]).toLowerCase().includes(filter.value.toLowerCase())
							: true;
					}}
					showPaginationTop
					SubComponent={row =>
						(<ThreadTableTagDisplay
							tags={row.original.thread.threadTags}
						/>)}
					{...checkboxProps}
				/>
			</div>
		);
	}
}
ThreadTable.propTypes = propTypes;
ThreadTable.defaultProps = defaultProps;
export default ThreadTable;
