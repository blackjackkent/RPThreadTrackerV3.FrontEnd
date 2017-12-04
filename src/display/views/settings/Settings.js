import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SettingsTabNav from './components/SettingsTabNav';
import ChangePasswordPane from './components/ChangePasswordPane';
import UpdateAccountInfoPane from './components/UpdateAccountInfoPane';
import { setActiveSettingsTab } from '../../../infrastructure/actions';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	user: PropTypes.shape({}).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user
	} = state;
	return {
		user,
		activeTab: ui.activeSettingsTab
	};
}

class Settings extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab(tab) {
		const { dispatch } = this.props;
		dispatch(setActiveSettingsTab(tab));
	}
	render() {
		const { activeTab, user } = this.props;
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col>
						<SettingsTabNav setActiveTab={this.setActiveTab} activeTab={activeTab} />
						<TabContent activeTab={activeTab}>
							<ChangePasswordPane />
							<UpdateAccountInfoPane user={user} />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Settings.propTypes = propTypes;
export default connect(mapStateToProps)(Settings);
