import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './Header';
import { toggleSidebar, toggleNewsAside, toggleMobileSidebar, toggleHeaderDropdown, openUpsertCharacterModal, submitUserLogout, updateUserSettings, openUpsertThreadModal } from '../../../infrastructure/actions';
import { getNewsUnreadCount, getIsLoadingIconVisible } from '../../../infrastructure/selectors';

const propTypes = {
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	submitUserLogout: PropTypes.func.isRequired,
	toggleHeaderDropdown: PropTypes.func.isRequired,
	toggleMobileSidebar: PropTypes.func.isRequired,
	toggleNewsAside: PropTypes.func.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	updateUserSettings: PropTypes.func.isRequired,
	userSettings: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		ui, user, news, userSettings
	} = state;
	const {
		isNewsAsideOpen, isSidebarOpen, isHeaderDropdownOpen, isMobileSidebarOpen
	} = ui;
	const newsUnreadCount = getNewsUnreadCount(state);
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderDropdownOpen,
		isMobileSidebarOpen,
		user,
		news,
		newsUnreadCount,
		isLoadingIconVisible,
		userSettings
	};
}

class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.asideToggle = this.asideToggle.bind(this);
		this.sidebarToggle = this.sidebarToggle.bind(this);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
		this.headerDropdownToggle = this.headerDropdownToggle.bind(this);
		this.openUpsertCharacterModal = this.openUpsertCharacterModal.bind(this);
		this.openNewThreadModal = this.openNewThreadModal.bind(this);
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

	sidebarToggle(value) {
		this.props.toggleSidebar(value);
	}

	asideToggle(value) {
		const { userSettings } = this.props;
		this.props.toggleNewsAside(value);
		this.props.updateUserSettings({
			...userSettings,
			lastNewsReadDate: new Date(Date.now())
		}, value);
	}

	mobileSidebarToggle(value) {
		this.props.toggleMobileSidebar(value);
	}

	headerDropdownToggle(value) {
		this.props.toggleHeaderDropdown(value);
	}

	openUpsertCharacterModal(character) {
		this.props.openUpsertCharacterModal(character);
	}

	openNewThreadModal() {
		this.props.openUpsertThreadModal(null);
	}

	logout() {
		this.props.submitUserLogout();
	}

	render() {
		return (
			<Header
				{...this.props}
				mobileSidebarToggle={this.mobileSidebarToggle}
				asideToggle={this.asideToggle}
				headerDropdownToggle={this.headerDropdownToggle}
				sidebarToggle={this.sidebarToggle}
				openUpsertCharacterModal={this.openUpsertCharacterModal}
				openNewThreadModal={this.openNewThreadModal}
				logout={this.logout}
			/>
		);
	}
}

HeaderContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	openUpsertCharacterModal,
	openUpsertThreadModal,
	submitUserLogout,
	toggleHeaderDropdown,
	toggleMobileSidebar,
	toggleNewsAside,
	toggleSidebar,
	updateUserSettings
})(HeaderContainer);
