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
	inputProps: PropTypes.shape({}).isRequired
};

const UpsertPublicViewForm = (props) => {
	const { tooltipDisplayData, inputProps, showTooltip, hideTooltip, characters, tags, columns } =
		props;
	const columnOptions = Object.getOwnPropertyNames(columns)
		.filter((i) => columns[i].name)
		.map((i) => (
			<option value={columns[i].key} key={columns[i].key}>
				{columns[i].name}
			</option>
		));
	const characterOptions = characters.map((c) => (
		<option value={c.characterId} key={c.characterId}>
			{c.urlIdentifier} ({c.characterName ? c.characterName : 'Unnamed Character'})
		</option>
	));
	const tagOptions = tags.map((t) => (
		<option value={t} key={t}>
			{t}
		</option>
	));

	// const handleMultiSelectChange = (e, value, parseAsInt = false) => {
	// 	const result = [];
	// 	const select = e.target;
	// 	if (select && select.options) {
	// 		const { options } = select;
	// 		let opt;

	// 		for (let i = 0; i < options.length; i++) {
	// 			opt = options[i];`
	// 			if (opt.selected) {
	// 				let data = opt.value || opt.text;
	// 				if (parseAsInt) {
	// 					data = parseInt(data, 10);
	// 				}
	// 				result.push(data);
	// 			}
	// 		}
	// 	}
	// 	onInputChange({ target: { name: e.target.name, value: result } });
	// };

	// const handleTurnFilterCheckboxChange = (e) => {
	// 	const { name, checked } = e.target;
	// 	let { turnFilter } = publicView;
	// 	if (!turnFilter) {
	// 		turnFilter = {};
	// 	}
	// 	turnFilter[name] = checked;
	// 	onInputChange({ target: { name: 'turnFilter', value: turnFilter } });
	// };

	return (
		<div>
			<ValidatedHiddenInput type="hidden" name="id" {...inputProps} />
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
						<Tooltip
							visible={tooltipDisplayData.columns}
							overlay={formData.columns.tooltip}
							overlayStyle={{
								width: 300
							}}
							align={{
								offset: [0, 30]
							}}
							placement="top"
						>
							<ValidatedSelectInput
								name="columns"
								helpMessage={formData.columns.helpMessage}
								{...inputProps}
								onFocus={showTooltip}
								onBlur={hideTooltip}
								multiple
							>
								{columnOptions}
							</ValidatedSelectInput>
						</Tooltip>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col xs="6">
					<FormGroup>
						<Label for="sortKey">Sort By</Label>
						<ValidatedSelectInput name="sortKey" {...inputProps}>
							<option value="">Select Column</option>
							{columnOptions}
						</ValidatedSelectInput>
					</FormGroup>
				</Col>

				<Col xs="6">
					<FormGroup>
						<Label for="sortDescending">Sort Order</Label>
						<ValidatedSelectInput name="sortDescending" {...inputProps}>
							<option value={false}>Ascending</option>
							<option
								value={true} // eslint-disable-line react/jsx-boolean-value
							>
								Descending
							</option>
						</ValidatedSelectInput>
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
						<Tooltip
							visible={tooltipDisplayData.characterIds}
							overlay={formData.characterIds.tooltip}
							overlayStyle={{
								width: 300
							}}
							align={{
								offset: [0, 30]
							}}
							placement="top"
						>
							<ValidatedSelectInput
								name="characterIds"
								{...inputProps}
								helpMessage={formData.characterIds.helpMessage}
								multiple
								onFocus={showTooltip}
								onBlur={hideTooltip}
							>
								{characterOptions}
							</ValidatedSelectInput>
						</Tooltip>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<Label for="tags">Tags</Label>
					<Tooltip
						visible={tooltipDisplayData.tags}
						overlay={formData.tags.tooltip}
						overlayStyle={{
							width: 300
						}}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<ValidatedSelectInput
							name="tags"
							{...inputProps}
							helpMessage={formData.tags.helpMessage}
							multiple
							onFocus={showTooltip}
							onBlur={hideTooltip}
						>
							{tagOptions}
						</ValidatedSelectInput>
					</Tooltip>
				</Col>
			</Row>
		</div>
	);
};

UpsertPublicViewForm.propTypes = propTypes;
export default UpsertPublicViewForm;
