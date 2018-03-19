import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import CharacterSelect from '../../shared/CharacterSelect';
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
	tooltipDisplayData: PropTypes.shape({}).isRequired
};

class UpsertThreadForm extends Component {
	constructor() {
		super();
		this.state = {
			threadToEdit: {
				userTitle: '',
				postId: '',
				partnerUrlIdentifier: '',
				threadTags: []
			}
		};
		this.handleTagAdded = this.handleTagAdded.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			threadToEdit: Object.assign({}, this.state.threadToEdit, nextProps.threadToEdit)
		});
	}
	handleTagAdded(tagValue) {
		const currentTags = this.state.threadToEdit.threadTags;
		const newTag = { tagText: tagValue };
		const newTags = currentTags.concat(newTag);
		this.setState({
			threadToEdit: Object.assign({}, this.state.threadToEdit, {
				threadTags: newTags
			})
		});
	}
	handleTagRemoved(tagValue) {
		const currentTags = this.state.threadToEdit.threadTags;
		const newTags = currentTags.filter(tag => tag.tagText !== tagValue);
		this.setState({
			threadToEdit: Object.assign({}, this.state.threadToEdit, {
				threadTags: newTags
			})
		});
	}
	render() {
		const {
			threadToEdit,
			characters,
			showTooltip,
			hideTooltip,
			selectCharacter,
			handleInputChange,
			validator,
			formData,
			tooltipDisplayData
		} = this.props;
		const tagValues = this.state.threadToEdit.threadTags.map(t => t.tagText);
		let selectedCharacterId = -1;
		if (this.state.threadToEdit.characterId) {
			selectedCharacterId = this.state.threadToEdit.characterId;
		} else if (characters.length) {
			selectedCharacterId = characters[0].characterId;
		}
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
							selectedCharacterId={selectedCharacterId}
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
							value={this.state.threadToEdit.userTitle ? this.state.threadToEdit.userTitle : ''}
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
							value={this.state.threadToEdit.postId ? this.state.threadToEdit.postId : ''}
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
								value={this.state.threadToEdit.partnerUrlIdentifier
									? this.state.threadToEdit.partnerUrlIdentifier
									: ''}
								helpMessage={formData.partnerUrlIdentifier.helpMessage}
								onFocus={showTooltip}
								onBlur={hideTooltip}
							/>
						</Tooltip>
					</Col>
				</Row>
				<MultipleValueTextInput
					values={tagValues}
					onItemAdded={this.handleTagAdded}
					onItemDeleted={this.handleTagRemoved}
					label="Thread Tags"
					name="threadTags"
					placeholder="Thread Tags"
					helpMessage={formData.threadTags.helpMessage}
				/>
			</div>
		);
	}
}

UpsertThreadForm.propTypes = propTypes;
export default UpsertThreadForm;
