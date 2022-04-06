import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';

const propTypes = {
	publicView: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		slug: PropTypes.string,
		columns: PropTypes.arrayOf(PropTypes.string),
		sortKey: PropTypes.string,
		sortDescending: PropTypes.bool,
		turnFilter: PropTypes.shape({
			includeMyTurn: PropTypes.bool,
			includeTheirTurn: PropTypes.bool,
			includeQueued: PropTypes.bool,
			includeArchived: PropTypes.bool
		}),
		characterIds: PropTypes.arrayOf(PropTypes.number),
		tags: PropTypes.arrayOf(PropTypes.string)
	}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	onInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		slug: PropTypes.bool,
		columns: PropTypes.bool,
		characterIds: PropTypes.bool,
		tags: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired,
	columns: PropTypes.shape({}).isRequired
};

const UpsertPublicViewForm = (props) => {
	const {
		publicView,
		onInputChange,
		tooltipDisplayData,
		showTooltip,
		hideTooltip,
		characters,
		tags,
		columns
	} = props;
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

	const handleMultiSelectChange = (e, value, parseAsInt = false) => {
		const result = [];
		const select = e.target;
		if (select && select.options) {
			const { options } = select;
			let opt;

			for (let i = 0; i < options.length; i++) {
				opt = options[i];
				if (opt.selected) {
					let data = opt.value || opt.text;
					if (parseAsInt) {
						data = parseInt(data, 10);
					}
					result.push(data);
				}
			}
		}
		onInputChange({ target: { name: e.target.name, value: result } });
	};

	const handleCharacterSelectChange = (e) => {
		handleMultiSelectChange(e, e.target.value, true);
	};

	const handleTurnFilterCheckboxChange = (e) => {
		const { name, checked } = e.target;
		let { turnFilter } = publicView;
		if (!turnFilter) {
			turnFilter = {};
		}
		turnFilter[name] = checked;
		onInputChange({ target: { name: 'turnFilter', value: turnFilter } });
	};

	const handleSortDirectionChange = (e) => {
		onInputChange({
			target: { ...e.target, name: e.target.name, value: e.target.value === 'true' }
		});
	};

	return (
		<div>
			<AvField type="hidden" name="viewId" value={publicView.id} />
			<Row>
				{' '}
				{/* view name */}
				<Col>
					<AvField
						name="name"
						placeholder="View Name"
						label="View Name"
						type="text"
						value={publicView.name}
						onChange={onInputChange}
						validate={validator.name}
						helpMessage={formData.name.helpMessage}
					/>
				</Col>
			</Row>
			<Row>
				{' '}
				{/* view slug */}
				<Col>
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
						<AvField
							name="slug"
							placeholder="URL Slug"
							label="URL Slug"
							type="text"
							value={publicView.slug}
							onChange={onInputChange}
							validate={validator.slug}
							helpMessage={formData.slug.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
						/>
					</Tooltip>
				</Col>
			</Row>
			<Row>
				{' '}
				{/* view columns */}
				<Col>
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
						<AvField
							name="columns"
							label="View Columns"
							type="select"
							value={publicView.columns}
							onChange={handleMultiSelectChange}
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
						value={publicView.sortKey}
						onChange={onInputChange}
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
						value={publicView.sortDescending}
						onChange={handleSortDirectionChange}
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
									onChange={handleTurnFilterCheckboxChange}
									type="checkbox"
									checked={publicView?.turnFilter?.includeMyTurn ?? false}
								/>{' '}
								Include My Turn Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeTheirTurn">
								<input
									name="includeTheirTurn"
									onChange={handleTurnFilterCheckboxChange}
									type="checkbox"
									checked={publicView?.turnFilter?.includeTheirTurn ?? false}
								/>{' '}
								Include Partner&apos;s Turn Threads
							</label>
						</Col>
					</Row>
					<Row>
						<Col xs="6">
							<label htmlFor="includeQueued">
								<input
									name="includeQueued"
									type="checkbox"
									onChange={handleTurnFilterCheckboxChange}
									checked={publicView?.turnFilter?.includeQueued ?? false}
								/>{' '}
								Include Queued Threads
							</label>
						</Col>
						<Col xs="6">
							<label htmlFor="includeArchived">
								<input
									name="includeArchived"
									type="checkbox"
									onChange={handleTurnFilterCheckboxChange}
									checked={publicView?.turnFilter?.includeArchived ?? false}
								/>{' '}
								Include Archived Threads
							</label>
						</Col>
					</Row>
				</div>
			</Row>
			<Row>
				{' '}
				{/* view characters */}
				<Col>
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
						<AvField
							name="characterIds"
							label="Characters"
							type="select"
							value={publicView.characterIds}
							onChange={handleCharacterSelectChange}
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
			<Row>
				{' '}
				{/* view tags */}
				<Col>
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
						<AvField
							name="tags"
							label="Tags"
							type="select"
							value={publicView.tags}
							onChange={handleMultiSelectChange}
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
		</div>
	);
};

UpsertPublicViewForm.propTypes = propTypes;
export default UpsertPublicViewForm;
