import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import formData from './_formData';
import ValidatedHiddenInput from '../validated-form/ValidatedHiddenInput';
import ValidatedSelectInput from '../validated-form/ValidatedSelectInput';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
import ValidatedTextAreaInput from '../validated-form/ValidatedTextAreaInput';
import ValidatedMultiValueTextInput from '../validated-form/ValidatedMultiValueTextInput';

const propTypes = {
	thread: PropTypes.shape({
		id: PropTypes.string,
		characterId: PropTypes.number,
		userTitle: PropTypes.string,
		postId: PropTypes.string,
		partnerUrlIdentifier: PropTypes.string,
		description: PropTypes.string,
		threadTags: PropTypes.arrayOf(PropTypes.shape({}))
	}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired,
	inputProps: PropTypes.shape({}).isRequired,
	tooltipDisplayData: PropTypes.shape({
		partnerUrlIdentifier: PropTypes.bool
	}).isRequired
};

const UpsertThreadForm = ({
	inputProps,
	thread,
	characters,
	showTooltip,
	hideTooltip,
	tooltipDisplayData
}) => {
	const characterOptions = characters.map((c) => ({
		value: c.characterId,
		label: `${c.urlIdentifier} ${c.characterName ? `(${c.characterName})` : ''}`
	}));
	return (
		<div>
			{thread?.id && <ValidatedHiddenInput name="id" {...inputProps} />}
			<Row>
				<Col>
					<FormGroup>
						<Label for="characterId">Character</Label>
						<ValidatedSelectInput
							name="characterId"
							{...inputProps}
							options={[
								{ value: '', label: 'Select Character' },
								...characterOptions
							]}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label for="userTitle">Thread Title</Label>
						<ValidatedTextInput
							name="userTitle"
							placeholder="Thread Title"
							helpMessage={formData.userTitle.helpMessage}
							{...inputProps}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<Label for="postId">Post ID</Label>
						<ValidatedTextInput
							name="postId"
							placeholder="Post ID"
							helpMessage={formData.postId.helpMessage}
							{...inputProps}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
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
					>
						<FormGroup>
							<Label for="partnerUrlIdentifier">
								Partner URL Identifier (Optional)
							</Label>
							<ValidatedTextInput
								name="partnerUrlIdentifier"
								placeholder="Partner Url Identifier"
								helpMessage={formData.partnerUrlIdentifier.helpMessage}
								onFocus={showTooltip}
								onBlur={hideTooltip}
								{...inputProps}
							/>
						</FormGroup>
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="form-group">
						<Label htmlFor="description">Thread Description (Optional)</Label>
						<ValidatedTextAreaInput
							name="description"
							rows="3"
							maxLength="250"
							{...inputProps}
						/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<FormGroup>
						<ValidatedMultiValueTextInput
							{...inputProps}
							label="Thread Tags (Optional)"
							name="threadTags"
							transform={{
								input: (data) => data?.map((t) => t.tagText),
								output: (data) =>
									data?.map((t) => ({
										tagText: t
									}))
							}}
							placeholder="Thread Tags"
							className="form-control"
							labelClassName="form-control-label"
							helpMessage={formData.threadTags.helpMessage}
						/>
					</FormGroup>
				</Col>
			</Row>
		</div>
	);
};

UpsertThreadForm.propTypes = propTypes;
export default UpsertThreadForm;
