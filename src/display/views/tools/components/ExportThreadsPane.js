import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabPane, Form, FormGroup, Col, Label, Row, Input, Button, Card, CardHeader, CardBlock } from 'reactstrap';

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
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState(Object.assign({}, this.state, {
			[name]: value
		}));
	}
	render() {
		const { onExportRequest } = this.props;
		return (
			<TabPane tabId="export-threads">
				<Card>
					<CardHeader>
						<i
							className="fas fa-download"
						/> Export Threads
					</CardHeader>
					<CardBlock className="card-body">
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<p>
								Use the button below to export an Excel file{' '}
								of your current threads in the database.
							</p>
							<FormGroup row>
								<Col md={{ offset: 2, size: 6 }}>
									<Label htmlFor="current-password">Include Archived Threads:</Label>
								</Col>
								<Col>
									<Label className="switch switch-sm switch-text switch-info mb-0">
										<Input
											type="checkbox"
											className="switch-input"
											checked={this.state.includeArchived}
											onChange={this.handleInputChange}
											name="includeArchived"
										/>
										<span className="switch-label" data-on="Yes" data-off="No" />
										<span className="switch-handle" />
									</Label>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ offset: 2, size: 6 }}>
									<Label htmlFor="current-password">Include Characters on Hiatus:</Label>
								</Col>
								<Col>
									<Label className="switch switch-sm switch-text switch-info mb-0">
										<Input
											type="checkbox"
											className="switch-input"
											checked={this.state.includeHiatused}
											onChange={this.handleInputChange}
											name="includeHiatused"
										/>
										<span className="switch-label" data-on="Yes" data-off="No" />
										<span className="switch-handle" />
									</Label>
								</Col>
							</FormGroup>
						</Form>
						<Row>
							<Col className="text-right">
								<Button
									type="submit"
									color="primary"
									onClick={
										() => onExportRequest(this.state.includeHiatused, this.state.includeArchived)}
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
