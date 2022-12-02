import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import {
	useExpanded,
	useFilters,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable
} from 'react-table';
import ThreadTableSubComponent from './ThreadTableSubComponent';
import columns from '~/infrastructure/constants/columns';
import IndeterminateCheckbox from './ThreadTableCheckbox';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.string).isRequired,
	lastPosters: PropTypes.arrayOf(PropTypes.string).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired,
	onUntrackThreadClick: PropTypes.func.isRequired,
	onEditThreadClick: PropTypes.func.isRequired,
	onArchiveThreadClick: PropTypes.func.isRequired,
	onQueueThreadClick: PropTypes.func.isRequired,
	threadTablePageSize: PropTypes.number.isRequired,
	onThreadTablePageSizeChange: PropTypes.func.isRequired,
	onSelectedThreadsChange: PropTypes.func.isRequired
};

function formatDataForTable(filteredThreads) {
	const data = filteredThreads?.map((item) => {
		// eslint-disable-next-line no-underscore-dangle
		const _id = item.thread.threadId;
		return {
			_id,
			...item
		};
	});
	return data;
}

const ThreadTable = ({
	characters,
	partners,
	lastPosters,
	getColumns,
	filteredThreads,
	onUntrackThreadClick,
	onArchiveThreadClick,
	onEditThreadClick,
	onQueueThreadClick,
	threadTablePageSize,
	onThreadTablePageSizeChange,
	onSelectedThreadsChange
}) => {
	const tableData = React.useMemo(() => formatDataForTable(filteredThreads), [filteredThreads]);
	const getCellProps = (cell) => ({
		onClick: () => {
			const { column, row } = cell;
			if (cell.column.id === columns.DELETE_BUTTON.key) {
				onUntrackThreadClick(row.original.thread);
				return;
			}
			if (column.id === columns.EDIT_BUTTON.key) {
				onEditThreadClick(row.original.thread);
				return;
			}
			if (column.id === columns.ARCHIVE_BUTTON.key) {
				onArchiveThreadClick(row.original.thread);
				return;
			}
			if (column.id === columns.QUEUE_BUTTON.key) {
				onQueueThreadClick(row.original.thread);
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
		state: { pageIndex, pageSize },
		selectedFlatRows,
		visibleColumns
	} = useTable(
		{
			columns: React.useMemo(
				() => getColumns(characters, partners, lastPosters),
				[characters, getColumns, lastPosters, partners]
			),
			data: tableData,
			initialState: {
				pageSize: 10,
				sortBy: React.useMemo(
					() => [
						{
							id: 'status.lastPostDate',
							desc: true
						}
					],
					[]
				)
			},
			disableSortRemove: true
		},
		useFilters,
		useSortBy,
		useExpanded,
		usePagination,
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((cols) => [
				{
					id: 'selection',
					/* eslint-disable react/prop-types */
					Header: ({ getToggleAllPageRowsSelectedProps }) => (
						<div className="icon-column">
							<IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
						</div>
					),
					Cell: ({ row: checkboxRow }) => (
						<div className="icon-column">
							<IndeterminateCheckbox {...checkboxRow.getToggleRowSelectedProps()} />
						</div>
					)
					/* eslint-enable react/prop-types */
				},
				...cols
			]);
		}
	);
	useEffect(() => {
		setPageSize(threadTablePageSize);
	}, [threadTablePageSize, setPageSize]);
	useEffect(() => {
		onSelectedThreadsChange(selectedFlatRows);
	}, [onSelectedThreadsChange, selectedFlatRows]);
	const renderRowSubComponent = React.useCallback(
		({ row }) => {
			return (
				<tr className="thread-table-sub-component-wrapper">
					<td colSpan={visibleColumns.length}>
						<ThreadTableSubComponent
							description={row.original.thread.description}
							tags={row.original.thread.threadTags}
						/>
					</td>
				</tr>
			);
		},
		[visibleColumns.length]
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
							onThreadTablePageSizeChange(Number(e.target.value));
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
								<tr
									{...row.getRowProps()}
									className={row.isSelected ? 'is-selected' : ''}
								>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps([getCellProps(cell)])}>
												{cell.render('Cell')}
											</td>
										);
									})}
								</tr>
								{row.isExpanded ? renderRowSubComponent({ row }) : null}
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
ThreadTable.propTypes = propTypes;
export default ThreadTable;
