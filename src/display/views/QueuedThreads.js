import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Threads from './Threads';
import { fetchActiveThreads } from '../../infrastructure/actions';
import { getQueuedFilteredThreads } from '../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getQueuedFilteredThreads(state);
	return {
		activeThreads,
		filteredThreads
	};
}

class ArchivedThreads extends Component {
	componentDidMount() {
		this.initView(this.props);
	}
	componentWillReceiveProps(nextProps) {
		this.initView(nextProps);
	}

	initView(props) {
		const { dispatch } = props;
		if (!props.activeThreads || !props.activeThreads.length) {
			dispatch(fetchActiveThreads());
		}
	}

	render() {
		const {
			filteredThreads
		} = this.props;
		return (
			<Threads {...this.props} filteredThreads={filteredThreads} />
		);
	}
}

ArchivedThreads.propTypes = propTypes;
export default connect(mapStateToProps)(ArchivedThreads);
