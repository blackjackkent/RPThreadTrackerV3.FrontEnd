// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';
// #endregion imports

const propTypes = {
	character: PropTypes.shape({
		characterName: PropTypes.string,
		platformId: PropTypes.number,
		urlIdentifier: PropTypes.string
	}).isRequired,
	onInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		urlIdentifier: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertCharacterForm = (props) => {
	const { character, onInputChange, tooltipDisplayData, showTooltip, hideTooltip } = props;
	return (
		<div>
			<Row>
				{' '}
				{/* character name */}
				<Col>
					<AvField
						name="characterName"
						placeholder="Character Name"
						label="Character Name"
						type="text"
						value={character.characterName}
						onChange={onInputChange}
						validate={validator.characterName}
						data-spec="character-name-field"
					/>
				</Col>
			</Row>
			<FormGroup row>
				{' '}
				{/* character platform */}
				<Col>
					<Label htmlFor="character-platform">Platform:</Label>
					<Input
						disabled
						type="select"
						name="characterPlatform"
						id="character-platform"
						onChange={onInputChange}
						value={character.platformId}
						data-spec="platform-id-field"
					>
						<option value={1}>Tumblr</option>
					</Input>
				</Col>
			</FormGroup>
			<Row>
				{' '}
				{/* character url identifier */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.urlIdentifier}
						overlay={formData.urlIdentifier.tooltip}
						overlayStyle={{
							width: 300
						}}
						align={{
							offset: [0, 30]
						}}
						placement="top"
						data-spec="url-identifier-tooltip"
					>
						<AvField
							name="urlIdentifier"
							placeholder="Character URL Identifier"
							label="Character URL Identifier"
							type="text"
							value={character.urlIdentifier}
							onChange={onInputChange}
							validate={validator.urlIdentifier}
							helpMessage={formData.urlIdentifier.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
							data-spec="url-identifier-field"
						/>
					</Tooltip>
				</Col>
			</Row>
		</div>
	);
};

UpsertCharacterForm.propTypes = propTypes;
export default UpsertCharacterForm;
