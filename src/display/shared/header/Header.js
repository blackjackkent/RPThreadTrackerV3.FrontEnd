// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';
import { HeaderLogoBlock, HeaderButton, HeaderAsideToggle, HeaderDropdown } from './components';
// #endregion imports

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	headerDropdownToggle: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const Header = (props) => {
	const {
		asideToggle,
		headerDropdownToggle,
		logout,
		mobileSidebarToggle,
		newsUnreadCount,
		openUpsertCharacterModal,
		openNewThreadModal,
		sidebarToggle,
		isLoadingIconVisible,
		isHeaderDropdownOpen,
		user
	} = props;

	return (
		<header className="app-header navbar">
			<HeaderLogoBlock
				mobileSidebarToggle={mobileSidebarToggle}
				sidebarToggle={sidebarToggle}
			/>
			<Nav className="d-none d-sm-flex ml-4" navbar>
				<HeaderButton
					data-spec="header-open-upsert-character-modal-button"
					onClick={() => openUpsertCharacterModal()}
					label="Add Character"
				/>
				<HeaderButton
					data-spec="header-open-upsert-thread-modal-button"
					onClick={() => openNewThreadModal()}
					label="Track New Thread"
				/>
				{isLoadingIconVisible &&
					<div
						data-spec="header-loading-indicator"
					>
						<LoadingIndicator className="d-md-down-none invert" />
					</div>
				}
			</Nav>
			<Nav className="ml-auto" navbar>
				<HeaderAsideToggle
					asideToggle={asideToggle}
					newsUnreadCount={newsUnreadCount}
				/>
				<HeaderDropdown
					isHeaderDropdownOpen={isHeaderDropdownOpen}
					headerDropdownToggle={headerDropdownToggle}
					logout={logout}
					openUpsertCharacterModal={openUpsertCharacterModal}
					openNewThreadModal={openNewThreadModal}
					user={user}
				/>
			</Nav>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
