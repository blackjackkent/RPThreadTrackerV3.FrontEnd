import React from 'react';
import PropTypes from 'prop-types';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import ReactTable from 'react-table';
import colors from '../../../../infrastructure/constants/colors';
import ReactTableContainer from '../../../shared/styled/ReactTableContainer';

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
	onPageSizeChange: PropTypes.func.isRequired,
	useLightTheme: PropTypes.bool
};

class CheckboxTable extends React.Component {
	constructor() {
		super();
		this.state = {
			selection: [],
			selectAll: false
		};
		this.toggleSelection = this.toggleSelection.bind(this);
		this.getTrProps = this.getTrProps.bind(this);
		this.getTdProps = this.getTdProps.bind(this);
		this.toggleAll = this.toggleAll.bind(this);
		this.isSelected = this.isSelected.bind(this);
		this.clearSelection = this.clearSelection.bind(this);
	}

	getTrProps(state, rowInfo) {
		if (rowInfo) {
			const { useLightTheme } = this.props;
			// eslint-disable-next-line no-underscore-dangle
			if (this.isSelected(rowInfo.original._id)) {
				const backgroundColor = useLightTheme
					? colors.BASE_BLUE_OPACITY(0.3)
					: colors.BASE_BLUE_OPACITY(0.5);

				return {
					style: {
						backgroundColor
					}
				};
			}
		}

		return {};
	}

	getTdProps(state, rowInfo, column, instance) {
		const { getTdProps } = this.props;
		return getTdProps(state, rowInfo, column, instance, () => {
			if (rowInfo) {
				const row = rowInfo.original;
				// eslint-disable-next-line no-underscore-dangle
				this.toggleSelection(`select-${row._id}`, false, row);
			}
		});
	}

	toggleSelection(key, shift, row) {
		let { selection } = this.state;
		const { data, onSelectionChanged } = this.props;
		// eslint-disable-next-line no-underscore-dangle
		const keyIndex = selection.findIndex((s) => `select-${s._id}` === key);
		if (keyIndex >= 0) {
			selection = [...selection.slice(0, keyIndex), ...selection.slice(keyIndex + 1)];
		} else {
			selection.push(row);
		}
		const selectAll = selection.length === data.length;
		this.setState({
			selection,
			selectAll
		});
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
		this.setState({
			selectAll: !selectAll,
			selection
		});
		onSelectionChanged(selection);
	}

	isSelected(key) {
		const { selection } = this.state;
		// eslint-disable-next-line no-underscore-dangle
		return selection.findIndex((s) => s._id === key) > -1;
	}

	clearSelection() {
		const { onSelectionChanged } = this.props;
		this.setState({
			selectAll: false,
			selection: []
		});
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
			<ReactTableContainer>
				<CheckboxTableHOC
					ref={
						/* istanbul ignore next */
						(r) => (this.checkboxTable = r) // eslint-disable-line no-return-assign
					}
					className="-striped"
					data={data}
					noDataText={noDataText}
					defaultPageSize={defaultPageSize}
					onPageSizeChange={onPageSizeChange}
					columns={columns}
					getTrProps={this.getTrProps}
					getTdProps={this.getTdProps}
					defaultSorted={defaultSorted}
					defaultFilterMethod={defaultFilterMethod}
					showPaginationTop
					SubComponent={SubComponent}
					{...checkboxProps}
				/>
			</ReactTableContainer>
		);
	}
}
CheckboxTable.propTypes = propTypes;
CheckboxTable.defaultProps = {
	useLightTheme: false
};

export default CheckboxTable;
