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
	characterToEdit: PropTypes.shape({}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const UpsertCharacterForm = (props) => {
	const {
		characterToEdit,
		handleInputChange,
		tooltipDisplayData,
		showTooltip,
		hideTooltip
	} = props;
	return (
		<div>
			<Row> {/* character name */}
				<Col>
					<AvField
						name="characterName"
						placeholder="Character Name"
						label="Character Name"
						type="text"
						value={characterToEdit.characterName}
						onChange={handleInputChange}
						validate={validator.characterName}
						data-spec="character-name-field"
					/>
				</Col>
			</Row>
			<FormGroup row> {/* character platform */}
				<Col>
					<Label htmlFor="character-platform">Platform:</Label>
					<Input
						disabled
						type="select"
						name="character-platform"
						id="character-platform"
						value={characterToEdit.platformId}
						data-spec="platform-id-field"
					>
						<option value={1}>Tumblr</option>
					</Input>
				</Col>
			</FormGroup>
			<Row> {/* character url identifier */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.urlIdentifier}
						overlay={formData.urlIdentifier.tooltip}
						overlayStyle={{ width: 300 }}
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
							value={characterToEdit.urlIdentifier}
							onChange={handleInputChange}
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
