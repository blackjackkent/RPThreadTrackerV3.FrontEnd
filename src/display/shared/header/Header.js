import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Nav,
	NavItem,
	NavLink,
	Badge,
	Button,
	NavbarToggler,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	headerDropdownToggle: PropTypes.func.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	openEditCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	threadsLoading: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const Header = (props) => {
	const {
		asideToggle,
		headerDropdownToggle,
		isHeaderDropdownOpen,
		logout,
		mobileSidebarToggle,
		newsUnreadCount,
		openEditCharacterModal,
		openNewThreadModal,
		sidebarToggle,
		threadsLoading,
		user
	} = props;

	return (
		<header className="app-header navbar">
			<NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
				&#9776;
			</NavbarToggler>
			<Link href="/" className="navbar-brand" to="/">RPTHREADTRACKER</Link>
			<NavbarToggler className="d-md-down-none" onClick={sidebarToggle}>
				&#9776;
			</NavbarToggler>
			<Nav className="d-md-down-none ml-4" navbar>
				<NavItem>
					<Button color="primary" onClick={() => openEditCharacterModal({})}>Add Character</Button>
				</NavItem>
				<NavItem>
					<Button className="ml-4" color="primary" onClick={() => openNewThreadModal({})}> Track New Thread</Button>
				</NavItem>
				{threadsLoading && <LoadingIndicator className="invert" />}
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
								Track New Thread
							</DropdownItem>
							<DropdownItem className="hidden-lg-up">
								Add Character
							</DropdownItem>
							<DropdownItem onClick={logout}>
								Logout
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
