import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_archiveColumns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { fetchArchivedThreads } from '../../../infrastructure/actions';
import { getArchivedFilteredThreads, getArchivedThreadCharacters, getArchivedThreadPartners, getArchivedThreadTags } from '../../../infrastructure/selectors';
const propTypes = {
	dispatch: PropTypes.func.isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.string).isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { archivedThreads } = state;
	const characters = getArchivedThreadCharacters(state);
	const partners = getArchivedThreadPartners(state);
	const tags = getArchivedThreadTags(state);
	const filteredThreads = getArchivedFilteredThreads(state);
	return {
		archivedThreads,
		filteredThreads,
		characters,
		partners,
		tags
	};
}

class ArchivedThreads extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.archivedThreads || !this.props.archivedThreads.length) {
			dispatch(fetchArchivedThreads());
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
			tags
		} = this.props;
		return (
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
				tags={tags}
				isArchive
				columns={getColumns(characters, partners)}
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
export default connect(mapStateToProps)(ArchivedThreads);
