import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultFilter from './_defaultFilter';
import CheckboxTable from './CheckboxTable';
import ThreadBulkUpdateControls from './ThreadBulkUpdateControls';
import ThreadTableSubComponent from './ThreadTableSubComponent';
import TagFilterSelect from './TagFilterSelect';
import ThreadRefreshButton from './ThreadRefreshButton';
import Style from '../_styles';
import { useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import { filterDuplicatesFromArray, flattenArrayOfArrays, sortTags } from '~/utility';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import getTdProps from './_getTdProps';

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

const ThreadTable = ({ statusThreads, isLoading, getColumns }) => {
	const { data: userSettings } = useUserSettingsQuery();
	const [isLoadingIconVisible, setIsLoadingIconVisible] = useState(false);
	const [filteredThreads, setFilteredThreads] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [filteredTag, setFilteredTag] = useState(null);
	const [threadFilter, setThreadFilter] = useState({});
	const [tags, setTags] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [partners, setPartners] = useState([]);
	const [lastPosters, setLastPosters] = useState([]);
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
	return (
		<Style className="animated fadeIn threads-container">
			<Row>
				<Col>
					<div>
						<Row>
							<Col xs="12" sm="6" xl="5">
								<TagFilterSelect
									setFilteredTag={setFilteredTag}
									tags={tags}
									filteredTag={threadFilter.filteredTag}
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
						<CheckboxTable
							className="-striped"
							data={getData(filteredThreads)}
							noDataText={isLoading ? 'Loading...' : 'No Threads Found'}
							defaultPageSize={userSettings?.threadTablePageSize || 10}
							onPageSizeChange={updateThreadTablePageSize}
							columns={getColumns(characters, partners, lastPosters)}
							tdProps={getTdProps(
								() => {},
								() => {},
								() => {},
								() => {}
							)}
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
