import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Button, CardHeader, CardBody } from 'reactstrap';
import Card from '../../../shared/styled/Card';

const propTypes = {
	onDeleteAccountClicked: PropTypes.func.isRequired
};
const DeleteAccountPane = ({ onDeleteAccountClicked }) => {
	return (
		<TabPane tabId="delete-account">
			<Card>
				<CardHeader>
					<i className="fas fa-trash-alt" /> Delete Account
				</CardHeader>
				<CardBody className="card-body text-center">
					<Button type="submit" color="danger" onClick={onDeleteAccountClicked}>
						Delete Account
					</Button>
				</CardBody>
			</Card>
		</TabPane>
	);
}
DeleteAccountPane.propTypes = propTypes;
export default DeleteAccountPane;
