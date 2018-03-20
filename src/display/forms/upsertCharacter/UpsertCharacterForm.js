import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';

const propTypes = {
	characterToEdit: PropTypes.shape({}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	validator: PropTypes.shape({}).isRequired,
	formData: PropTypes.shape({}).isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertCharacterForm = (props) => {
	const {
		characterToEdit,
		handleInputChange,
		validator,
		formData,
		tooltipDisplayData,
		showTooltip,
		hideTooltip
	} = props;
	if (!characterToEdit) {
		return (
			<div />
		);
	}
	return (
		<div>
			<Row>
				<Col>
					<AvField
						name="characterName"
						placeholder="Character Name"
						label="Character Name"
						type="text"
						value={characterToEdit.characterName}
						onChange={handleInputChange}
						validate={validator.characterName}
					/>
				</Col>
			</Row>
			<FormGroup row>
				<Col>
					<Label htmlFor="character-platform">Platform:</Label>
					<Input
						disabled
						type="select"
						name="character-platform"
						id="character-platform"
						value={characterToEdit.platformId}
					>
						<option value={1}>Tumblr</option>
					</Input>
				</Col>
			</FormGroup>
			<Row>
				<Col>
					<Tooltip
						visible={tooltipDisplayData.urlIdentifier}
						overlay={formData.urlIdentifier.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="urlIdentifier"
							placeholder="Character URL Identifier"
							label="Character URL Identifier"
							type="text"
							value={characterToEdit.urlIdentifier}
							onChange={handleInputChange}
							validate={validator.urlIdentifier}
							helpMessage={formData.urlIdentifier.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
						/>
					</Tooltip>
				</Col>
			</Row>
		</div>
	);
};

UpsertCharacterForm.propTypes = propTypes;
export default UpsertCharacterForm;
