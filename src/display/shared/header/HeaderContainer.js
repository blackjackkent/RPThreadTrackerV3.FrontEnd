import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../../../infrastructure/actions';
import * as selectors from '../../../infrastructure/selectors';

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
	loadSidebarOpen: PropTypes.func.isRequired,
	setSidebarOpen: PropTypes.func.isRequired,
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
	const newsUnreadCount = selectors.getNewsUnreadCount(state);
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
		const { loadSidebarOpen } = this.props;
		loadSidebarOpen();
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
		const { isSidebarOpen, setSidebarOpen } = this.props;
		setSidebarOpen(!isSidebarOpen);
	}

	asideToggle() {
		const {
			userSettings, isNewsAsideOpen, toggleNewsAside, updateUserSettings
		} = this.props;
		toggleNewsAside(!isNewsAsideOpen);
		updateUserSettings({
			...userSettings,
			lastNewsReadDate: new Date(Date.now())
		}, !isNewsAsideOpen);
	}

	mobileSidebarToggle() {
		const { isMobileSidebarOpen, toggleMobileSidebar } = this.props;
		toggleMobileSidebar(!isMobileSidebarOpen);
	}

	headerProfileDropdownToggle() {
		const { isHeaderProfileDropdownOpen, toggleHeaderProfileDropdown } = this.props;
		toggleHeaderProfileDropdown(!isHeaderProfileDropdownOpen);
	}

	headerAddMenuDropdownToggle() {
		const { isHeaderAddMenuDropdownOpen, toggleHeaderAddMenuDropdown } = this.props;
		toggleHeaderAddMenuDropdown(!isHeaderAddMenuDropdownOpen);
	}

	openUpsertCharacterModal(character) {
		const { openUpsertCharacterModal } = this.props;
		openUpsertCharacterModal(character);
	}

	openNewThreadModal() {
		const { openUpsertThreadModal } = this.props;
		openUpsertThreadModal(null);
	}

	logout() {
		const { submitUserLogout } = this.props;
		submitUserLogout();
	}

	render() {
		const { loadSidebarOpen, setSidebarOpen, ...props } = this.props;

		return (
			<Header
				{...props}
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
	loadSidebarOpen: actions.loadSidebarOpen,
	openUpsertCharacterModal: actions.openUpsertCharacterModal,
	openUpsertThreadModal: actions.openUpsertThreadModal,
	setSidebarOpen: actions.setSidebarOpen,
	submitUserLogout: actions.submitUserLogout,
	toggleHeaderProfileDropdown: actions.toggleHeaderProfileDropdown,
	toggleHeaderAddMenuDropdown: actions.toggleHeaderAddMenuDropdown,
	toggleMobileSidebar: actions.toggleMobileSidebar,
	toggleNewsAside: actions.toggleNewsAside,
	updateUserSettings: actions.updateUserSettings
})(HeaderContainer);
