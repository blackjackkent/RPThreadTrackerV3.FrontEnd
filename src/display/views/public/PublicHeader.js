// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
// #endregion imports

const propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string
};
const defaultProps = {
	title: ''
};

const PublicHeader = (props) => {
	const {
		slug,
		title
	} = props;

	return (
		<header className="app-header navbar public-header">
			<a href="/" className="navbar-brand">RPTHREADTRACKER.COM</a>
			<Nav navbar>
				<h1 href={`/public/${slug}`} className="navbar-brand">{title}</h1>
			</Nav>
		</header>
	);
};

PublicHeader.propTypes = propTypes;
PublicHeader.defaultProps = defaultProps;
export default PublicHeader;
