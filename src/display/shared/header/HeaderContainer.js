import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './Header';
import { toggleSidebar, toggleNewsAside, toggleMobileSidebar, toggleHeaderDropdown, openEditCharacterModal, submitUserLogout } from '../../../infrastructure/actions';
import { getNewsUnreadCount } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired,
	isMobileSidebarOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	const {
		ui, user, news, loading
	} = state;
	const {
		isNewsAsideOpen, isSidebarOpen, isHeaderDropdownOpen, isMobileSidebarOpen
	} = ui;
	const {
		threadsLoading
	} = loading;
	const newsUnreadCount = getNewsUnreadCount(state);
	return {
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderDropdownOpen,
		isMobileSidebarOpen,
		user,
		news,
		newsUnreadCount,
		threadsLoading
	};
}

class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.asideToggle = this.asideToggle.bind(this);
		this.sidebarToggle = this.sidebarToggle.bind(this);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
		this.headerDropdownToggle = this.headerDropdownToggle.bind(this);
		this.openEditCharacterModal = this.openEditCharacterModal.bind(this);
		this.logout = this.logout.bind(this);
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

	openEditCharacterModal(character) {
		const { dispatch } = this.props;
		dispatch(openEditCharacterModal(character));
	}

	logout() {
		const { dispatch } = this.props;
		dispatch(submitUserLogout());
	}

	render() {
		return (
			<Header
				{...this.props}
				mobileSidebarToggle={this.mobileSidebarToggle}
				asideToggle={this.asideToggle}
				headerDropdownToggle={this.headerDropdownToggle}
				sidebarToggle={this.sidebarToggle}
				openEditCharacterModal={this.openEditCharacterModal}
				logout={this.logout}
			/>
		);
	}
}

HeaderContainer.propTypes = propTypes;

export default connect(mapStateToProps)(HeaderContainer);
