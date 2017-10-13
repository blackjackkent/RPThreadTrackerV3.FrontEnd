import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import { toggleSidebar, toggleNewsAside, toggleHeaderDropdown, toggleMobileSidebar } from '../../../../state/ui/actions';

const propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	isNewsAsideOpen: PropTypes.bool.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	isSidebarOpen: PropTypes.bool.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { ui } = state;
	const {
		isNewsAsideOpen, isSidebarOpen, isHeaderDropdownOpen, isMobileSidebarOpen
	} = ui;
	return {
		isNewsAsideOpen, isSidebarOpen, isHeaderDropdownOpen, isMobileSidebarOpen
	};
}

class Header extends Component {
	constructor(props) {
		super(props);
		this.asideToggle = this.asideToggle.bind(this);
		this.sidebarToggle = this.sidebarToggle.bind(this);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
		this.headerDropdownToggle = this.headerDropdownToggle.bind(this);
	}

	componentDidMount() {
		this.loadBodyClasses(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.loadBodyClasses(nextProps);
	}

	loadBodyClasses(props) {
		document.body.classList.toggle('sidebar-hidden', !props.isSidebarOpen);
		document.body.classList.toggle('aside-menu-hidden', !props.isNewsAsideOpen);
		document.body.classList.toggle('sidebar-mobile-show', props.isMobileSidebarOpen);
	}

	sidebarToggle() {
		const { dispatch } = this.props;
		dispatch(toggleSidebar());
	}

	asideToggle() {
		const { dispatch } = this.props;
		dispatch(toggleNewsAside());
	}

	mobileSidebarToggle() {
		const { dispatch } = this.props;
		dispatch(toggleMobileSidebar());
	}

	headerDropdownToggle() {
		const { dispatch } = this.props;
		dispatch(toggleHeaderDropdown());
	}

	render() {
		return (
			<header className="app-header navbar">
				<NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
					&#9776;
				</NavbarToggler>
				<NavbarBrand href="#" />
				<NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
					&#9776;
				</NavbarToggler>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="#" onClick={this.asideToggle}>
							<i className="icon-bell" />
							<Badge pill color="danger">5</Badge>
						</NavLink>
					</NavItem>
					<NavItem>
						<Dropdown isOpen={this.props.isHeaderDropdownOpen} toggle={this.headerDropdownToggle}>
							<DropdownToggle className="nav-link dropdown-toggle">
								<span className="d-md-down-none">blackjackkent</span>
							</DropdownToggle>
							<DropdownMenu right className={this.props.isHeaderDropdownOpen ? 'show' : ''}>
								<DropdownItem><i className="fa fa-lock" /> Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</NavItem>
				</Nav>
			</header>
		);
	}
}

Header.propTypes = propTypes;

export default connect(mapStateToProps)(Header);
