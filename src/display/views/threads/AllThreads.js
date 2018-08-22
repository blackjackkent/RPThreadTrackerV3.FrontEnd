import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_allThreadsColumns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { fetchActiveThreads } from '../../../infrastructure/actions';
import { getAllActiveFilteredThreads, getActiveThreadCharacters, getActiveThreadPartners, getActiveThreadLastPosters, getActiveThreadTags } from '../../../infrastructure/selectors';

const propTypes = {
	fetchActiveThreads: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.string).isRequired,
	lastPosters: PropTypes.arrayOf(PropTypes.string).isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getAllActiveFilteredThreads(state);
	const characters = getActiveThreadCharacters(state);
	const partners = getActiveThreadPartners(state);
	const lastPosters = getActiveThreadLastPosters(state);
	const tags = getActiveThreadTags(state);
	return {
		activeThreads,
		filteredThreads,
		characters,
		partners,
		lastPosters,
		tags
	};
}

class MyTurnThreads extends Component {
	componentDidMount() {
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			this.props.fetchActiveThreads();
		}
	}

	render() {
		const {
			filteredThreads,
			openUntrackThreadModal,
			openEditThreadModal,
			toggleThreadIsArchived,
			toggleThreadIsMarkedQueued,
			characters,
			partners,
			lastPosters,
			tags
		} = this.props;
		return (
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
				tags={tags}
				isAllThreads
				columns={getColumns(characters, partners, lastPosters)}
				tdProps={getTdProps(
					openUntrackThreadModal,
					openEditThreadModal,
					toggleThreadIsArchived,
					toggleThreadIsMarkedQueued
				)}
			/>
		);
	}
}

MyTurnThreads.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchActiveThreads
})(MyTurnThreads);
