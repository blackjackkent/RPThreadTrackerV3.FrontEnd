import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import CharacterSelect from '../../shared/character-select/CharacterSelect';
import MultipleValueTextInput from '../../shared/MultipleValueTextInput';

const propTypes = {
	threadToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired,
	selectCharacter: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	validator: PropTypes.shape({}).isRequired,
	formData: PropTypes.shape({}).isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	handleTagAdded: PropTypes.func.isRequired,
	handleTagRemoved: PropTypes.func.isRequired,
	tagValues: PropTypes.arrayOf(PropTypes.string).isRequired
};

const UpsertThreadForm = (props) => {
	const {
		threadToEdit,
		characters,
		showTooltip,
		hideTooltip,
		selectCharacter,
		handleInputChange,
		validator,
		formData,
		tooltipDisplayData,
		handleTagAdded,
		handleTagRemoved,
		tagValues
	} = props;
	if (!threadToEdit) {
		return (
			<div />
		);
	}
	return (
		<div>
			<FormGroup row>
				<Col>
					<CharacterSelect
						characters={characters}
						selectedCharacterId={threadToEdit.characterId}
						onSelectCharacter={selectCharacter}
						includeNullValue={false}
					/>
				</Col>
			</FormGroup>
			<Row>
				<Col>
					<AvField
						name="userTitle"
						placeholder="Thread Title"
						label="Thread Title"
						type="text"
						value={threadToEdit.userTitle}
						onChange={handleInputChange}
						validate={validator.userTitle}
						helpMessage={formData.userTitle.helpMessage}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<AvField
						name="postId"
						placeholder="Post ID"
						label="Post ID"
						type="text"
						onChange={handleInputChange}
						validate={validator.postId}
						value={threadToEdit.postId}
						helpMessage={formData.postId.helpMessage}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<Tooltip
						visible={tooltipDisplayData.partnerUrlIdentifier}
						overlay={formData.partnerUrlIdentifier.tooltip}
						overlayStyle={{ width: 300 }}
						align={{
							offset: [0, 30]
						}}
						placement="top"
					>
						<AvField
							name="partnerUrlIdentifier"
							placeholder="Partner Url Identifier"
							label="Partner URL Identifier (Optional)"
							type="text"
							onChange={handleInputChange}
							validate={validator.partnerUrlIdentifier}
							value={threadToEdit.partnerUrlIdentifier}
							helpMessage={formData.partnerUrlIdentifier.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
						/>
					</Tooltip>
				</Col>
			</Row>
			<MultipleValueTextInput
				values={tagValues}
				onItemAdded={handleTagAdded}
				onItemDeleted={handleTagRemoved}
				label="Thread Tags"
				name="threadTags"
				placeholder="Thread Tags"
				helpMessage={formData.threadTags.helpMessage}
			/>
		</div>
	);
};

UpsertThreadForm.propTypes = propTypes;
export default UpsertThreadForm;
