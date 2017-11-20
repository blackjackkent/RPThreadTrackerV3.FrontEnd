import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewCharacterFormCard from '../components/characters/NewCharacterFormCard';
import { generateRandomThread, fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchActiveThreads, fetchCharacters } from '../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getQueuedThreads, getRecentActivity } from '../../infrastructure/selectors';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		characters
	} = state;
	return {
		characters
	};
}

class ManageCharacters extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}

	render() {
		const {
			characters
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col xs="12" md="6">
						<NewCharacterFormCard />
					</Col>
					<Col xs="12" md="6">
						Character list
					</Col>
				</Row>
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps)(ManageCharacters);
