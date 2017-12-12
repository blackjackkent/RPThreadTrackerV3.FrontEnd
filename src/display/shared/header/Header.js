import React from 'react';
import PropTypes from 'prop-types';
import {
	Nav,
	NavItem,
	NavLink,
	Badge,
	Button,
	NavbarToggler,
	NavbarBrand,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	asideToggle: PropTypes.func.isRequired,
	headerDropdownToggle: PropTypes.func.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	openEditCharacterModal: PropTypes.func.isRequired
};

const Header = (props) => {
	const {
		mobileSidebarToggle,
		sidebarToggle,
		asideToggle,
		headerDropdownToggle,
		isHeaderDropdownOpen,
		openEditCharacterModal,
		user,
		newsUnreadCount
	} = props;

	return (
		<header className="app-header navbar">
			<NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
				&#9776;
			</NavbarToggler>
			<NavbarBrand href="/">RPTHREADTRACKER</NavbarBrand>
			<NavbarToggler className="d-md-down-none" onClick={sidebarToggle}>
				&#9776;
			</NavbarToggler>
			<Nav className="d-md-down-none ml-4" navbar>
				<NavItem>
					<Button color="primary" onClick={() => openEditCharacterModal({})}>Add Character</Button>
				</NavItem>
				<NavItem>
					<Button className="ml-4" color="primary">Track New Thread</Button>
				</NavItem>
			</Nav>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="#" onClick={asideToggle}>
						<i className="icon-bell" />
						{newsUnreadCount > 0 &&
							<Badge pill color="danger">{newsUnreadCount}</Badge>
						}
					</NavLink>
				</NavItem>
				<NavItem>
					<Dropdown isOpen={isHeaderDropdownOpen} toggle={headerDropdownToggle}>
						<DropdownToggle className="nav-link dropdown-toggle">
							<span className="d-md-down-none">{user ? user.userName : ''}</span>
						</DropdownToggle>
						<DropdownMenu right className={isHeaderDropdownOpen ? 'show' : ''}>
							<DropdownItem className="hidden-lg-up">
								<i className="fa fa-pencil" /> Track New Thread
							</DropdownItem>
							<DropdownItem className="hidden-lg-up">
								<i className="fa fa-user" /> Add Character
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-lock" /> Logout
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavItem>
			</Nav>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
