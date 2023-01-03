import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import formData from './_formData';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
import ValidatedSelectInput from '../validated-form/ValidatedSelectInput';
import ValidatedHiddenInput from '../validated-form/ValidatedHiddenInput';
import ValidatedCheckboxInput from '../validated-form/ValidatedCheckboxInput';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	tooltipDisplayData: PropTypes.shape({
		slug: PropTypes.bool,
		columns: PropTypes.bool,
		characterIds: PropTypes.bool,
		tags: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired,
	columns: PropTypes.shape({}).isRequired,
	inputProps: PropTypes.shape({}).isRequired,
	actedView: PropTypes.shape({})
};

const UpsertPublicViewForm = (props) => {
	const { tooltipDisplayData, inputProps, showTooltip, hideTooltip, characters, tags, columns } =
		props;
	const columnOptions = Object.getOwnPropertyNames(columns)
		.filter((i) => columns[i].name)
		.map((i) => ({
			value: columns[i].key,
			label: columns[i].name
		}));
	const characterOptions = characters.map((c) => ({
		value: c.characterId,
		label: `${c.urlIdentifier} (${c.characterName ? c.characterName : 'Unnamed Character'})`
	}));
	const tagOptions = tags.map((t) => ({
		value: t,
		label: t
	}));

	return (
		<div>
			<ValidatedHiddenInput name="id" {...inputProps} />
			<Row>
				<Col>
					<FormGroup>
						<Label for="name">View Name</Label>
						<ValidatedTextInput
							name="name"
							placeholder="View Name"
							helpMessage={formData.name.helpMessage}
							{...inputProps}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label for="slug">URL Slug</Label>
						<Tooltip
							visible={tooltipDisplayData.slug}
							overlay={formData.slug.tooltip}
							overlayStyle={{
								width: 300
							}}
							align={{
								offset: [0, 30]
							}}
							placement="top"
						>
							<ValidatedTextInput
								name="slug"
								placeholder="URL Slug"
								helpMessage={formData.slug.helpMessage}
								{...inputProps}
								onFocus={showTooltip}
								onBlur={hideTooltip}
							/>
						</Tooltip>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label for="columns">View Columns</Label>
						<ValidatedSelectInput
							name="columns"
							{...inputProps}
							helpMessage={formData.columns.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
							options={columnOptions}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col xs="6">
					<FormGroup>
						<Label for="sortKey">Sort By</Label>
						<ValidatedSelectInput
							name="sortKey"
							{...inputProps}
							options={[{ value: '', label: 'Select Column' }, ...columnOptions]}
						/>
					</FormGroup>
				</Col>

				<Col xs="6">
					<FormGroup>
						<Label for="sortDescending">Sort Order</Label>
						<ValidatedSelectInput
							name="sortDescending"
							{...inputProps}
							options={[
								{ value: false, label: 'Ascending' },
								{
									value: true,
									label: 'Descending'
								}
							]}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row className="public-view-form-turn-section">
				<div className="container">
					<Row>
						<Col xs="6">
							<label htmlFor="includeMyTurn">
								<ValidatedCheckboxInput
									name="turnFilter.includeMyTurn"
									{...inputProps}
								/>{' '}
								Include My Turn Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeTheirTurn">
								<ValidatedCheckboxInput
									name="turnFilter.includeTheirTurn"
									{...inputProps}
								/>{' '}
								Include Partner&apos;s Turn Threads
							</label>
						</Col>
					</Row>
					<Row>
						<Col xs="6">
							<label htmlFor="includeQueued">
								<ValidatedCheckboxInput
									name="turnFilter.includeQueued"
									{...inputProps}
								/>{' '}
								Include Queued Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeArchived">
								<ValidatedCheckboxInput
									name="turnFilter.includeArchived"
									{...inputProps}
								/>{' '}
								Include Archived Threads
							</label>
						</Col>
					</Row>
				</div>
			</Row>

			<Row>
				<Col>
					<FormGroup>
						<Label for="characterIds">Characters</Label>
						<ValidatedSelectInput
							name="characterIds"
							{...inputProps}
							helpMessage={formData.characterIds.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
							options={characterOptions}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<Label for="tags">Tags</Label>
					<ValidatedSelectInput
						name="tags"
						{...inputProps}
						helpMessage={formData.tags.helpMessage}
						multiple
						onFocus={showTooltip}
						onBlur={hideTooltip}
						options={tagOptions}
					/>
				</Col>
			</Row>
		</div>
	);
};

UpsertPublicViewForm.propTypes = propTypes;
export default UpsertPublicViewForm;
