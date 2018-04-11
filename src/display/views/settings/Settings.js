import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangePasswordPane from './components/ChangePasswordPane';
import UpdateAccountInfoPane from './components/UpdateAccountInfoPane';
import { setActiveSettingsTab, submitUserChangePassword } from '../../../infrastructure/actions';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	user: PropTypes.shape({}).isRequired,
	setActiveSettingsTab: PropTypes.func.isRequired,
	submitUserChangePassword: PropTypes.func.isRequired
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
		this.props.setActiveSettingsTab(tab);
	}

	render() {
		const { activeTab, user } = this.props;
		const options = [
			{
				tabId: 'change-password',
				name: 'Change Password'
			},
			{
				tabId: 'change-username',
				name: 'Change Username/Email'
			}
		];
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>
						<StaticTabNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={activeTab}>
							<ChangePasswordPane submitChangePasswordForm={this.props.submitUserChangePassword} />
							<UpdateAccountInfoPane user={user} />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Settings.propTypes = propTypes;
export default connect(mapStateToProps, {
	submitUserChangePassword,
	setActiveSettingsTab
})(Settings);
