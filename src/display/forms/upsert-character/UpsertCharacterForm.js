// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import formData from './_formData';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
// #endregion imports

const propTypes = {
	inputProps: PropTypes.shape({}).isRequired,
	tooltipDisplayData: PropTypes.shape({
		urlIdentifier: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertCharacterForm = (props) => {
	const { inputProps, tooltipDisplayData, showTooltip, hideTooltip } = props;
	return (
		<div>
			<FormGroup row>
				{' '}
				{/* character name */}
				<Col>
					<Label for="characterName">Character Name</Label>
					<ValidatedTextInput
						name="characterName"
						placeholder="Character Name"
						{...inputProps}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col>
					<Label htmlFor="character-platform">Platform:</Label>
					<Input disabled type="select" name="characterPlatform" id="character-platform">
						<option value={1}>Tumblr</option>
					</Input>
				</Col>
			</FormGroup>
			<FormGroup row>
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
					>
						<div>
							<Label for="urlIdentifier">Character URL Identifier</Label>
							<ValidatedTextInput
								name="urlIdentifier"
								placeholder="Character URL Identifier"
								helpMessage={formData.urlIdentifier.helpMessage}
								onFocus={showTooltip}
								onBlur={hideTooltip}
								{...inputProps}
							/>
						</div>
					</Tooltip>
				</Col>
			</FormGroup>
		</div>
	);
};

UpsertCharacterForm.propTypes = propTypes;
export default UpsertCharacterForm;
