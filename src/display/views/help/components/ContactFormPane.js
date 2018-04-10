import React from 'react';
import {
	Row, Col, TabPane, Button, FormGroup, Input, Label, Card, CardHeader, CardBlock
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import PropTypes from 'prop-types';

const propTypes = {
	submitContactForm: PropTypes.func.isRequired
};
class ContactFormPane extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			formData: {}
		};
	}
	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState({
			formData: Object.assign({}, this.state.formData, {
				[name]: value
			})
		});
	}
	render() {
		const { submitContactForm } = this.props;
		return (
			<TabPane tabId="contact">
				<Card>
					<CardHeader>
						<i
							className="fas fa-envelope"
						/> Contact Me
					</CardHeader>
					<CardBlock className="card-body">
						<AvForm onValidSubmit={() => submitContactForm(this.state.formData)}>
							<p>Have a suggestion about the site? Encountered a bug? Want to just say hi or give me a hug? Please feel free to send me a message, or visit the tracker <a target="_blank" rel="noopener noreferrer" href="http://tblrthreadtracker.tumblr.com">support blog</a>.</p>
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
										onChange={this.handleInputChange}
										placeholder="Enter your message here..."
									/>
								</Col>
							</FormGroup>
							<Row>
								<Col className="text-right">
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</AvForm>
					</CardBlock>
				</Card>
			</TabPane>
		);
	}
}
ContactFormPane.propTypes = propTypes;
export default ContactFormPane;
