import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_columns';
import ThreadTable from './components/ThreadTable';
import { fetchActiveThreads } from '../../../infrastructure/actions';
import { getMyTurnFilteredThreads } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getMyTurnFilteredThreads(state);
	return {
		activeThreads,
		filteredThreads
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
			filteredThreads
		} = this.props;
		return (
			<ThreadTable
				{...this.props}
				filteredThreads={filteredThreads}
				columns={getColumns()}
			/>
		);
	}
}

MyTurnThreads.propTypes = propTypes;
export default connect(mapStateToProps)(MyTurnThreads);
