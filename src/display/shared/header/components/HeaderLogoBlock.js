// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarToggler } from 'reactstrap';
// #endregion imports

const propTypes = {
	mobileSidebarToggle: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired
};

const HeaderLogoBlock = (props) => {
	const { mobileSidebarToggle, sidebarToggle } = props;

	return (
		<div
			style={{
				display: 'inline'
			}}
		>
			<NavbarToggler
				className="d-lg-none"
				data-spec="header-logo-block-mobile-toggler"
				onClick={mobileSidebarToggle}
			>
				&#9776;
			</NavbarToggler>
			<NavbarToggler
				className="d-md-down-none"
				data-spec="header-logo-block-sidebar-toggler"
				onClick={sidebarToggle}
			>
				&#9776;
			</NavbarToggler>
			<Link href="/" className="d-none d-sm-inline-block navbar-brand" to="/">
				RPTHREADTRACKER
			</Link>
		</div>
	);
};
HeaderLogoBlock.propTypes = propTypes;
export default HeaderLogoBlock;
