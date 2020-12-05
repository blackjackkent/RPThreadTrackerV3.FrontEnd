import React from 'react';
import { TabPane, CardHeader, CardBody } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
// import PropTypes from 'prop-types';
import Card from '../../../shared/styled/Card';

// const propTypes = {
// 	// submitContactForm: PropTypes.func.isRequired
// };
class ContactFormPane extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
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
		// const { submitContactForm } = this.props;
		// const { formData } = this.state;
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
								say hi or give me a hug? Click th ebutton below to open an issue on
								GitHub with your message.
							</p>
							<div className="container-github-button">
								<div className="center-github-button">
									<button
										type="submit"
										className="github-issue-link-button"
										onClick={this.submitForm}
									>
										Go to Github
									</button>
								</div>
							</div>
							<br />
							<p>
								You can also visit the tracker{' '}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="http://tblrthreadtracker.tumblr.com"
								>
									support blog
								</a>
								to see if your question has recenly been answered.
							</p>
							{/* <FormGroup row>
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
									<Button type="submit" onClick={this.submitForm} color="primary">
										Submit
									</Button>
								</Col>
							</Row> */}
						</AvForm>
					</CardBody>
				</Card>
			</TabPane>
		);
	}
}
// ContactFormPane.propTypes = propTypes;
export default ContactFormPane;
