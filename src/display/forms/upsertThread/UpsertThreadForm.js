import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import CharacterSelect from '../../shared/CharacterSelect';

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
			threadToEdit: null
		};
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
							selectedCharacterId={
								this.state.threadToEdit
									? this.state.threadToEdit.characterId
									: null
							}
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
							value={this.state.threadToEdit ? this.state.threadToEdit.userTitle : null}
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
							value={this.state.threadToEdit ? this.state.threadToEdit.postId : null}
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
							placement="top"
						>
							<AvField
								name="partnerUrlIdentifier"
								placeholder="Partner Url Identifier"
								label="Partner URL Identifier (Optional)"
								type="text"
								onChange={handleInputChange}
								validate={validator.partnerUrlIdentifier}
								value={this.state.threadToEdit
									? this.state.threadToEdit.partnerUrlIdentifier
									: null}
								helpMessage={formData.partnerUrlIdentifier.helpMessage}
								onFocus={showTooltip}
								onBlur={hideTooltip}
							/>
						</Tooltip>
					</Col>
				</Row>
			</div>
		);
	}
}

UpsertThreadForm.propTypes = propTypes;
export default UpsertThreadForm;
