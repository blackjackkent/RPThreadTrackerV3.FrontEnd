import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import CharacterSelect from '../CharacterSelect';

const propTypes = {
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	submitEditCharacter: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.shape({}).isRequired
};

class UpsertThreadModal extends Component {
	constructor(props) {
		super();
		this.selectCharacter = this.selectCharacter.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			threadToEdit: props.threadToEdit
		};
	}

	selectCharacter(characterId) {
		this.setState({ threadToEdit: { ...this.state.threadToEdit, characterId } });
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
			submitEditCharacter,
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
				<ModalHeader toggle={closeUpsertThreadModal}>{threadToEdit.id ? 'Edit Thread' : 'Add New Thread'}</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col>
								<CharacterSelect
									characters={characters}
									selectedCharacterId={this.state.threadToEdit.characterId}
									onSelectCharacter={this.selectCharacter}
								/>
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
	}
}

UpsertThreadModal.propTypes = propTypes;
export default UpsertThreadModal;
