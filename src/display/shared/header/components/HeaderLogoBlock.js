// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarToggler } from 'reactstrap';
// #endregion imports

const propTypes = {
	mobileSidebarToggle: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	isMobileSidebarOpen: PropTypes.bool.isRequired
};

const HeaderLogoBlock = (props) => {
	const {
		mobileSidebarToggle,
		sidebarToggle,
		isSidebarOpen,
		isMobileSidebarOpen
	} = props;

	return (
		<div style={{ display: 'inline' }}>
			<NavbarToggler
				className="d-lg-none"
				onClick={() => mobileSidebarToggle(!isMobileSidebarOpen)}
			>
				&#9776;
			</NavbarToggler>
			<Link href="/" className="navbar-brand" to="/">RPTHREADTRACKER</Link>
			<NavbarToggler className="d-md-down-none" onClick={() => sidebarToggle(!isSidebarOpen)}>
				&#9776;
			</NavbarToggler>
		</div>
	);
};
HeaderLogoBlock.propTypes = propTypes;
export default HeaderLogoBlock;
