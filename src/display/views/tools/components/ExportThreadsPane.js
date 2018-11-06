import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Form, FormGroup, Col, Label, Row, Input, Button, CardHeader, CardBlock
} from 'reactstrap';
import Card from '../../../shared/styled/Card';
import SwitchLabel from '../../../shared/styled/SwitchLabel';

const propTypes = {
	onExportRequest: PropTypes.func.isRequired
};

class ExportThreadsPane extends Component {
	constructor() {
		super();
		this.state = {
			includeHiatused: false,
			includeArchived: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, checked } = target;
		this.setState(prevState => Object.assign({}, prevState, {
			[name]: checked
		}));
	}

	render() {
		const { onExportRequest } = this.props;
		const { includeArchived, includeHiatused } = this.state;
		return (
			<TabPane tabId="export">
				<Card>
					<CardHeader>
						<i
							className="fas fa-download"
						/> Export Threads
					</CardHeader>
					<CardBlock className="card-body">
						<Form
							action=""
							method="post"
							encType="multipart/form-data"
							className="form-horizontal"
						>
							<p>
								Use the button below to export an Excel file{' '}
								of your current threads in the database.
							</p>
							<FormGroup row>
								<Col md={{ offset: 2, size: 6 }}>
									<Label htmlFor="current-password">Include Archived Threads:</Label>
								</Col>
								<Col>
									<SwitchLabel
										htmlFor="include-archived-switch"
										className="switch switch-sm switch-text switch-info mb-0"
									>
										<Input
											type="checkbox"
											className="switch-input"
											id="include-archived-switch"
											checked={includeArchived}
											onChange={this.handleInputChange}
											name="includeArchived"
										/>
										<span className="switch-label" data-on="Yes" data-off="No" />
										<span className="switch-handle" />
									</SwitchLabel>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ offset: 2, size: 6 }}>
									<Label htmlFor="current-password">Include Characters on Hiatus:</Label>
								</Col>
								<Col>
									<SwitchLabel
										htmlFor="include-hiatused-switch"
										className="switch switch-sm switch-text switch-info mb-0"
									>
										<Input
											type="checkbox"
											className="switch-input"
											id="include-hiatused-switch"
											checked={includeHiatused}
											onChange={this.handleInputChange}
											name="includeHiatused"
										/>
										<span className="switch-label" data-on="Yes" data-off="No" />
										<span className="switch-handle" />
									</SwitchLabel>
								</Col>
							</FormGroup>
						</Form>
						<Row>
							<Col className="text-right">
								<Button
									data-spec="export-threads-form-submit-button"
									type="submit"
									color="primary"
									onClick={
										() => onExportRequest(includeHiatused, includeArchived)}
								>
									Export
								</Button>
							</Col>
						</Row>
					</CardBlock>
				</Card>
			</TabPane>
		);
	}
}
ExportThreadsPane.propTypes = propTypes;
export default ExportThreadsPane;
