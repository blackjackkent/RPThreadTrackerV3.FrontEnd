import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Row, Button, Col, Card, CardHeader, CardBlock } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import UpdateAccountInfoForm from '../../../forms/update-account-info/UpdateAccountInfoForm';

const propTypes = {
	user: PropTypes.shape({}).isRequired,
	submitAccountInfoForm: PropTypes.func.isRequired
};
class UpdateAccountInfoPane extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			formData: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		const { user } = nextProps;
		this.setState({
			formData: Object.assign({}, this.state.formData, user)
		});
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
		const { submitAccountInfoForm } = this.props;
		return (
			<TabPane tabId="change-username">
				<Card>
					<CardHeader>
						<i
							className="fas fa-user"
						/> Change Username/Email
					</CardHeader>
					<CardBlock className="card-body">
						<AvForm onValidSubmit={() => submitAccountInfoForm(this.state.formData)}>
							<UpdateAccountInfoForm
								handleInputChange={this.handleInputChange}
								user={this.state.formData}
							/>
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
UpdateAccountInfoPane.propTypes = propTypes;
export default UpdateAccountInfoPane;
