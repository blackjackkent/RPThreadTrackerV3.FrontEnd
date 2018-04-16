import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_archiveColumns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { fetchArchivedThreads } from '../../../infrastructure/actions';
import { getArchivedFilteredThreads } from '../../../infrastructure/selectors';
import { getCharactersFromThreadList, getPartnersFromThreadList } from '../../../utility';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { archivedThreads } = state;
	const filteredThreads = getArchivedFilteredThreads(state);
	const characters = getCharactersFromThreadList(filteredThreads);
	const partners = getPartnersFromThreadList(filteredThreads);
	return {
		archivedThreads,
		filteredThreads,
		characters,
		partners
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
			partners
		} = this.props;
		return (
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
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
