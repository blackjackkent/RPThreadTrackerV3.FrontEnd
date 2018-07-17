import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './Header';
import { toggleSidebar, toggleNewsAside, toggleMobileSidebar, toggleHeaderProfileDropdown, toggleHeaderAddMenuDropdown, openUpsertCharacterModal, submitUserLogout, updateUserSettings, openUpsertThreadModal } from '../../../infrastructure/actions';
import { getNewsUnreadCount } from '../../../infrastructure/selectors';

const propTypes = {
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	isHeaderProfileDropdownOpen: PropTypes.bool.isRequired,
	isHeaderAddMenuDropdownOpen: PropTypes.bool.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	submitUserLogout: PropTypes.func.isRequired,
	toggleHeaderProfileDropdown: PropTypes.func.isRequired,
	toggleHeaderAddMenuDropdown: PropTypes.func.isRequired,
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
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderProfileDropdownOpen,
		isHeaderAddMenuDropdownOpen,
		isMobileSidebarOpen
	} = ui;
	const newsUnreadCount = getNewsUnreadCount(state);
	return {
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderProfileDropdownOpen,
		isHeaderAddMenuDropdownOpen,
		isMobileSidebarOpen,
		user,
		news,
		newsUnreadCount,
		userSettings
	};
}

class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.asideToggle = this.asideToggle.bind(this);
		this.sidebarToggle = this.sidebarToggle.bind(this);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
		this.headerProfileDropdownToggle = this.headerProfileDropdownToggle.bind(this);
		this.headerAddMenuDropdownToggle = this.headerAddMenuDropdownToggle.bind(this);
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

	sidebarToggle() {
		const isCurrentlyOpen = this.props.isSidebarOpen;
		this.props.toggleSidebar(!isCurrentlyOpen);
	}

	asideToggle() {
		const { userSettings } = this.props;
		const isCurrentlyOpen = this.props.isNewsAsideOpen;
		this.props.toggleNewsAside(!isCurrentlyOpen);
		this.props.updateUserSettings({
			...userSettings,
			lastNewsReadDate: new Date(Date.now())
		}, !isCurrentlyOpen);
	}

	mobileSidebarToggle() {
		const isCurrentlyOpen = this.props.isMobileSidebarOpen;
		this.props.toggleMobileSidebar(!isCurrentlyOpen);
	}

	headerProfileDropdownToggle() {
		const isCurrentlyOpen = this.props.isHeaderProfileDropdownOpen;
		this.props.toggleHeaderProfileDropdown(!isCurrentlyOpen);
	}

	headerAddMenuDropdownToggle() {
		const isCurrentlyOpen = this.props.isHeaderAddMenuDropdownOpen;
		this.props.toggleHeaderAddMenuDropdown(!isCurrentlyOpen);
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
				headerProfileDropdownToggle={this.headerProfileDropdownToggle}
				headerAddMenuDropdownToggle={this.headerAddMenuDropdownToggle}
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
	toggleHeaderProfileDropdown,
	toggleHeaderAddMenuDropdown,
	toggleMobileSidebar,
	toggleNewsAside,
	toggleSidebar,
	updateUserSettings
})(HeaderContainer);
