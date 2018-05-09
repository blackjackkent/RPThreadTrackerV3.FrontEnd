// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import ReduxToastr from 'react-redux-toastr';
import Public from '../views/public/Public';
// #endregion imports

const propTypes = {
	match: PropTypes.shape({})
};
const defaultProps = {
	match: {}
};

const PublicContainer = ({ match }) => (
	<div className="app flex-row align-items-center">
		<ReduxToastr />
		<Container className="public-threads-container">
			<header>
				<h1 className="text-right">Public Threads for Username</h1>
			</header>
			<Row>
				<Col>
					<Public slug={match.params.slug} />
				</Col>
			</Row>
		</Container>
	</div>
);
PublicContainer.propTypes = propTypes;
PublicContainer.defaultProps = defaultProps;
export default PublicContainer;
