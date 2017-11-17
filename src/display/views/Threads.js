import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { fetchThreads, setFilteredCharacterId } from '../../infrastructure/actions';
import { getActiveFilteredThreads } from '../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		threadFilter
	} = state;
	const filteredThreads = getActiveFilteredThreads(state);
	return {
		filteredThreads,
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
			filteredThreads, threadFilter
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							threads={filteredThreads}
							rawFilterData={threadFilter}
							setFilteredCharacterId={this.setFilteredCharacterId}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
