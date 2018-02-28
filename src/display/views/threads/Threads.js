import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from './components/ThreadTable';
import { setFilteredCharacterId, setFilteredTag, toggleIsThreadFilterCardHidden, fetchCharacters, upsertThread, openUntrackThreadModal, bulkUpdateThreads, openBulkUntrackThreadsModal, openUpsertThreadModal } from '../../../infrastructure/actions';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool,
	isQueue: PropTypes.bool,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

const defaultProps = {
	isArchive: false,
	isQueue: false
};

function mapStateToProps(state) {
	const {
		threadFilter,
		characters,
		ui
	} = state;
	return {
		threadFilter,
		characters,
		isThreadFilterCardHidden: ui.isThreadFilterCardHidden
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
		this.bulkToggleThreadsAreArchived = this.bulkToggleThreadsAreArchived.bind(this);
		this.bulkToggleThreadsAreMarkedQueued = this.bulkToggleThreadsAreMarkedQueued.bind(this);
		this.isThreadFilterCardHiddenToggle = this.isThreadFilterCardHiddenToggle.bind(this);
		this.openUntrackThreadModal = this.openUntrackThreadModal.bind(this);
		this.openBulkUntrackThreadsModal = this.openBulkUntrackThreadsModal.bind(this);
		this.openEditThreadModal = this.openEditThreadModal.bind(this);
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
		this.setFilteredTag = this.setFilteredTag.bind(this);
		this.toggleThreadIsArchived = this.toggleThreadIsArchived.bind(this);
		this.toggleThreadIsMarkedQueued = this.toggleThreadIsMarkedQueued.bind(this);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}
	setFilteredCharacterId(characterId) {
		const { dispatch } = this.props;
		dispatch(setFilteredCharacterId(characterId));
	}
	setFilteredTag(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredTag(e.target.value));
	}
	isThreadFilterCardHiddenToggle() {
		const { dispatch, isThreadFilterCardHidden } = this.props;
		dispatch(toggleIsThreadFilterCardHidden(isThreadFilterCardHidden));
	}
	toggleThreadIsArchived(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		dispatch(upsertThread(updatedThread));
	}
	toggleThreadIsMarkedQueued(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, dateMarkedQueued: thread.dateMarkedQueued ? null : new Date(Date.now())
		};
		dispatch(upsertThread(updatedThread));
	}
	openUntrackThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUntrackThreadModal(thread));
	}
	openEditThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUpsertThreadModal(thread));
	}
	openBulkUntrackThreadsModal(thread) {
		const { dispatch } = this.props;
		dispatch(openBulkUntrackThreadsModal(thread));
	}
	bulkToggleThreadsAreMarkedQueued(threads) {
		const { dispatch } = this.props;
		const updatedThreads = threads.map(t => ({
			...t, dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now())
		}));
		dispatch(bulkUpdateThreads(updatedThreads));
	}
	bulkToggleThreadsAreArchived(threads) {
		const { dispatch } = this.props;
		const updatedThreads = threads.map(t => ({
			...t, isArchived: !t.isArchived
		}));
		dispatch(bulkUpdateThreads(updatedThreads));
	}
	render() {
		const {
			characters,
			columns,
			filteredThreads,
			isArchive,
			isQueue,
			isThreadFilterCardHidden,
			tags,
			threadFilter
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							bulkToggleThreadsAreArchived={this.bulkToggleThreadsAreArchived}
							bulkToggleThreadsAreMarkedQueued={this.bulkToggleThreadsAreMarkedQueued}
							openBulkUntrackThreadsModal={this.openBulkUntrackThreadsModal}
							characters={characters}
							columns={columns}
							isArchive={isArchive}
							isQueue={isQueue}
							isThreadFilterCardHidden={isThreadFilterCardHidden}
							openUntrackThreadModal={this.openUntrackThreadModal}
							openEditThreadModal={this.openEditThreadModal}
							rawFilterData={threadFilter}
							setFilteredCharacterId={this.setFilteredCharacterId}
							setFilteredTag={this.setFilteredTag}
							tags={tags}
							threadFilterHiddenToggle={this.isThreadFilterCardHiddenToggle}
							threads={filteredThreads}
							toggleThreadIsArchived={this.toggleThreadIsArchived}
							toggleThreadIsMarkedQueued={this.toggleThreadIsMarkedQueued}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
Threads.defaultProps = defaultProps;
export default connect(mapStateToProps)(Threads);
