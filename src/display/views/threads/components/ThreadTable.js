import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultFilter from './_defaultFilter';
// import CheckboxTable from './CheckboxTable';
import ThreadBulkUpdateControls from './ThreadBulkUpdateControls';
import ThreadTableSubComponent from './ThreadTableSubComponent';
import TagFilterSelect from './TagFilterSelect';
import ThreadRefreshButton from './ThreadRefreshButton';
import Style from '../_styles';
import { filterDuplicatesFromArray, flattenArrayOfArrays, sortTags } from '~/utility';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import getTdProps from './_getTdProps';
import {
	useUntrackThreadMutation,
	useUpdateThreadMutation
} from '~/infrastructure/hooks/mutations';
import { toast } from 'react-toastify';
import GenericConfirmationModal from '~/display/shared/modals/GenericConfirmationModal';
import { useExpanded, useSortBy, useTable } from 'react-table';

const propTypes = {
	statusThreads: PropTypes.arrayOf(PropTypes.shape({})),
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired
};

function getData(filteredThreads) {
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

const CheckboxTable = () => {
	return <div />;
};

const ThreadTable = ({ statusThreads, isLoading, getColumns }) => {
	const { data: userSettings } = useUserSettingsQuery();

	const [filteredThreads, setFilteredThreads] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [filteredTag, setFilteredTag] = useState(undefined);
	const [tags, setTags] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [partners, setPartners] = useState([]);
	const [lastPosters, setLastPosters] = useState([]);

	const [isUntrackThreadModalOpen, setIsUntrackThreadModalOpen] = useState(false);
	const [actedThread, setActedThread] = useState(null);
	const { untrackThread, isLoading: isUntrackThreadLoading } = useUntrackThreadMutation();
	const { updateThread } = useUpdateThreadMutation();
	const submitUntrackThread = () => {
		untrackThread(actedThread)
			.then(() => {
				setIsUntrackThreadModalOpen(false);
				toast.success('Thread untracked!');
			})
			.catch(() => {
				toast.error(`There was an error untracking this thread.`);
			});
	};
	const openUntrackThreadModal = (thread) => {
		setActedThread(thread);
		setIsUntrackThreadModalOpen(true);
	};

	const getTagsFromThreads = (threads) => {
		const tagArrays = threads.map((t) => t.thread.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened, 'tagText');
		filtered.sort(sortTags);
		return filtered;
	};
	const getCharactersFromThreads = (threads) => {
		const characterList = threads.map((t) => t.thread.character);
		return filterDuplicatesFromArray(characterList, 'characterId');
	};
	const getPartnersFromThreads = (threads) => {
		const partnerList = threads.map((t) => t.thread.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partnerList);
	};
	const getLastPostersFromThreads = (threads) => {
		const lastPosterList = threads.map((s) => s.status?.lastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosterList);
	};
	useEffect(() => {
		if (!statusThreads.length) {
			setTags([]);
			setSelectedItems([]);
			setCharacters([]);
			setPartners([]);
			setLastPosters([]);
			return;
		}
		setTags(getTagsFromThreads(statusThreads));
		setCharacters(getCharactersFromThreads(statusThreads));
		setPartners(getPartnersFromThreads(statusThreads));
		setLastPosters(getLastPostersFromThreads(statusThreads));
	}, [statusThreads]);

	useEffect(() => {
		let threads = [].concat(statusThreads);
		if (filteredTag) {
			threads = threads.filter((t) => {
				if (!t.thread || !t.thread.threadTags) {
					return false;
				}
				return t.thread.threadTags.filter((tt) => tt.tagText === filteredTag).length > 0;
			});
		}
		setFilteredThreads(threads);
	}, [statusThreads, filteredTag]);

	const onSelectionChanged = (newSelectedItems) => {
		setSelectedItems(newSelectedItems);
	};

	const executeBulkAction = (func) => {
		const items = selectedItems.map((t) => t.thread);
		func(items);
	};

	const bulkToggleThreadsAreMarkedQueued = (threads) => {
		const updatedThreads = threads.map((t) => ({
			...t,
			dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now()),
			isArchived: false
		}));
		bulkUpdateThreads(updatedThreads);
	};

	const bulkToggleThreadsAreArchived = (threads) => {
		const updatedThreads = threads.map((t) => ({
			...t,
			isArchived: !t.isArchived,
			dateMarkedQueued: null
		}));
		bulkUpdateThreads(updatedThreads);
	};

	const refreshThreads = (isArchivePage) => {
		if (!isArchivePage) {
			fetchActiveThreads();
		} else {
			fetchArchivedThreads();
		}
	};

	const updateThreadTablePageSize = (size) => {
		updateUserSettings({
			...userSettings,
			threadTablePageSize: size
		});
	};

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns: React.useMemo(() => getColumns(characters, partners, lastPosters), []),
			data: React.useMemo(() => getData(filteredThreads), [filteredThreads]),
			initialState: {
				sortBy: React.useMemo(() => [
					{
						id: 'status.lastPostDate',
						desc: true
					}
				])
			}
		},
		useSortBy,
		useExpanded
	);
	console.log(getData(filteredThreads));

	return (
		<Style className="animated fadeIn threads-container">
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				setIsModalOpen={setIsUntrackThreadModalOpen}
				submitForm={submitUntrackThread}
				submitButtonText="Untrack"
				closeButtonText="Cancel"
				isLoading={isUntrackThreadLoading}
				data={actedThread}
				headerText="Confirm Thread Untracking"
				bodyText={
					<span>
						Are you sure you want to untrack <strong>{actedThread?.userTitle}</strong>?
					</span>
				}
			/>
			<Row>
				<Col>
					<div>
						<Row>
							<Col xs="12" sm="6" xl="5">
								<TagFilterSelect
									setFilteredTag={setFilteredTag}
									tags={tags}
									filteredTag={filteredTag}
								/>
							</Col>
							<Col xs="12" sm="6" xl="5">
								<ThreadBulkUpdateControls
									isArchive={false}
									isQueue={false}
									isAllThreads
									selectedThreadCount={selectedItems.length}
									executeBulkAction={executeBulkAction}
									bulkToggleThreadsAreMarkedQueued={
										bulkToggleThreadsAreMarkedQueued
									}
									bulkToggleThreadsAreArchived={bulkToggleThreadsAreArchived}
									openBulkUntrackThreadsModal={() => {}}
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
									isArchive={false}
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
						<table {...getTableProps()}>
							<thead>
								{headerGroups.map((headerGroup) => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map((column) => (
											<th {...column.getHeaderProps()}>
												{column.render('Header')}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()}>
								{rows.map((row, i) => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td {...cell.getCellProps()}>
														{cell.render('Cell')}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
						<CheckboxTable
							className="-striped"
							data={getData(filteredThreads)}
							noDataText={isLoading ? 'Loading...' : 'No Threads Found'}
							defaultPageSize={userSettings?.threadTablePageSize || 10}
							onPageSizeChange={updateThreadTablePageSize}
							columns={getColumns(characters, partners, lastPosters)}
							tdProps={() =>
								getTdProps(
									openUntrackThreadModal,
									() => {},
									() => {},
									() => {}
								)
							}
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
							onSelectionChanged={onSelectionChanged}
						/>
					</div>
				</Col>
			</Row>
		</Style>
	);
};
ThreadTable.propTypes = propTypes;
export default ThreadTable;
