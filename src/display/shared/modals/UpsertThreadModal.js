import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const propTypes = {
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	submitEditCharacter: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired
};

const UpsertThreadModal = (props) => {
	const {
		isUpsertThreadModalOpen,
		submitEditCharacter,
		closeUpsertThreadModal,
		threadToEdit
	} = props;
	if (!threadToEdit) {
		return (
			<div />
		);
	}
	return (
		<Modal isOpen={isUpsertThreadModalOpen} toggle={closeUpsertThreadModal} backdrop>
			<ModalHeader toggle={closeUpsertThreadModal}>{threadToEdit.id ? 'Edit Thread' : 'Add New Thread'}</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup row>
						<Col>
							<Label htmlFor="character-name">Character Name:</Label>
							<Input
								type="text"
								id="character-name"
								name="character-name"
								value={threadToEdit.characterName}
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
								value={threadToEdit.platform ? threadToEdit.platform.platformId : 1}
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
								value={threadToEdit.urlIdentifier}
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
				<Button color="secondary" onClick={closeUpsertThreadModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

UpsertThreadModal.propTypes = propTypes;

export default UpsertThreadModal;
