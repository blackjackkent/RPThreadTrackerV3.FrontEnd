import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import MultipleValueTextInput from 'react-multivalue-text-input';
import CharacterSelectItem from '../../shared/CharacterSelectItem';
import validator from './_validator';
import formData from './_formData';

const propTypes = {
	thread: PropTypes.shape({
		characterId: PropTypes.number,
		userTitle: PropTypes.string,
		postId: PropTypes.string,
		partnerUrlIdentifier: PropTypes.string,
		description: PropTypes.string
	}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		partnerUrlIdentifier: PropTypes.bool
	}).isRequired,
	handleTagAdded: PropTypes.func.isRequired,
	handleTagRemoved: PropTypes.func.isRequired,
	tagValues: PropTypes.arrayOf(PropTypes.string).isRequired
};

const UpsertThreadForm = (props) => {
	const {
		thread,
		characters,
		showTooltip,
		hideTooltip,
		onInputChange,
		tooltipDisplayData,
		handleTagAdded,
		handleTagRemoved,
		tagValues
	} = props;
	const options = characters.map((c) => (
		<CharacterSelectItem key={c.characterId} character={c} />
	));
	return (
		<div>
			<Row>
				<Col>
					<AvField
						name="characterId"
						label="Character"
						type="select"
						value={thread.characterId}
						onChange={onInputChange}
						validate={validator.characterId}
						data-spec="character-select-field"
					>
						<option value="">Select Character</option>
						{options}
					</AvField>
				</Col>
			</Row>
			<Row>
				{' '}
				{/* thread title */}
				<Col>
					<AvField
						name="userTitle"
						placeholder="Thread Title"
						label="Thread Title"
						type="text"
						value={thread.userTitle}
						onChange={onInputChange}
						validate={validator.userTitle}
						helpMessage={formData.userTitle.helpMessage}
						data-spec="user-title-field"
					/>
				</Col>
			</Row>
			<Row>
				{' '}
				{/* thread post ID */}
				<Col>
					<AvField
						name="postId"
						placeholder="Post ID"
						label="Post ID"
						type="text"
						onChange={onInputChange}
						validate={validator.postId}
						value={thread.postId}
						helpMessage={formData.postId.helpMessage}
						data-spec="post-id-field"
					/>
				</Col>
			</Row>
			<Row>
				{' '}
				{/* partner url identifier */}
				<Col>
					<Tooltip
						visible={tooltipDisplayData.partnerUrlIdentifier}
						overlay={formData.partnerUrlIdentifier.tooltip}
						overlayStyle={{
							width: 300
						}}
						align={{
							offset: [0, 30]
						}}
						placement="top"
						data-spec="partner-url-identifier-tooltip"
					>
						<AvField
							name="partnerUrlIdentifier"
							placeholder="Partner Url Identifier"
							label="Partner URL Identifier (Optional)"
							type="text"
							onChange={onInputChange}
							validate={validator.partnerUrlIdentifier}
							value={thread.partnerUrlIdentifier}
							helpMessage={formData.partnerUrlIdentifier.helpMessage}
							onFocus={showTooltip}
							onBlur={hideTooltip}
							data-spec="partner-url-identifier-field"
						/>
					</Tooltip>
				</Col>
			</Row>
			{/* description */}
			<Row>
				<Col>
					<div className="form-group">
						<Label htmlFor="description">Thread Description (Optional)</Label>
						<Input
							type="textarea"
							name="description"
							id="description"
							rows="3"
							onChange={onInputChange}
							maxLength="250"
							defaultValue={thread.description}
							data-spec="description-field"
						/>
					</div>
				</Col>
			</Row>
			{/* tags */}
			<Row>
				<Col>
					<FormGroup>
						<MultipleValueTextInput
							values={tagValues}
							onItemAdded={handleTagAdded}
							onItemDeleted={handleTagRemoved}
							shouldAddOnBlur
							label="Thread Tags (Optional)"
							name="threadTags"
							placeholder="Thread Tags"
							className="form-control"
							labelClassName="form-control-label"
							data-spec="tags-field"
						/>
						<small className="form-text">{formData.threadTags.helpMessage}</small>
					</FormGroup>
				</Col>
			</Row>
		</div>
	);
};

UpsertThreadForm.propTypes = propTypes;
export default UpsertThreadForm;
