import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import CharacterSelect from '../CharacterSelect';
import { upsertThreadValidator } from '../../../infrastructure/validators';

const propTypes = {
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	submitUpsertThread: PropTypes.func.isRequired,
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
					<ModalHeader toggle={closeUpsertThreadModal}>{threadToEdit.id ? 'Edit Thread' : 'Add New Thread'}</ModalHeader>
					<ModalBody>
						<FormGroup row>
							<Col>
								<CharacterSelect
									characters={characters}
									selectedCharacterId={this.state.threadToEdit.characterId}
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
									onChange={this.handleInputChange}
									validate={upsertThreadValidator.userTitle}
									helpMessage="This can be anything you like!"
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
									validate={upsertThreadValidator.postId}
									helpMessage={[
										'This must be a post from your blog. The post ID is the ',
										'part of the URL after ".tumblr.com/post/". For instance, ',
										'if the post is at the URL ',
										<strong>http://myawesomeblog.tumblr.com/post/12345</strong>,
										', you would enter ',
										<strong>12345</strong>,
										' in this field.']}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<AvField
									name="partnerUrlIdentifier"
									placeholder="Partner Url Identifier"
									label="Partner URL Identifier"
									type="text"
									onChange={this.handleInputChange}
									validate={upsertThreadValidator.partnerUrlIdentifier}
									helpMessage={[
										'This will be the part of your partner\'s URL before ',
										'".tumblr.com". For instance, if their URL is',
										<strong>http://myawesomeblog.tumblr.com</strong>,
										', you would enter',
										<strong>myawesomeblog</strong>,
										' in this field.']}
								/>
							</Col>
						</Row>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Add Thread</Button>{' '}
						<Button color="secondary" onClick={closeUpsertThreadModal}>Cancel</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertThreadModal.propTypes = propTypes;
export default UpsertThreadModal;
