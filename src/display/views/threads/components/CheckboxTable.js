import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import ReactTable from 'react-table';
import colors from '../../../../infrastructure/constants/colors';
import ReactTableContainer from '../../../shared/styled/ReactTableContainer';
import { useLightThemeContext } from '~/infrastructure/hooks/contexts';

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

const CheckboxTable = (props) => {
	const [selection, setSelection] = useState([]);
	const [selectAll, setSelectAll] = useState(false);
	const { useLightTheme } = useLightThemeContext();
	let checkboxTable = useRef(null);
	const {
		onSelectionChanged,
		data,
		columns,
		noDataText,
		defaultFilterMethod,
		SubComponent,
		getTdProps,
		defaultSorted,
		defaultPageSize,
		onPageSizeChange
	} = props;

	const toggleSelection = (key, shift, row) => {
		// eslint-disable-next-line no-underscore-dangle
		const keyIndex = selection.findIndex((s) => `select-${s._id}` === key);
		let newSelection = [...selection];
		if (keyIndex >= 0) {
			newSelection = [...newSelection.slice(0, keyIndex), ...selection.slice(keyIndex + 1)];
		} else {
			newSelection.push(row);
		}
		setSelection(newSelection);
		setSelectAll(newSelection.length === data.length);
		onSelectionChanged(newSelection);
	};

	const toggleAll = () => {
		const newSelection = [];
		if (!selectAll) {
			const wrappedInstance = checkboxTable.getWrappedInstance();
			const currentRecords = wrappedInstance.getResolvedState().sortedData;
			currentRecords.forEach((item) => {
				// eslint-disable-next-line no-underscore-dangle
				newSelection.push(item._original);
			});
		}
		setSelectAll(!selectAll);
		setSelection(newSelection);
		onSelectionChanged(newSelection);
	};

	const isSelected = (key) => {
		// eslint-disable-next-line no-underscore-dangle
		return selection.findIndex((s) => s._id === key) > -1;
	};

	const getTrProps = (state, rowInfo) => {
		if (rowInfo) {
			// eslint-disable-next-line no-underscore-dangle
			if (isSelected(rowInfo.original._id)) {
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
	};

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
					(r) => (checkboxTable = r) // eslint-disable-line no-return-assign
				}
				className="-striped"
				data={data}
				noDataText={noDataText}
				defaultPageSize={defaultPageSize}
				onPageSizeChange={onPageSizeChange}
				columns={columns}
				getTdProps={getTdProps}
				getTrProps={getTrProps}
				defaultSorted={defaultSorted}
				defaultFilterMethod={defaultFilterMethod}
				showPaginationTop
				SubComponent={SubComponent}
				{...checkboxProps}
			/>
		</ReactTableContainer>
	);
};
CheckboxTable.propTypes = propTypes;
export default CheckboxTable;
