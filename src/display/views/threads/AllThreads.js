import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_allThreadsColumns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { getUi } from '../../../infrastructure/selectors/common';
import * as actions from '../../../infrastructure/actions';
import * as selectors from '../../../infrastructure/selectors';

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
	const filteredThreads = selectors.getActiveFilteredThreads(state);
	const characters = selectors.getActiveThreadCharacters(state);
	const partners = selectors.getActiveThreadPartners(state);
	const lastPosters = selectors.getActiveThreadLastPosters(state);
	const tags = selectors.getActiveThreadTags(state);
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
		const { activeThreads, fetchActiveThreads } = this.props;
		if (!activeThreads || !activeThreads.length) {
			fetchActiveThreads();
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
	fetchActiveThreads: actions.fetchActiveThreads
})(MyTurnThreads);
