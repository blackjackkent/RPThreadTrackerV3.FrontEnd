import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_columns';
import getTdProps from './components/_getTdProps';
import ThreadTable from './components/ThreadTable';
import { fetchActiveThreads } from '../../../infrastructure/actions';
import { getMyTurnFilteredThreads } from '../../../infrastructure/selectors';
import { getCharactersFromThreadList, getPartnersFromThreadList, getLastPostersFromThreadList } from '../../../utility';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	lastPosters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getMyTurnFilteredThreads(state);
	const characters = getCharactersFromThreadList(filteredThreads);
	const partners = getPartnersFromThreadList(filteredThreads);
	const lastPosters = getLastPostersFromThreadList(filteredThreads);
	return {
		activeThreads,
		filteredThreads,
		characters,
		partners,
		lastPosters
	};
}

class MyTurnThreads extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			dispatch(fetchActiveThreads());
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
			lastPosters
		} = this.props;
		return (
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
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
export default connect(mapStateToProps)(MyTurnThreads);
