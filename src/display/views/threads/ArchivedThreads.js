import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_archiveColumns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { getUi } from '../../../infrastructure/selectors/common';
import * as actions from '../../../infrastructure/actions';
import * as selectors from '../../../infrastructure/selectors';

const propTypes = {
	fetchArchivedThreads: PropTypes.func.isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
	const { archivedThreads } = state;
	const characters = selectors.getArchivedThreadCharacters(state);
	const partners = selectors.getArchivedThreadPartners(state);
	const tags = selectors.getArchivedThreadTags(state);
	const filteredThreads = selectors.getArchivedFilteredThreads(state);
	const lastPosters = selectors.getArchivedThreadLastPosters(state);
	return {
		archivedThreads,
		filteredThreads,
		characters,
		partners,
		lastPosters,
		tags
	};
}

class ArchivedThreads extends Component {
	componentDidMount() {
		const { archivedThreads, fetchArchivedThreads } = this.props;
		if (!archivedThreads || !archivedThreads.length) {
			fetchArchivedThreads();
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
				isArchive
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

ArchivedThreads.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchArchivedThreads: actions.fetchArchivedThreads
})(ArchivedThreads);
