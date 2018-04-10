import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup, Input, Row, Col, Label } from 'reactstrap';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const ContactForm = (props) => {
	const {
		handleInputChange
	} = props;
	return (
		<div>
			<Row>
				<Col md="3">
					<Label htmlFor="email-input">Email</Label>
				</Col>
				<Col xs="12" md="9">
					<AvField
						name="Email"
						placeholder="Email"
						type="text"
						onChange={handleInputChange}
						validate={validator.email}
					/>
				</Col>
			</Row>
			<FormGroup row>
				<Col md="3">
					<Label htmlFor="textarea-input">Message</Label>
				</Col>
				<Col xs="12" md="9">
					<Input
						type="textarea"
						name="Message"
						id="message-textarea"
						rows="9"
						onChange={handleInputChange}
						placeholder="Enter your message here..."
					/>
				</Col>
			</FormGroup>
		</div>
	);
};

ContactForm.propTypes = propTypes;
export default ContactForm;
