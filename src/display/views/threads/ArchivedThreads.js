import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_archiveColumns';
import ThreadTable from './components/ThreadTable';
import { fetchArchivedThreads } from '../../../infrastructure/actions';
import { getArchivedFilteredThreads } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
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
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
				isArchive
				columns={getColumns()}
			/>
		);
	}
}

ArchivedThreads.propTypes = propTypes;
export default connect(mapStateToProps)(ArchivedThreads);
