import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { generateRandomThread, fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchThreads, fetchCharacters } from '../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getAllActiveThreads, getArchivedThreads, getQueuedThreads, getRecentActivity } from '../../infrastructure/selectors';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		threads
	} = state;
	const allActiveThreads = getAllActiveThreads(state);
	return {
		threads,
		allActiveThreads
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.threads || !this.props.threads.length) {
			dispatch(fetchThreads());
		}
	}

	render() {
		const {
			allActiveThreads
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							threads={allActiveThreads}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
