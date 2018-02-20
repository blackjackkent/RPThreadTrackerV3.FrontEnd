import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_archiveColumns';
import Threads from './Threads';
import { fetchArchivedThreads } from '../../../infrastructure/actions';
import { getArchivedFilteredThreads } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const { archivedThreads } = state;
	const filteredThreads = getArchivedFilteredThreads(state);
	return {
		archivedThreads,
		filteredThreads
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
			filteredThreads
		} = this.props;
		return (
			<Threads {...this.props} filteredThreads={filteredThreads} columns={getColumns()} isArchive />
		);
	}
}

ArchivedThreads.propTypes = propTypes;
export default connect(mapStateToProps)(ArchivedThreads);
