// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import ReduxToastr from 'react-redux-toastr';
import Public from '../views/public/Public';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
// #endregion imports

const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			slug: PropTypes.string,
			username: PropTypes.string
		})
	})
};
const defaultProps = {
	match: {}
};

const PublicContainer = ({ match }) => (
	<div className="app flex-row">
		<ReduxToastr />
		<Container className="public-threads-container">
			<Public slug={match.params.slug} username={match.params.username} />
		</Container>
	</div>
);
PublicContainer.propTypes = propTypes;
PublicContainer.defaultProps = defaultProps;
export default withPageViewTracker(PublicContainer);
