import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { setFilteredCharacterId } from '../../infrastructure/actions';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		threadFilter
	} = state;
	return {
		threadFilter
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
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
