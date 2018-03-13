import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import TooltipForm from '../TooltipForm';
import UpsertThreadForm from './UpsertThreadForm';
import validator from './_validator';
import formData from './_formData';

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
		this.state = {
			threadToEdit: null
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ threadToEdit: nextProps.threadToEdit });
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
						<TooltipForm
							Renderable={UpsertThreadForm}
							threadToEdit={threadToEdit}
							validator={validator}
							formData={formData}
							characters={characters}
							selectCharacter={this.selectCharacter}
							handleInputChange={this.handleInputChange}
						/>
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
