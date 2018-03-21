import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	value: PropTypes.string.isRequired,
	handleItemRemove: PropTypes.func.isRequired
};

const MultipleValueTextInputItem = (props) => {
	const { value, handleItemRemove } = props;
	return (
		<span className="multiple-value-text-input-item">
			{value}{' '}
			<span
				data-value={value}
				tabIndex="-1"
				role="button"
				onKeyPress={() => handleItemRemove(value)}
				onClick={() => handleItemRemove(value)}
			>
				<i className="fas fa-times" />
			</span>
		</span>
	);
};

MultipleValueTextInputItem.propTypes = propTypes;
export default MultipleValueTextInputItem;
