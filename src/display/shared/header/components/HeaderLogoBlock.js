// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarToggler } from 'reactstrap';
// #endregion imports

const propTypes = {
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	setIsMobileSidebarOpen: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool,
	setIsSidebarOpen: PropTypes.func.isRequired
};
const defaultProps = {
	isSidebarOpen: true
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
				onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
			>
				&#9776;
			</NavbarToggler>
			<Link href="/" className="d-none d-sm-inline-block navbar-brand" to="/">
				RPTHREADTRACKER
			</Link>
			<NavbarToggler
				className="d-md-down-none"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				&#9776;
			</NavbarToggler>
		</div>
	);
};
HeaderLogoBlock.propTypes = propTypes;
HeaderLogoBlock.defaultProps = defaultProps;
export default HeaderLogoBlock;
