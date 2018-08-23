import React from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Row, Button, Col, Card, CardHeader, CardBlock
} from 'reactstrap';
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
		this.setState(prevState => ({
			formData: Object.assign({}, prevState.formData, user)
		}));
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState(prevState => ({
			formData: Object.assign({}, prevState.formData, {
				[name]: value
			})
		}));
	}

	render() {
		const { submitAccountInfoForm } = this.props;
		const { formData } = this.state;
		return (
			<TabPane tabId="change-username">
				<Card>
					<CardHeader>
						<i
							className="fas fa-user"
						/> Change Username/Email
					</CardHeader>
					<CardBlock className="card-body">
						<AvForm
							data-spec="account-info-form-container"
							onValidSubmit={() => submitAccountInfoForm(formData)}
						>
							<UpdateAccountInfoForm
								handleInputChange={this.handleInputChange}
								user={formData}
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
