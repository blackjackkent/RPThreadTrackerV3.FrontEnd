import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import columns from '../../../infrastructure/constants/columns';

const propTypes = {
	viewToEdit: PropTypes.shape({}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	validator: PropTypes.shape({}).isRequired,
	formData: PropTypes.shape({}).isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertPublicViewForm = (props) => {
	const {
		viewToEdit,
		handleInputChange,
		validator,
		formData,
		tooltipDisplayData,
		showTooltip,
		hideTooltip
	} = props;
	const columnOptions = Object.getOwnPropertyNames(columns)
		.map(i => <option value={columns[i].key} key={columns[i].key}>{columns[i].name}</option>);
	if (!viewToEdit) {
		return (
			<div />
		);
	}
	return (
		<div>
			<Row> {/* view name */}
				<Col>
					<AvField
						name="name"
						placeholder="View Name"
						label="View Name"
						type="text"
						value={viewToEdit.name}
						onChange={handleInputChange}
						validate={validator.name}
						helpMessage={formData.name.helpMessage}
					/>
				</Col>
			</Row>
			<Row> {/* view slug */}
				<Col>

					<Tooltip
						visible={tooltipDisplayData.slug}
						overlay={formData.slug.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="slug"
							placeholder="URL Slug"
							label="URL Slug"
							type="text"
							value={viewToEdit.slug}
							onChange={handleInputChange}
							validate={validator.slug}
							helpMessage={formData.slug.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
						/>
					</Tooltip>
				</Col>
			</Row>
			<Row> {/* view columns */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.columns}
						overlay={formData.columns.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="columns"
							label="View Columns"
							type="select"
							value={viewToEdit.columns}
							onChange={handleInputChange}
							validate={validator.columns}
							helpMessage={formData.columns.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
						>
							{columnOptions}
						</AvField>
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col xs="6">
					<AvField
						name="sortKey"
						label="Sort By"
						type="select"
						value={viewToEdit.sortKey}
						onChange={handleInputChange}
						validate={validator.sortKey}
					>
						<option value="">Select Column</option>
						{columnOptions}
					</AvField>
				</Col>

				<Col xs="6">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="checkbox"
							id="inlineCheckbox1"
							value="option1"
						/>
						<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
					</div>
				</Col>
			</Row>
		</div>
	);
};

UpsertPublicViewForm.propTypes = propTypes;
export default UpsertPublicViewForm;
