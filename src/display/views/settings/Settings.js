import React from 'react';
import {
	Row, Col
} from 'reactstrap';
import ChangeUsernameCard from './components/ChangeUsernameCard';
import ChangePasswordCard from './components/ChangePasswordCard';

const Settings = () => (
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

export default Settings;
