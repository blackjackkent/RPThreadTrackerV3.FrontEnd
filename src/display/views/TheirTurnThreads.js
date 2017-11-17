import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Threads from './Threads';
import { fetchActiveThreads } from '../../infrastructure/actions';
import { getTheirTurnFilteredThreads } from '../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getTheirTurnFilteredThreads(state);
	return {
		activeThreads,
		filteredThreads
	};
}

class TheirTurnThreads extends Component {
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

TheirTurnThreads.propTypes = propTypes;
export default connect(mapStateToProps)(TheirTurnThreads);
