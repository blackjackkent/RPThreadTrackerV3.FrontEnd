import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import columns from '../../../infrastructure/constants/columns';
import validator from './_validator';
import formData from './_formData';

const propTypes = {
	viewToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertPublicViewForm = (props) => {
	const {
		viewToEdit,
		handleInputChange,
		tooltipDisplayData,
		showTooltip,
		hideTooltip,
		characters,
		tags
	} = props;
	const columnOptions = Object.getOwnPropertyNames(columns)
		.map(i => <option value={columns[i].key} key={columns[i].key}>{columns[i].name}</option>);
	const characterOptions = characters.map(c => (
		<option
			value={c.characterId}
			key={c.characterId}
		>
			{c.urlIdentifier} ({c.characterName ? c.characterName : 'Unnamed Character'})
		</option>
	));
	const tagOptions = tags.map(t => (<option value={t} key={t}>{t}</option>));
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
					<AvField
						name="sortDescending"
						label="Sort Order"
						type="select"
						value={viewToEdit.sortDescending}
						onChange={handleInputChange}
					>
						<option value={false}>Ascending</option>
						<option
							value={true} // eslint-disable-line react/jsx-boolean-value
						>
							Descending
						</option>
					</AvField>
				</Col>
			</Row>
			<Row className="public-view-form-turn-section">
				<div className="container">
					<Row>
						<Col xs="6">
							<label htmlFor="includeMyTurn">
								<input
									name="includeMyTurn"
									onChange={handleInputChange}
									type="checkbox"
									checked={viewToEdit.turnFilter && viewToEdit.turnFilter.includeMyTurn}
								/>
								Include My Turn Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeTheirTurn">
								<input
									name="includeTheirTurn"
									onChange={handleInputChange}
									type="checkbox"
									checked={viewToEdit.turnFilter && viewToEdit.turnFilter.includeTheirTurn}
								/>
								Include Partner{"'"}s Turn Threads
							</label>
						</Col>
					</Row>
					<Row>
						<Col xs="6">
							<label htmlFor="includeQueued">
								<input
									name="includeQueued"
									type="checkbox"
									onChange={handleInputChange}
									checked={viewToEdit.turnFilter && viewToEdit.turnFilter.includeQueued}
								/>
								Include Queued Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeArchived">
								<input
									name="includeArchived"
									type="checkbox"
									onChange={handleInputChange}
									checked={viewToEdit.turnFilter && viewToEdit.turnFilter.includeArchived}
								/>
								Include Archived Threads
							</label>
						</Col>
					</Row>
				</div>
			</Row>
			<Row> {/* view characters */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.characterIds}
						overlay={formData.characterIds.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="characterIds"
							label="Characters"
							type="select"
							value={viewToEdit.characterIds}
							onChange={handleInputChange}
							validate={validator.characterIds}
							helpMessage={formData.characterIds.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
						>
							{characterOptions}
						</AvField>
					</Tooltip>
				</Col>
			</Row>
			<Row> {/* view tags */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.tags}
						overlay={formData.tags.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="tags"
							label="Tags"
							type="select"
							value={viewToEdit.tags}
							onChange={handleInputChange}
							helpMessage={formData.tags.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
						>
							{tagOptions}
						</AvField>
					</Tooltip>
				</Col>
			</Row>
		</div >
	);
};

UpsertPublicViewForm.propTypes = propTypes;
export default UpsertPublicViewForm;
