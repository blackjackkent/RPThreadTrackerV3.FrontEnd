// #region imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import TooltipForm from '../../forms/TooltipForm';
import UpsertThreadForm from '../../forms/upsert-thread/UpsertThreadForm';
import Modal from '../styled/Modal';
// #endregion imports

const propTypes = {
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	submitUpsertThread: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	threadToEdit: PropTypes.shape({
		threadId: PropTypes.number
	}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class UpsertThreadModal extends Component {
	constructor(props) {
		super(props);
		this.selectCharacter = this.selectCharacter.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTagAdded = this.handleTagAdded.bind(this);
		this.handleTagRemoved = this.handleTagRemoved.bind(this);
		this.getTagValues = this.getTagValues.bind(this);
		this.state = {
			threadToEdit: props.threadToEdit
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			threadToEdit: nextProps.threadToEdit
		});
	}

	selectCharacter(e) {
		const characterId = e.target.value;
		const { threadToEdit } = this.state;
		if (threadToEdit.characterId !== characterId) {
			this.setState((prevState) => ({
				threadToEdit: {
					...prevState.threadToEdit,
					characterId
				}
			}));
		}
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState((prevState) => ({
			threadToEdit: Object.assign({}, prevState.threadToEdit, {
				[name]: value
			})
		}));
	}

	handleTagAdded(tagValue) {
		const { threadToEdit } = this.state;
		let currentTags = threadToEdit.threadTags;
		if (!currentTags) {
			currentTags = [];
		}
		if (currentTags.filter((t) => t.tagText === tagValue).length > 0) {
			return;
		}
		const newTag = {
			tagText: tagValue
		};
		const newTags = currentTags.concat(newTag);
		this.setState((prevState) => ({
			threadToEdit: Object.assign({}, prevState.threadToEdit, {
				threadTags: newTags
			})
		}));
	}

	handleTagRemoved(tagValue) {
		const { threadToEdit } = this.state;
		let currentTags = threadToEdit.threadTags;
		if (!currentTags) {
			currentTags = [];
		}
		const newTags = currentTags.filter((tag) => tag.tagText !== tagValue);
		this.setState((prevState) => ({
			threadToEdit: Object.assign({}, prevState.threadToEdit, {
				threadTags: newTags
			})
		}));
	}

	getTagValues() {
		const { threadToEdit } = this.state;
		if (!threadToEdit.threadTags) {
			return [];
		}
		return threadToEdit.threadTags.map((t) => t.tagText);
	}

	render() {
		const {
			isUpsertThreadModalOpen,
			submitUpsertThread,
			closeUpsertThreadModal,
			threadToEdit,
			characters
		} = this.props;
		const { threadToEdit: requestData } = this.state;
		const activeCharacters = [].concat(characters.filter((c) => !c.isOnHiatus));
		return (
			<Modal
				data-spec="upsert-thread-modal"
				isOpen={isUpsertThreadModalOpen}
				toggle={closeUpsertThreadModal}
				backdrop
			>
				<AvForm
					data-spec="upsert-thread-modal-form"
					onValidSubmit={() => submitUpsertThread(requestData)}
				>
					<ModalHeader
						data-spec="upsert-thread-modal-header"
						toggle={closeUpsertThreadModal}
					>
						{threadToEdit && threadToEdit.threadId ? 'Edit Thread' : 'Add New Thread'}
					</ModalHeader>
					<ModalBody>
						<TooltipForm
							Renderable={UpsertThreadForm}
							threadToEdit={threadToEdit}
							characters={activeCharacters}
							selectCharacter={this.selectCharacter}
							handleInputChange={this.handleInputChange}
							handleTagAdded={this.handleTagAdded}
							handleTagRemoved={this.handleTagRemoved}
							tagValues={this.getTagValues()}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">
							{threadToEdit.threadId ? 'Edit Thread' : 'Add Thread'}
						</Button>{' '}
						<Button
							data-spec="upsert-thread-modal-close-button"
							color="secondary"
							onClick={closeUpsertThreadModal}
						>
							Cancel
						</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertThreadModal.propTypes = propTypes;
export default UpsertThreadModal;
