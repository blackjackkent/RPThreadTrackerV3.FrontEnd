import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { generateRandomThread, fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchThreads, fetchCharacters, setFilteredCharacterId } from '../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getAllActiveThreads, getArchivedThreads, getQueuedThreads, getRecentActivity } from '../../infrastructure/selectors';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		threads,
		threadFilter
	} = state;
	const allActiveThreads = getAllActiveThreads(state);
	return {
		threads,
		allActiveThreads,
		threadFilter
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.threads || !this.props.threads.length) {
			dispatch(fetchThreads());
		}
	}

	setFilteredCharacterId(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredCharacterId(e.target.value));
	}

	render() {
		const {
			allActiveThreads, threadFilter
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							threads={allActiveThreads} threadFilter={threadFilter} setFilteredCharacterId={this.setFilteredCharacterId}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
