import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ThreadBulkUpdateControls from './ThreadBulkUpdateControls';
import TagFilterSelect from './TagFilterSelect';
import ThreadRefreshButton from './ThreadRefreshButton';

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredTag: PropTypes.string,
	setFilteredTag: PropTypes.func.isRequired,
	selectedItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	refreshThreads: PropTypes.func.isRequired,
	isQueuedView: PropTypes.bool.isRequired,
	isArchivedView: PropTypes.bool.isRequired,
	isAllThreadsView: PropTypes.bool.isRequired
};
const defaultProps = {
	filteredTag: null
};

const ThreadTableControls = ({
	tags,
	filteredTag,
	setFilteredTag,
	selectedItems,
	refreshThreads,
	isQueuedView,
	isArchivedView,
	isAllThreadsView
}) => {
	return (
		<>
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
						isArchive={isArchivedView}
						isQueue={isQueuedView}
						isAllThreads={isAllThreadsView}
						selectedThreadCount={selectedItems.length}
						selectedItems={selectedItems}
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
						isArchive={isArchivedView}
						refreshThreads={refreshThreads}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="public-tool-banner">
						Want to share this view publicly? Check out the{' '}
						<Link href="/tools/public" to="/tools/public">
							Public Views tool
						</Link>
						.
					</p>
				</Col>
			</Row>
		</>
	);
};
ThreadTableControls.propTypes = propTypes;
ThreadTableControls.defaultProps = defaultProps;
export default ThreadTableControls;
