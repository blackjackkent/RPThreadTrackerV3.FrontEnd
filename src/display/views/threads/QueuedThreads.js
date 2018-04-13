import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_queueColumns';
import ThreadTable from './components/ThreadTable';
import { fetchActiveThreads } from '../../../infrastructure/actions';
import { getQueuedFilteredThreads } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getQueuedFilteredThreads(state);
	return {
		activeThreads,
		filteredThreads
	};
}

class QueuedThreads extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			dispatch(fetchActiveThreads());
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
				isQueue
				columns={getColumns()}
			/>
		);
	}
}

QueuedThreads.propTypes = propTypes;
export default connect(mapStateToProps)(QueuedThreads);
