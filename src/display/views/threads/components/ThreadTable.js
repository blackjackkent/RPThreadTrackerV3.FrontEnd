import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import columns from './_columns';
import ThreadFilterCard from './ThreadFilterCard';
import ThreadTableSubComponent from './table-components/ThreadTableSubComponent';

const CheckboxTable = checkboxHOC(ReactTable);
const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired
};

function getData(threads) {
	const data = threads.map((item) => {
		// using chancejs to generate guid
		// shortid is probably better but seems to have performance issues
		// on codesandbox.io
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
	}
	toggleSelection(key) {
		let selection = [
			...this.state.selection
		];
		const keyIndex = selection.indexOf(key);
		if (keyIndex >= 0) {
			selection = [
				...selection.slice(0, keyIndex),
				...selection.slice(keyIndex + 1)
			];
		} else {
			selection.push(key);
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
				selection.push(item._original.thread.threadId);
			});
		}
		this.setState({ selectAll, selection });
	}
	isSelected(key) {
		return this.state.selection.includes(key);
	}
	render() {
		const { toggleSelection, toggleAll, isSelected } = this;
		const { selectAll } = this.state;
		const {
			threads,
			rawFilterData,
			characters,
			tags,
			isThreadFilterCardHidden,
			threadFilterHiddenToggle,
			setFilteredCharacterId,
			setFilteredTag
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
				<ThreadFilterCard
					rawFilterData={rawFilterData}
					characters={characters}
					tags={tags}
					isThreadFilterCardHidden={isThreadFilterCardHidden}
					threadFilterHiddenToggle={threadFilterHiddenToggle}
					setFilteredCharacterId={setFilteredCharacterId}
					setFilteredTag={setFilteredTag}
				/>
				<CheckboxTable
					// eslint-disable-next-line no-return-assign
					ref={r => this.checkboxTable = r}
					className="-striped"
					data={getData(threads)}
					columns={columns}
					defaultSorted={[
						{
							id: 'status.LastPostDate',
							desc: true
						}
					]}
					showPaginationTop
					SubComponent={row => <ThreadTableSubComponent threadData={row.original} />}
					{...checkboxProps}
				/>
			</div>
		);
	}
}
ThreadTable.propTypes = propTypes;
export default ThreadTable;
