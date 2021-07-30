import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table } from 'reactstrap';
import { useExpanded, useFilters, usePagination, useSortBy, useTable } from 'react-table';
import ThreadTableSubComponent from './ThreadTableSubComponent';
import columns from '~/infrastructure/constants/columns';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	lastPosters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired,
	onUntrackThreadClick: PropTypes.func.isRequired,
	onEditThreadClick: PropTypes.func.isRequired
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
	isLoading,
	onUntrackThreadClick,
	onEditThreadClick
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
				onArchiveTrigger(row.original.thread);
				return;
			}
			if (column.id === columns.QUEUE_BUTTON.key) {
				onQueueTrigger(row.original.thread);
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
		state: { pageIndex, pageSize },
		visibleColumns
	} = useTable(
		{
			columns: React.useMemo(() => getColumns(characters, partners, lastPosters), [
				characters,
				getColumns,
				lastPosters,
				partners
			]),
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
		usePagination
	);
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
		<div>
			<Row>
				<Col xs="12" md="4" />
				<Col xs="12" md="4" />
				<Col xs="12" md="4">
					<div className="pagination">
						<button
							type="button"
							onClick={() => gotoPage(0)}
							disabled={!canPreviousPage}
						>
							{'<<'}
						</button>{' '}
						<button
							type="button"
							onClick={() => previousPage()}
							disabled={!canPreviousPage}
						>
							{'<'}
						</button>{' '}
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
						<span>
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
							{[10, 20, 30, 40, 50].map((size) => (
								<option key={size} value={size}>
									Show {size}
								</option>
							))}
						</select>
					</div>
				</Col>
			</Row>
			<Table className="tracker-table" dark striped bordered {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr className="tracker-table-titles" {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									className={
										// eslint-disable-next-line no-nested-ternary
										column.isSorted
											? column.isSortedDesc
												? 'sort-desc'
												: 'sort-asc'
											: ''
									}
								>
									<div {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
									</div>
								</th>
							))}
						</tr>
					))}
					{headerGroups.map((headerGroup) => (
						<tr
							className="tracker-table-filters"
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map((column) => (
								<th>
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
							<React.Fragment {...row.getRowProps()}>
								<tr {...row.getRowProps()}>
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
