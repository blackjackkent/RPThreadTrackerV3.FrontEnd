// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import LoadingIndicator from '../../shared/LoadingIndicator';
// #endregion imports

const propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string,
	isLoadingIconVisible: PropTypes.bool.isRequired
};

const defaultProps = {
	title: ''
};

const PublicHeader = (props) => {
	const {
		slug,
		title,
		isLoadingIconVisible
	} = props;

	return (
		<Row className="public-header">
			<Col>
				<a href="/" className="navbar-brand">RPTHREADTRACKER.COM</a>
			</Col>
			<Col className="text-right">
				{isLoadingIconVisible && (
					<div data-spec="header-loading-indicator" className="float-right">
						<LoadingIndicator className="invert" />
					</div>
				)}
				<h1 href={`/public/${slug}`} className="navbar-brand">{title}</h1>
			</Col>
		</Row>
	);
};

PublicHeader.propTypes = propTypes;
PublicHeader.defaultProps = defaultProps;
export default PublicHeader;
