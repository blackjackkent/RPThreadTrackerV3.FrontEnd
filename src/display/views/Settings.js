import React, { Component } from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, Input, Label, FormText, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangeUsernameCard from '../components/settings/ChangeUsernameCard';
import ChangePasswordCard from '../components/settings/ChangePasswordCard';
import { generateRandomThread, fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchActiveThreads, fetchCharacters } from '../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getQueuedThreads, getRecentActivity } from '../../infrastructure/selectors';

const propTypes = {
};

function mapStateToProps(state) {
	return state;
}

class Settings extends Component {
	render() {
		const { } = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col xs="12" xl="6">
						<ChangeUsernameCard />
					</Col>
					<Col xs="12" xl="6">
						<ChangePasswordCard />
					</Col>
				</Row>
			</div >
		);
	}
}

Settings.propTypes = propTypes;
export default connect(mapStateToProps)(Settings);
