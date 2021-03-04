// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarToggler } from 'reactstrap';
// #endregion imports

const propTypes = {
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	setIsMobileSidebarOpen: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	setIsSidebarOpen: PropTypes.func.isRequired
};

const HeaderLogoBlock = (props) => {
	const { isMobileSidebarOpen, setIsMobileSidebarOpen, isSidebarOpen, setIsSidebarOpen } = props;

	return (
		<div
			style={{
				display: 'inline'
			}}
		>
			<NavbarToggler
				className="d-lg-none"
				data-spec="header-logo-block-mobile-toggler"
				onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
			>
				&#9776;
			</NavbarToggler>
			<Link href="/" className="d-none d-sm-inline-block navbar-brand" to="/">
				RPTHREADTRACKER
			</Link>
			<NavbarToggler
				className="d-md-down-none"
				data-spec="header-logo-block-sidebar-toggler"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				&#9776;
			</NavbarToggler>
		</div>
	);
};
HeaderLogoBlock.propTypes = propTypes;
export default HeaderLogoBlock;
