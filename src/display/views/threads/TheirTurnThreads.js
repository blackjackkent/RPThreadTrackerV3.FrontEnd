import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getColumns from './components/_columns';
import Threads from './Threads';
import { fetchActiveThreads } from '../../../infrastructure/actions';
import { getTheirTurnFilteredThreads, getActiveThreadTags } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const { activeThreads } = state;
	const filteredThreads = getTheirTurnFilteredThreads(state);
	const tags = getActiveThreadTags(state);
	return {
		activeThreads,
		filteredThreads,
		tags
	};
}

class TheirTurnThreads extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			dispatch(fetchActiveThreads());
		}
	}

	render() {
		const {
			filteredThreads,
			tags
		} = this.props;
		return (
			<Threads
				{...this.props}
				filteredThreads={filteredThreads}
				columns={getColumns()}
				tags={tags}
			/>
		);
	}
}

TheirTurnThreads.propTypes = propTypes;
export default connect(mapStateToProps)(TheirTurnThreads);
