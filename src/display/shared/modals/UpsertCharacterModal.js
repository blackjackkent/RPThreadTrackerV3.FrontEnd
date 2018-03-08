import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { upsertCharacterValidator } from '../../forms/validators';

const propTypes = {
	isUpsertCharacterModalOpen: PropTypes.bool.isRequired,
	submitUpsertCharacter: PropTypes.func.isRequired,
	closeUpsertCharacterModal: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired
};

class UpsertCharacterModal extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			characterToEdit: {
				characterName: '',
				platformId: 1,
				urlIdentifier: ''
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		const { characterToEdit } = nextProps;
		this.setState({
			characterToEdit: Object.assign({}, this.state.characterToEdit, characterToEdit)
		});
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState({
			characterToEdit: Object.assign({}, this.state.characterToEdit, {
				[name]: value
			})
		});
	}
	render() {
		const {
			isUpsertCharacterModalOpen,
			submitUpsertCharacter,
			closeUpsertCharacterModal,
			characterToEdit
		} = this.props;
		if (!characterToEdit) {
			return (
				<div />
			);
		}
		return (
			<Modal isOpen={isUpsertCharacterModalOpen} toggle={closeUpsertCharacterModal} backdrop>
				<AvForm onValidSubmit={() => submitUpsertCharacter(this.state.characterToEdit)}>
					<ModalHeader toggle={closeUpsertCharacterModal}>{characterToEdit.id ? 'Edit Character' : 'Add Character'}</ModalHeader>
					<ModalBody>
						<Row>
							<Col>
								<AvField
									name="characterName"
									placeholder="Character Name"
									label="Character Name"
									type="text"
									value={this.state.characterToEdit.characterName}
									onChange={this.handleInputChange}
									validate={upsertCharacterValidator.characterName}
								/>
							</Col>
						</Row>
						<FormGroup row>
							<Col>
								<Label htmlFor="character-platform">Platform:</Label>
								<Input
									disabled
									type="select"
									name="character-platform"
									id="character-platform"
									value={characterToEdit.platformId}
								>
									<option value={1}>Tumblr</option>
								</Input>
							</Col>
						</FormGroup>
						<Row>
							<Col>
								<AvField
									name="urlIdentifier"
									placeholder="Character URL Identifier"
									label="Character URL Identifier"
									type="text"
									value={this.state.characterToEdit.urlIdentifier}
									onChange={this.handleInputChange}
									validate={upsertCharacterValidator.urlIdentifier}
									helpMessage={[
										'For a Tumblr account, this will be the part of your URL before ',
										'".tumblr.com". For instance, if your URL is ',
										<strong>http://myawesomeblog.tumblr.com</strong>,
										' you would enter ',
										<strong>myawesomeblog</strong>,
										' in this field.'
									]}
								/>
							</Col>
						</Row>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Submit Character</Button>{' '}
						<Button color="secondary" onClick={closeUpsertCharacterModal}>Cancel</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertCharacterModal.propTypes = propTypes;

export default UpsertCharacterModal;
