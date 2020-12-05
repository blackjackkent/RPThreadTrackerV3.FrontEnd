import React from 'react';
import {
	Row,
	Col,
	TabPane,
	Button,
	FormGroup,
	Input,
	Label,
	CardHeader,
	CardBody
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import PropTypes from 'prop-types';
import Card from '../../../shared/styled/Card';

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
		const { name, value } = target;
		this.setState((prevState) => ({
			formData: Object.assign({}, prevState.formData, {
				[name]: value
			})
		}));
	}
	submitForm() {
		window.location.assign(
			'https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd/issues/new'
		);
	}
	render() {
		const { submitContactForm } = this.props;
		const { formData } = this.state;
		return (
			<TabPane tabId="contact">
				<Card>
					<CardHeader>
						<i className="fas fa-envelope" /> Contact Me
					</CardHeader>
					<CardBody className="card-body">
						<AvForm
							data-spec="contact-form-container"
							// onValidSubmit={() => submitContactForm(formData)}
						>
							<p>
								Have a suggestion about the site? Encountered a bug? Want to just
								say hi or give me a hug? Please feel free to send me a message, or
								visit the tracker{' '}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="http://tblrthreadtracker.tumblr.com"
								>
									support blog
								</a>
								. (On "Submit", you will be redirected to this projects repo to file
								an On "Submit", ypu will be redirected to this projects repo to file
								an "Issue").
							</p>
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
									<Button
										type="submit"
										onClick={this.submitForm.bind(this)}
										color="primary"
									>
										Submit
									</Button>
								</Col>
							</Row>
						</AvForm>
					</CardBody>
				</Card>
			</TabPane>
		);
	}
}
ContactFormPane.propTypes = propTypes;
export default ContactFormPane;
