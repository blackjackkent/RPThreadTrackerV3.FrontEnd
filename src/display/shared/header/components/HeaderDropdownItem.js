// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
// #endregion imports

const propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

const HeaderDropdownItem = (props) => {
	const { onClick, label } = props;

	return (
		<DropdownItem className="hidden-lg-up" onKeyDown={onClick} onClick={onClick}>
			<span role="button" tabIndex="-1">
				{label}
			</span>
		</DropdownItem>
	);
};
HeaderDropdownItem.propTypes = propTypes;
export default HeaderDropdownItem;
