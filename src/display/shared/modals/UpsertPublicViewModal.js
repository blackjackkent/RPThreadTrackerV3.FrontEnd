import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import UpsertPublicViewForm from '../../forms/upsertPublicView/UpsertPublicViewForm';
import TooltipForm from '../../forms/TooltipForm';
import { getValuesFromMultiSelect } from '../../../utility';

const propTypes = {
	isUpsertPublicViewModalOpen: PropTypes.bool.isRequired,
	submitUpsertPublicView: PropTypes.func.isRequired,
	closeUpsertPublicViewModal: PropTypes.func.isRequired,
	viewToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class UpsertCharacterModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			viewToEdit: props.viewToEdit
		};
	}

	handleInputChange(event) {
		const { target } = event;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		if (target.type === 'select-multiple') {
			value = getValuesFromMultiSelect(target);
		}
		const { name } = target;
		if (target.type === 'checkbox') {
			let { turnFilter } = this.state.viewToEdit;
			if (!turnFilter) {
				turnFilter = {};
			}
			turnFilter[name] = value;
			this.setState({
				viewToEdit: Object.assign({}, this.state.viewToEdit, {
					turnFilter
				})
			});
			return;
		}
		this.setState({
			viewToEdit: Object.assign({}, this.state.viewToEdit, {
				[name]: value
			})
		});
	}
	render() {
		const {
			isUpsertPublicViewModalOpen,
			submitUpsertPublicView,
			closeUpsertPublicViewModal,
			viewToEdit,
			characters
		} = this.props;
		if (!viewToEdit) {
			return (
				<div />
			);
		}
		return (
			<Modal isOpen={isUpsertPublicViewModalOpen} toggle={closeUpsertPublicViewModal} backdrop>
				<AvForm onValidSubmit={() => submitUpsertPublicView(this.state.viewToEdit)}>
					<ModalHeader toggle={closeUpsertPublicViewModal}>{viewToEdit.id ? 'Edit Public View' : 'Add Public View'}</ModalHeader>
					<ModalBody>
						<TooltipForm
							Renderable={UpsertPublicViewForm}
							viewToEdit={viewToEdit}
							characters={characters}
							handleInputChange={this.handleInputChange}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Submit Public View</Button>{' '}
						<Button color="secondary" onClick={closeUpsertPublicViewModal}>Cancel</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertCharacterModal.propTypes = propTypes;
export default UpsertCharacterModal;
