import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from './Header';
import { toggleSidebar, toggleNewsAside, toggleMobileSidebar, toggleHeaderDropdown, openUpsertCharacterModal, submitUserLogout, updateUserSettings, openUpsertThreadModal } from '../../../infrastructure/actions';
import { getNewsUnreadCount } from '../../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired,
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	userSettings: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		ui, user, news, loading, userSettings
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
		threadsLoading,
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
		const { dispatch } = this.props;
		dispatch(toggleSidebar(value));
	}

	asideToggle(value) {
		const { dispatch, userSettings } = this.props;
		dispatch(toggleNewsAside());
		dispatch(updateUserSettings({
			...userSettings,
			lastNewsReadDate: new Date(Date.now())
		}, !value));
	}

	mobileSidebarToggle(value) {
		const { dispatch } = this.props;
		dispatch(toggleMobileSidebar(value));
	}

	headerDropdownToggle(value) {
		const { dispatch } = this.props;
		dispatch(toggleHeaderDropdown(value));
	}

	openUpsertCharacterModal(character) {
		const { dispatch } = this.props;
		dispatch(openUpsertCharacterModal(character));
	}

	openNewThreadModal() {
		const { dispatch } = this.props;
		dispatch(openUpsertThreadModal(null));
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
				openUpsertCharacterModal={this.openUpsertCharacterModal}
				openNewThreadModal={this.openNewThreadModal}
				logout={this.logout}
			/>
		);
	}
}

HeaderContainer.propTypes = propTypes;

export default connect(mapStateToProps)(HeaderContainer);
