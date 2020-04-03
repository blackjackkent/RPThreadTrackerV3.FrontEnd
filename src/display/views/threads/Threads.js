import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Style from './_styles';
import { getIsLoadingIconVisible } from '../../../infrastructure/selectors';
import * as actions from '../../../infrastructure/actions';

const propTypes = {
	Renderable: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	bulkUpdateThreads: PropTypes.func.isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	fetchActiveThreads: PropTypes.func.isRequired,
	fetchArchivedThreads: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	updateUserSettings: PropTypes.func.isRequired,
	userSettings: PropTypes.shape({
		threadTablePageSize: PropTypes.number
	}).isRequired
};

function mapStateToProps(state) {
	const { threadFilter, characters, userSettings } = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		threadFilter,
		characters,
		userSettings,
		isLoadingIconVisible
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);

		this.bulkToggleThreadsAreArchived = this.bulkToggleThreadsAreArchived.bind(this);
		this.bulkToggleThreadsAreMarkedQueued = this.bulkToggleThreadsAreMarkedQueued.bind(this);
		this.toggleThreadIsArchived = this.toggleThreadIsArchived.bind(this);
		this.toggleThreadIsMarkedQueued = this.toggleThreadIsMarkedQueued.bind(this);
		this.refreshThreads = this.refreshThreads.bind(this);
		this.updateThreadTablePageSize = this.updateThreadTablePageSize.bind(this);
	}

	componentDidMount() {
		const { characters, fetchCharacters } = this.props;
		if (!characters || !characters.length) {
			fetchCharacters();
		}
	}

	toggleThreadIsArchived(thread) {
		const { upsertThread } = this.props;
		const updatedThread = {
			...thread,
			isArchived: !thread.isArchived,
			dateMarkedQueued: null
		};
		upsertThread(updatedThread);
	}

	toggleThreadIsMarkedQueued(thread) {
		const { upsertThread } = this.props;
		const updatedThread = {
			...thread,
			dateMarkedQueued: thread.dateMarkedQueued ? null : new Date(Date.now()),
			isArchived: false
		};
		upsertThread(updatedThread);
	}

	bulkToggleThreadsAreMarkedQueued(threads) {
		const { bulkUpdateThreads } = this.props;
		const updatedThreads = threads.map((t) => ({
			...t,
			dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now()),
			isArchived: false
		}));
		bulkUpdateThreads(updatedThreads);
	}

	bulkToggleThreadsAreArchived(threads) {
		const { bulkUpdateThreads } = this.props;
		const updatedThreads = threads.map((t) => ({
			...t,
			isArchived: !t.isArchived,
			dateMarkedQueued: null
		}));
		bulkUpdateThreads(updatedThreads);
	}

	refreshThreads(isArchivePage) {
		const { fetchActiveThreads, fetchArchivedThreads } = this.props;
		if (!isArchivePage) {
			fetchActiveThreads();
		} else {
			fetchArchivedThreads();
		}
	}

	updateThreadTablePageSize(size) {
		const { userSettings, updateUserSettings } = this.props;
		updateUserSettings({
			...userSettings,
			threadTablePageSize: size
		});
	}

	render() {
		const {
			characters,
			Renderable,
			threadFilter,
			isLoadingIconVisible,
			userSettings,
			openBulkUntrackThreadsModal,
			openUntrackThreadModal,
			openUpsertThreadModal,
			setFilteredTag
		} = this.props;
		return (
			<Style className="animated fadeIn threads-container">
				<Row>
					<Col>
						<Renderable
							bulkToggleThreadsAreArchived={this.bulkToggleThreadsAreArchived}
							bulkToggleThreadsAreMarkedQueued={this.bulkToggleThreadsAreMarkedQueued}
							openBulkUntrackThreadsModal={openBulkUntrackThreadsModal}
							characters={characters}
							openUntrackThreadModal={openUntrackThreadModal}
							openEditThreadModal={openUpsertThreadModal}
							setFilteredTag={setFilteredTag}
							threadFilter={threadFilter}
							toggleThreadIsArchived={this.toggleThreadIsArchived}
							toggleThreadIsMarkedQueued={this.toggleThreadIsMarkedQueued}
							isLoadingIconVisible={isLoadingIconVisible}
							refreshThreads={this.refreshThreads}
							threadTablePageSize={userSettings.threadTablePageSize}
							updateThreadTablePageSize={this.updateThreadTablePageSize}
						/>
					</Col>
				</Row>
			</Style>
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps, {
	setFilteredTag: actions.setFilteredTag,
	bulkUpdateThreads: actions.bulkUpdateThreads,
	fetchCharacters: actions.fetchCharacters,
	fetchActiveThreads: actions.fetchActiveThreads,
	fetchArchivedThreads: actions.fetchArchivedThreads,
	upsertThread: actions.upsertThread,
	openBulkUntrackThreadsModal: actions.openBulkUntrackThreadsModal,
	openUpsertThreadModal: actions.openUpsertThreadModal,
	openUntrackThreadModal: actions.openUntrackThreadModal,
	updateUserSettings: actions.updateUserSettings
})(Threads);
