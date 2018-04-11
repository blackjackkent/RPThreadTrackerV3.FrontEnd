// #region imports
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReduxToastr from 'react-redux-toastr';
import Public from '../views/public/Public';
// #endregion imports

const PublicContainer = () => (
	<div className="app flex-row align-items-center">
		<ReduxToastr />
		<Container className="public-threads-container">
			<header>
				<h1 className="text-right">Public Threads for Username</h1>
			</header>
			<Row>
				<Col>
					<Public />
				</Col>
			</Row>
		</Container>
	</div>
);
export default PublicContainer;
