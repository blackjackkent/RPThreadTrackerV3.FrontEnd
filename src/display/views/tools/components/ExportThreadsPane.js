import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	TabPane,
	Form,
	FormGroup,
	Col,
	Label,
	Row,
	Input,
	Button,
	CardHeader,
	CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../../shared/styled/Card';
import SwitchLabel from '../../../shared/styled/SwitchLabel';
import { useGenerateExportedThreadsDocumentMutation } from '~/infrastructure/hooks/mutations';

const ExportThreadsPane = () => {
	const { generateDocument } = useGenerateExportedThreadsDocumentMutation();

	const onExportRequest = (includeHiatused, includeArchive) => {
		generateDocument({ includeHiatused, includeArchive });
	};
	const [includeHiatused, setIncludeHiatused] = useState(false);
	const [includeArchived, setIncludeArchived] = useState(false);

	const handleInputChange = (event) => {
		const { target } = event;
		const { name, checked } = target;
		if (name === 'includeArchived') {
			setIncludeArchived(checked);
		}
		if (name === 'includeHiatused') {
			setIncludeHiatused(checked);
		}
	};
	return (
		<TabPane tabId="export">
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'download']} /> Export Threads
				</CardHeader>
				<CardBody className="card-body">
					<Form
						action=""
						method="post"
						encType="multipart/form-data"
						className="form-horizontal"
					>
						<p>
							Use the button below to export an Excel file of your current threads in
							the database.
						</p>
						<FormGroup row>
							<Col
								md={{
									offset: 2,
									size: 6
								}}
							>
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
										onChange={handleInputChange}
										name="includeArchived"
									/>
									<span className="switch-label" data-on="Yes" data-off="No" />
									<span className="switch-handle" />
								</SwitchLabel>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col
								md={{
									offset: 2,
									size: 6
								}}
							>
								<Label htmlFor="current-password">
									Include Characters on Hiatus:
								</Label>
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
										onChange={handleInputChange}
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
								onClick={() => onExportRequest(includeHiatused, includeArchived)}
							>
								Export
							</Button>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</TabPane>
	);
};
export default ExportThreadsPane;
