import React, { Component } from 'react';
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

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.messagesToggle = this.messagesToggle.bind(this);
		this.state = {
			dropdownOpen: false,
			messagesDropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	sidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-hidden');
	}

	messagesToggle() {
		this.setState({
			messagesDropdownOpen: !this.state.messagesDropdownOpen
		});
	}

	sidebarMinimize(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-minimized');
	}

	mobileSidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-mobile-show');
	}

	asideToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('aside-menu-hidden');
	}

	render() {
		return (
			<header className="app-header navbar">
				<NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
				<NavbarBrand href="#"></NavbarBrand>
				<NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<Dropdown isOpen={this.state.messagesDropdownOpen} toggle={this.messagesToggle}>
							<DropdownToggle className="nav-link">
								<NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
							</DropdownToggle>
							<DropdownMenu right className={this.state.messagesDropdownOpen ? 'show' : ''}>
								<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</NavItem>
					<NavItem>
						<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle className="nav-link dropdown-toggle">
								<span className="d-md-down-none">blackjackkent</span>
							</DropdownToggle>
							<DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
								<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</NavItem>
				</Nav >
			</header >
		)
	}
}

export default Header;
