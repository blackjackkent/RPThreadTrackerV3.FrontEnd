// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// #endregion imports

const propTypes = {
	colorTag: PropTypes.string,
	iconTag: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};
const defaultProps = {
	colorTag: 'primary'
};

const TableSubComponentButton = (props) => {
	const {
		colorTag,
		iconTag,
		onClick,
		label
	} = props;
	return (
		<span className="control-button">
			<Button color={colorTag} onClick={onClick}>
				{label} <i className={`fas ${iconTag}`} />
			</Button>
		</span>
	);
};
TableSubComponentButton.propTypes = propTypes;
TableSubComponentButton.defaultProps = defaultProps;
export default TableSubComponentButton;
