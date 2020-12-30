import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangePasswordPane from './components/ChangePasswordPane';
import UpdateAccountInfoPane from './components/UpdateAccountInfoPane';
import DeleteAccountPane from './components/DeleteAccountPane';
import * as actions from '../../../infrastructure/actions';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import tabs from '../../../infrastructure/constants/tabs';

const propTypes = {
	user: PropTypes.shape({}).isRequired,
	submitUserChangePassword: PropTypes.func.isRequired,
	submitUserAccountInfo: PropTypes.func.isRequired,
	openDeleteAccountConfirmationModal: PropTypes.func.isRequired,
	match: PropTypes.shape({
		url: PropTypes.string,
		params: PropTypes.shape({
			tabId: PropTypes.string
		})
	}).isRequired
};

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	};
}

const Settings = (props) => {
	const {
		user,
		submitUserChangePassword,
		submitUserAccountInfo,
		openDeleteAccountConfirmationModal,
		match
	} = props;
	const options = Object.values(tabs.SETTINGS);
	const onDeleteAccountClicked = (e) => {
		e.preventDefault();
		openDeleteAccountConfirmationModal();
	};
	return (
		<div className="animated fadeIn static-container settings-container">
			<Row>
				<Col className="d-lg-none text-center">
					<StaticDropdownNav
						data-spec="settings-static-dropdown-nav"
						activeTab={match.url}
						options={options}
					/>
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>
					<StaticTabNav data-spec="settings-static-tab-nav" options={options} />
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={match.params.tabId}>
						<ChangePasswordPane submitChangePasswordForm={submitUserChangePassword} />
						<UpdateAccountInfoPane
							submitAccountInfoForm={submitUserAccountInfo}
							user={user}
						/>
						<DeleteAccountPane
							data-spec="delete-account-pane"
							onDeleteAccountClicked={onDeleteAccountClicked}
						/>
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Settings.propTypes = propTypes;
export default connect(mapStateToProps, {
	submitUserChangePassword: actions.submitUserChangePassword,
	submitUserAccountInfo: actions.submitUserAccountInfo,
	openDeleteAccountConfirmationModal: actions.openDeleteAccountConfirmationModal
})(Settings);
