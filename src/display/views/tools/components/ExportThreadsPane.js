import React from 'react';
import { TabPane, Form, FormGroup, Col, Label, Row, Input, Button } from 'reactstrap';

const ExportThreadsPane = () => (
	<TabPane tabId="export-threads">
		<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
			<p>Use the button below to export an Excel file of your current threads in the database.</p>
			<FormGroup row>
				<Col xs="6" sm="5" md="4" xl="2">
					<Label htmlFor="current-password">Include Archived Threads:</Label>
				</Col>
				<Col xs="6" md="3" xl="1">
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
				<Col xs="6" sm="5" md="4" xl="2">
					<Label htmlFor="current-password">Include Characters on Hiatus:</Label>
				</Col>
				<Col xs="6" md="3" xl="1">
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
			<Col sm="12" md={{ size: 8 }} className="text-right">
				<Button type="submit" color="primary">
					Export
				</Button>
			</Col>
		</Row>
	</TabPane>
);

export default ExportThreadsPane;
