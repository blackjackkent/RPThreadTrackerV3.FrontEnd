import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';

const CheckboxTableHOC = checkboxHOC(ReactTable);
const propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	defaultFilterMethod: PropTypes.func.isRequired,
	defaultSorted: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	getTdProps: PropTypes.func.isRequired,
	noDataText: PropTypes.string.isRequired,
	onSelectionChanged: PropTypes.func.isRequired,
	SubComponent: PropTypes.func.isRequired,
	defaultPageSize: PropTypes.number.isRequired,
	onPageSizeChange: PropTypes.func.isRequired
};

class CheckboxTable extends React.Component {
	constructor() {
		super();
		this.state = {
			selection: [],
			selectAll: false
		};
		this.toggleSelection = this.toggleSelection.bind(this);
		this.toggleAll = this.toggleAll.bind(this);
		this.isSelected = this.isSelected.bind(this);
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
		this.props.onSelectionChanged(selection);
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
		this.props.onSelectionChanged(selection);
	}
	isSelected(key) {
		// eslint-disable-next-line no-underscore-dangle
		return this.state.selection.findIndex(s => s._id === key) > -1;
	}
	clearSelection() {
		this.setState({ selectAll: false, selection: [] });
		this.props.onSelectionChanged([]);
	}
	render() {
		const { toggleSelection, toggleAll, isSelected } = this;
		const { selectAll } = this.state;
		const {
			data,
			columns,
			noDataText,
			defaultFilterMethod,
			SubComponent,
			getTdProps,
			defaultSorted,
			defaultPageSize,
			onPageSizeChange
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
				<CheckboxTableHOC
					// eslint-disable-next-line no-return-assign
					ref={r => this.checkboxTable = r}
					className="-striped"
					data={data}
					noDataText={noDataText}
					defaultPageSize={defaultPageSize}
					onPageSizeChange={onPageSizeChange}
					columns={columns}
					getTdProps={getTdProps}
					defaultSorted={defaultSorted}
					defaultFilterMethod={defaultFilterMethod}
					showPaginationTop
					SubComponent={SubComponent}
					{...checkboxProps}
				/>
			</div>
		);
	}
}
CheckboxTable.propTypes = propTypes;
export default CheckboxTable;
