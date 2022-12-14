import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	error: PropTypes.shape({})
};
const ValidatedErrorMessage = ({ error = {} }) => {
	if (!error?.message) {
		return null;
	}
	return <div className="invalid-feedback">{error.message}</div>;
};
ValidatedErrorMessage.propTypes = propTypes;
export default ValidatedErrorMessage;
