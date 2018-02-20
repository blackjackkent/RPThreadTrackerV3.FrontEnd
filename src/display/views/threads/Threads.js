import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from './components/ThreadTable';
import { setFilteredCharacterId, setFilteredTag, toggleIsThreadFilterCardHidden, fetchCharacters, updateThread, openUntrackThreadModal } from '../../../infrastructure/actions';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../../utility';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

const defaultProps = {
	isArchive: false
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
		this.isThreadFilterCardHiddenToggle = this.isThreadFilterCardHiddenToggle.bind(this);
		this.markThreadQueued = this.markThreadQueued.bind(this);
		this.openUntrackThreadModal = this.openUntrackThreadModal.bind(this);
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
		this.setFilteredTag = this.setFilteredTag.bind(this);
		this.toggleThreadIsArchived = this.toggleThreadIsArchived.bind(this);
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
	markThreadQueued(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, dateMarkedQueued: new Date(Date.now())
		};
		dispatch(updateThread(updatedThread));
	}
	openUntrackThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUntrackThreadModal(thread));
	}
	render() {
		const {
			filteredThreads,
			threadFilter,
			isThreadFilterCardHidden,
			characters,
			isArchive,
			columns
		} = this.props;
		const tags = this.getFilteredThreadTags();
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							characters={characters}
							columns={columns}
							isArchive={isArchive}
							isThreadFilterCardHidden={isThreadFilterCardHidden}
							markThreadQueued={this.markThreadQueued}
							openUntrackThreadModal={this.openUntrackThreadModal}
							rawFilterData={threadFilter}
							setFilteredCharacterId={this.setFilteredCharacterId}
							setFilteredTag={this.setFilteredTag}
							tags={tags}
							threadFilterHiddenToggle={this.isThreadFilterCardHiddenToggle}
							threads={filteredThreads}
							toggleThreadIsArchived={this.toggleThreadIsArchived}
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
