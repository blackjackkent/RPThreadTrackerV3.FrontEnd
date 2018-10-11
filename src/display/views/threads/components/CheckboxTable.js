import React from 'react';
import PropTypes from 'prop-types';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import ReactTable from '../../../shared/styled/ReactTable';

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
		let { selection } = this.state;
		const { data, onSelectionChanged } = this.props;
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
		const selectAll = selection.length === data.length;
		this.setState({ selection, selectAll });
		onSelectionChanged(selection);
	}

	toggleAll() {
		const { onSelectionChanged } = this.props;
		const { selectAll } = this.state;
		const selection = [];
		if (!selectAll) {
			const wrappedInstance = this.checkboxTable.getWrappedInstance();
			const currentRecords = wrappedInstance.getResolvedState().sortedData;
			currentRecords.forEach((item) => {
				// eslint-disable-next-line no-underscore-dangle
				selection.push(item._original);
			});
		}
		this.setState({ selectAll: !selectAll, selection });
		onSelectionChanged(selection);
	}

	isSelected(key) {
		const { selection } = this.state;
		// eslint-disable-next-line no-underscore-dangle
		return selection.findIndex(s => s._id === key) > -1;
	}

	clearSelection() {
		const { onSelectionChanged } = this.props;
		this.setState({ selectAll: false, selection: [] });
		onSelectionChanged([]);
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
					ref={
						/* istanbul ignore next */
						r => this.checkboxTable = r // eslint-disable-line no-return-assign
					}
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
