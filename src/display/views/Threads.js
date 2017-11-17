import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { setFilteredCharacterId, toggleIsThreadFilterCardHidden } from '../../infrastructure/actions';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		threadFilter,
		ui
	} = state;
	return {
		threadFilter,
		isThreadFilterCardHidden: ui.isThreadFilterCardHidden
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
		this.isThreadFilterCardHiddenToggle = this.isThreadFilterCardHiddenToggle.bind(this);
	}
	setFilteredCharacterId(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredCharacterId(e.target.value));
	}
	isThreadFilterCardHiddenToggle() {
		const { dispatch, isThreadFilterCardHidden } = this.props;
		dispatch(toggleIsThreadFilterCardHidden(isThreadFilterCardHidden));
	}
	render() {
		const {
			filteredThreads, threadFilter, isThreadFilterCardHidden
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							threads={filteredThreads}
							rawFilterData={threadFilter}
							setFilteredCharacterId={this.setFilteredCharacterId}
							isThreadFilterCardHidden={isThreadFilterCardHidden}
							threadFilterHiddenToggle={this.isThreadFilterCardHiddenToggle}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
