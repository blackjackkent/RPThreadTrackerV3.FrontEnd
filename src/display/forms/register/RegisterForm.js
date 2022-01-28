import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		password: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const RegisterForm = (props) => {
	const { handleInputChange, tooltipDisplayData, showTooltip, hideTooltip } = props;
	return (
		<div>
			<div>
				<AvField
					name="username"
					placeholder="Username"
					type="text"
					onChange={handleInputChange}
					validate={validator.username}
				/>
			</div>
			<div>
				<AvField
					name="email"
					placeholder="Email"
					type="email"
					onChange={handleInputChange}
					validate={validator.email}
				/>
			</div>
			<div>
				<Tooltip
					visible={tooltipDisplayData.password}
					overlay={formData.password.tooltip}
					overlayStyle={{
						width: 300
					}}
					align={{
						offset: [0, 10]
					}}
					placement="top"
				>
					<AvField
						name="password"
						placeholder="Password"
						type="password"
						onChange={handleInputChange}
						validate={validator.password}
						onFocus={showTooltip}
						onBlur={hideTooltip}
					/>
				</Tooltip>
			</div>
			<div>
				<AvField
					name="confirmPassword"
					placeholder="Confirm Password"
					type="password"
					onChange={handleInputChange}
					validate={validator.confirmPassword}
				/>
			</div>
		</div>
	);
};

RegisterForm.propTypes = propTypes;
export default RegisterForm;
