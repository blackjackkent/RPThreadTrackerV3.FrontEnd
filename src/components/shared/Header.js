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

	sidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('sidebar-hidden');
	}

	asideToggle(e) {
		e.preventDefault();
		document.body.classList.toggle('aside-menu-hidden');
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

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<header className="app-header navbar">
				<NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
					&#9776;
				</NavbarToggler>
				<NavbarBrand href="#"></NavbarBrand>
				<NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
					&#9776;
				</NavbarToggler>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<NavLink href="#" onClick={this.asideToggle}>
							<i className="icon-bell"></i>
							<Badge pill color="danger">5</Badge>
						</NavLink>
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
