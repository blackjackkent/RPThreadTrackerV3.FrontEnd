import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { usePagination, useSortBy, useTable } from 'react-table';
import columns from '~/infrastructure/constants/columns';
import getColumns from './_columns';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadCounts: PropTypes.shape({}).isRequired,
	isLoading: PropTypes.bool.isRequired,
	onUntrackCharacterClick: PropTypes.func.isRequired,
	onToggleHiatusClick: PropTypes.func.isRequired,
	onEditCharacterClick: PropTypes.func.isRequired
};

function formatDataForTable(characters) {
	const data = characters?.map((item) => {
		// eslint-disable-next-line no-underscore-dangle
		const _id = item.characterId;
		return {
			_id,
			...item
		};
	});
	return data;
}

const CurrentCharacterTable = ({
	characters,
	threadCounts,
	isLoading,
	onUntrackCharacterClick,
	onToggleHiatusClick,
	onEditCharacterClick
}) => {
	const tableData = React.useMemo(() => formatDataForTable(characters), [characters]);
	const getCellProps = (cell) => ({
		onClick: () => {
			const { column, row } = cell;
			if (cell.column.id === columns.DELETE_BUTTON.key) {
				onUntrackCharacterClick(row.original);
				return;
			}
			if (column.id === columns.EDIT_BUTTON.key) {
				onEditCharacterClick(row.original);
				return;
			}
			if (column.id === columns.TOGGLE_HIATUS_BUTTON.key) {
				onToggleHiatusClick(row.original);
				// eslint-disable-next-line no-useless-return
				return;
			}
		}
	});
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns: React.useMemo(() => getColumns(threadCounts), [threadCounts]),
			data: tableData,
			initialState: {
				pageSize: 10,
				sortBy: React.useMemo(
					() => [
						{
							id: 'characterName',
							desc: true
						}
					],
					[]
				)
			},
			disableSortRemove: true
		},
		useSortBy,
		usePagination
	);
	return (
		<div className="table-wrapper">
			<div className="pagination-controls">
				<div className="pagination-back">
					<button type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{'<<'}
					</button>{' '}
					<button
						type="button"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
					>
						{'<'}
					</button>{' '}
				</div>
				<div className="pagination-data">
					<span className="pagination-page-info">
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
					<span>
						| Go to page:{' '}
						<input
							type="number"
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
								gotoPage(newPage);
							}}
							style={{ width: '100px' }}
						/>
					</span>{' '}
					<select
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}
					>
						{[5, 10, 20, 25, 50, 100].map((size) => (
							<option key={size} value={size}>
								Show {size}
							</option>
						))}
					</select>
				</div>
				<div className="pagination-forward">
					<button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
						{'>'}
					</button>{' '}
					<button
						type="button"
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
					>
						{'>>'}
					</button>{' '}
				</div>
			</div>
			<Table className="tracker-table" dark striped bordered {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr className="tracker-table-titles" {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th
										key={column.id}
										className={
											// eslint-disable-next-line no-nested-ternary
											column.isSorted
												? column.isSortedDesc
													? 'sort-desc'
													: 'sort-asc'
												: ''
										}
									>
										<div
											{...column.getHeaderProps(
												column.getSortByToggleProps()
											)}
										>
											{column.render('Header')}
										</div>
									</th>
								);
							})}
						</tr>
					))}
					{headerGroups.map((headerGroup) => (
						<tr
							className="tracker-table-filters"
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map((column) => (
								<th key={column.id}>
									<div>{column.canFilter ? column.render('Filter') : null}</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className="tracker-table-body" {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<React.Fragment key={row.id}>
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps([getCellProps(cell)])}>
												{cell.render('Cell')}
											</td>
										);
									})}
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
CurrentCharacterTable.propTypes = propTypes;
export default CurrentCharacterTable;
