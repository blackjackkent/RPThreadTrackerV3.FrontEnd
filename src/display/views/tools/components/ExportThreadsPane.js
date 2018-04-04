import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Form, FormGroup, Col, Label, Row, Input, Button } from 'reactstrap';

const propTypes = {
	onExportRequest: PropTypes.func.isRequired
};

const ExportThreadsPane = (props) => {
	const { onExportRequest } = props;
	return (
		<TabPane tabId="export-threads">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<p>Use the button below to export an Excel file of your current threads in the database.</p>
				<FormGroup row>
					<Col xs="8" sm="5" md="4" xl="2">
						<Label htmlFor="current-password">Include Archived Threads:</Label>
					</Col>
					<Col xs="3" md="3" xl="1">
						<Label className="switch switch-sm switch-text switch-info mb-0">
							<Input
								type="checkbox"
								className="switch-input"
							/>
							<span className="switch-label" data-on="Yes" data-off="No" />
							<span className="switch-handle" />
						</Label>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col xs="8" sm="5" md="4" xl="2">
						<Label htmlFor="current-password">Include Characters on Hiatus:</Label>
					</Col>
					<Col xs="3" md="3" xl="1">
						<Label className="switch switch-sm switch-text switch-info mb-0">
							<Input
								type="checkbox"
								className="switch-input"
							/>
							<span className="switch-label" data-on="Yes" data-off="No" />
							<span className="switch-handle" />
						</Label>
					</Col>
				</FormGroup>
			</Form>
			<Row>
				<Col xs="1">
					<Button type="submit" color="primary" onClick={onExportRequest}>
						Export
					</Button>
				</Col>
			</Row>
		</TabPane>
	);
};
ExportThreadsPane.propTypes = propTypes;
export default ExportThreadsPane;
