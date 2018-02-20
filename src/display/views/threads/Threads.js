import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from './components/ThreadTable';
import { setFilteredCharacterId, setFilteredTag, toggleIsThreadFilterCardHidden, fetchCharacters, updateThread, openUntrackThreadModal, bulkUpdateThreads } from '../../../infrastructure/actions';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../../utility';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool,
	isQueue: PropTypes.bool,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
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
	setFilteredCharacterId(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredCharacterId(e.target.value));
	}
	setFilteredTag(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredTag(e.target.value));
	}
	isThreadFilterCardHiddenToggle() {
		const { dispatch, isThreadFilterCardHidden } = this.props;
		dispatch(toggleIsThreadFilterCardHidden(isThreadFilterCardHidden));
	}
	getFilteredThreadTags() {
		const { filteredThreads } = this.props;
		const tagArrays = filteredThreads.map(t => t.thread.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened);
		return filtered;
	}
	toggleThreadIsArchived(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		dispatch(updateThread(updatedThread));
	}
	toggleThreadIsMarkedQueued(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, dateMarkedQueued: thread.dateMarkedQueued ? null : new Date(Date.now())
		};
		dispatch(updateThread(updatedThread));
	}
	openUntrackThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUntrackThreadModal(thread));
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
			threadFilter
		} = this.props;
		const tags = this.getFilteredThreadTags();
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							bulkToggleThreadsAreArchived={this.bulkToggleThreadsAreArchived}
							bulkToggleThreadsAreMarkedQueued={this.bulkToggleThreadsAreMarkedQueued}
							characters={characters}
							columns={columns}
							isArchive={isArchive}
							isQueue={isQueue}
							isThreadFilterCardHidden={isThreadFilterCardHidden}
							openUntrackThreadModal={this.openUntrackThreadModal}
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
