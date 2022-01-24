// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	isHeaderAddMenuDropdownVisible: PropTypes.bool.isRequired,
	setIsHeaderAddMenuDropdownVisible: PropTypes.func.isRequired,
	setIsUpsertCharacterModalOpen: PropTypes.func.isRequired,
	setIsUpsertThreadModalOpen: PropTypes.func.isRequired
};

const HeaderAddMenuDropdown = (props) => {
	const {
		isHeaderAddMenuDropdownVisible,
		setIsHeaderAddMenuDropdownVisible,
		setIsUpsertCharacterModalOpen,
		setIsUpsertThreadModalOpen
	} = props;
	return (
		<NavItem>
			<Dropdown
				isOpen={isHeaderAddMenuDropdownVisible}
				data-spec="header-dropdown"
				toggle={() => setIsHeaderAddMenuDropdownVisible(!isHeaderAddMenuDropdownVisible)}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<FontAwesomeIcon icon={['fas', 'plus-circle']} />
				</DropdownToggle>
				<DropdownMenu
					data-spec="header-dropdown-menu"
					right
					className={isHeaderAddMenuDropdownVisible ? 'show' : ''}
				>
					<HeaderDropdownItem
						data-spec="header-dropdown-upsert-thread-link"
						onClick={() => setIsUpsertThreadModalOpen(true)}
						label="Track New Thread"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-upsert-character-link"
						onClick={() => setIsUpsertCharacterModalOpen(true)}
						label="Add Character"
					/>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};
HeaderAddMenuDropdown.propTypes = propTypes;
export default HeaderAddMenuDropdown;
