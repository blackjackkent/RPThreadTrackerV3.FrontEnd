import React from 'react';
import PropTypes from 'prop-types';
import {
	Nav,
	NavItem,
	NavLink,
	Badge,
	NavbarToggler,
	NavbarBrand,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string,
		settings: PropTypes.shape({
			hasDashboardAtAGlanceHidden: PropTypes.bool.isRequired
		})
	}).isRequired,
	news: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		userTitle: PropTypes.string.isRequired,
		lastPostDate: PropTypes.string.isRequired
	})).isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	asideToggle: PropTypes.func.isRequired,
	headerDropdownToggle: PropTypes.func.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired
};

const Header = (props) => {
	const {
		mobileSidebarToggle,
		sidebarToggle,
		asideToggle,
		headerDropdownToggle,
		isHeaderDropdownOpen,
		user,
		news
	} = props;

	return (
		<header className="app-header navbar">
			<NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
				&#9776;
			</NavbarToggler>
			<NavbarBrand href="/">RPTHREADTRACKER</NavbarBrand>
			<NavbarToggler className="d-md-down-none mr-auto" onClick={sidebarToggle}>
				&#9776;
			</NavbarToggler>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="#" onClick={asideToggle}>
						<i className="icon-bell" />
						<Badge pill color="danger">{news.length}</Badge>
					</NavLink>
				</NavItem>
				<NavItem>
					<Dropdown isOpen={isHeaderDropdownOpen} toggle={headerDropdownToggle}>
						<DropdownToggle className="nav-link dropdown-toggle">
							<span className="d-md-down-none">{user ? user.userName : ''}</span>
						</DropdownToggle>
						<DropdownMenu right className={isHeaderDropdownOpen ? 'show' : ''}>
							<DropdownItem><i className="fa fa-lock" /> Logout</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavItem>
			</Nav>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
