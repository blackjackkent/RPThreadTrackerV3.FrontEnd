import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const propTypes = {
	isEditCharacterModalOpen: PropTypes.bool.isRequired,
	submitEditCharacter: PropTypes.func.isRequired,
	closeEditCharacterModal: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired
};

const EditCharacterModal = (props) => {
	const {
		isEditCharacterModalOpen,
		submitEditCharacter,
		closeEditCharacterModal,
		characterToEdit
	} = props;
	if (!characterToEdit) {
		return (
			<div />
		);
	}
	return (
		<Modal isOpen={isEditCharacterModalOpen} toggle={closeEditCharacterModal} backdrop>
			<ModalHeader toggle={closeEditCharacterModal}>{characterToEdit.id ? 'Edit Character' : 'Add Character'}</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup row>
						<Col>
							<Label htmlFor="character-name">Character Name:</Label>
							<Input
								type="text"
								id="character-name"
								name="character-name"
								value={characterToEdit.characterName}
								placeholder="Enter Character Name"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col>
							<Label htmlFor="character-platform">Platform:</Label>
							<Input
								disabled
								type="select"
								name="character-platform"
								id="character-platform"
								value={characterToEdit.platform ? characterToEdit.platform.platformId : 1}
							>
								<option value={1}>Tumblr</option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col>
							<Label htmlFor="character-url-identifier">Character URL Identifier:</Label>
							<Input
								type="text"
								id="character-url-identifier"
								name="character-url-identifier"
								placeholder="Enter URL Identifier"
								value={characterToEdit.urlIdentifier}
							/>
							<FormText>
								For a Tumblr account, this will be the part of your URL before
								&quot;.tumblr.com&quot;. For instance, if your URL is
								<strong>http://myawesomeblog.tumblr.com</strong>, you would enter
								<strong>myawesomeblog</strong> in this field.
							</FormText>
						</Col>
					</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={submitEditCharacter}>Do Something</Button>{' '}
				<Button color="secondary" onClick={closeEditCharacterModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

EditCharacterModal.propTypes = propTypes;

export default EditCharacterModal;
