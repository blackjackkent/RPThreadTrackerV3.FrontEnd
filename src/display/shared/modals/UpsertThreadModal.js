import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import CharacterSelect from '../CharacterSelect';
import { upsertThreadValidator as validator } from '../../forms/validators';
import { upsertThread as formData } from '../../forms/displayData';

const propTypes = {
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	submitUpsertThread: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class UpsertThreadModal extends Component {
	constructor() {
		super();
		this.selectCharacter = this.selectCharacter.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.showTooltip = this.showTooltip.bind(this);
		this.hideTooltip = this.hideTooltip.bind(this);
		this.state = {
			threadToEdit: null,
			displayTooltip: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ threadToEdit: nextProps.threadToEdit });
	}

	showTooltip(e) {
		const { name } = e.target;
		this.setState({
			displayTooltip: Object.assign({}, this.state.displayTooltip, {
				[name]: true
			})
		});
	}

	hideTooltip(e) {
		const { name } = e.target;
		this.setState({
			displayTooltip: Object.assign({}, this.state.displayTooltip, {
				[name]: false
			})
		});
	}

	selectCharacter(characterId) {
		if (this.state.threadToEdit.characterId !== characterId) {
			this.setState({ threadToEdit: { ...this.state.threadToEdit, characterId } });
		}
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState({
			threadToEdit: Object.assign({}, this.state.threadToEdit, {
				[name]: value
			})
		});
	}
	render() {
		const {
			isUpsertThreadModalOpen,
			submitUpsertThread,
			closeUpsertThreadModal,
			threadToEdit,
			characters
		} = this.props;
		if (!threadToEdit) {
			return (
				<div />
			);
		}
		return (
			<Modal isOpen={isUpsertThreadModalOpen} toggle={closeUpsertThreadModal} backdrop>
				<AvForm onValidSubmit={() => submitUpsertThread(this.state.threadToEdit)}>
					<ModalHeader toggle={closeUpsertThreadModal}>
						{threadToEdit && threadToEdit.threadId ? 'Edit Thread' : 'Add New Thread'}
					</ModalHeader>
					<ModalBody>
						<FormGroup row>
							<Col>
								<CharacterSelect
									characters={characters}
									selectedCharacterId={
										this.state.threadToEdit
											? this.state.threadToEdit.characterId
											: null
									}
									onSelectCharacter={this.selectCharacter}
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
									onChange={this.handleInputChange}
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
									onChange={this.handleInputChange}
									validate={validator.postId}
									value={this.state.threadToEdit ? this.state.threadToEdit.postId : null}
									helpMessage={formData.postId.helpMessage}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Tooltip
									visible={this.state.displayTooltip.partnerUrlIdentifier}
									overlay={formData.partnerUrlIdentifier.tooltip}
									overlayStyle={{ width: 300 }}
									placement="top"
								>
									<AvField
										name="partnerUrlIdentifier"
										placeholder="Partner Url Identifier"
										label="Partner URL Identifier (Optional)"
										type="text"
										onChange={this.handleInputChange}
										validate={validator.partnerUrlIdentifier}
										value={this.state.threadToEdit
											? this.state.threadToEdit.partnerUrlIdentifier
											: null}
										helpMessage={formData.partnerUrlIdentifier.helpMessage}
										onFocus={this.showTooltip}
										onBlur={this.hideTooltip}
									/>
								</Tooltip>
							</Col>
						</Row>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">{threadToEdit && threadToEdit.threadId ? 'Edit Thread' : 'Add Thread'}</Button>{' '}
						<Button color="secondary" onClick={closeUpsertThreadModal}>Cancel</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertThreadModal.propTypes = propTypes;
export default UpsertThreadModal;
