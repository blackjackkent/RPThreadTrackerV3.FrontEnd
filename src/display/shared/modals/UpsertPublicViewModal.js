import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import UpsertPublicViewForm from '../../forms/upsert-public-view/UpsertPublicViewForm';
import TooltipForm from '../../forms/TooltipForm';
import { getValuesFromMultiSelect } from '../../../utility';

const propTypes = {
	isUpsertPublicViewModalOpen: PropTypes.bool.isRequired,
	submitUpsertPublicView: PropTypes.func.isRequired,
	closeUpsertPublicViewModal: PropTypes.func.isRequired,
	viewToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	columns: PropTypes.shape({}).isRequired
};

class UpsertCharacterModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			viewToEdit: props.viewToEdit
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ viewToEdit: nextProps.viewToEdit });
	}

	handleInputChange(event) {
		const { target } = event;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		if (target.type === 'select-multiple') {
			value = getValuesFromMultiSelect(target);
		}
		const { name } = target;
		if (target.type === 'checkbox') {
			const { viewToEdit } = this.state;
			let { turnFilter } = viewToEdit;
			if (!turnFilter) {
				turnFilter = {};
			}
			turnFilter[name] = value;
			this.setState(prevState => ({
				viewToEdit: Object.assign({}, prevState.viewToEdit, {
					turnFilter
				})
			}));
			return;
		}
		this.setState(prevState => ({
			viewToEdit: Object.assign({}, prevState.viewToEdit, {
				[name]: value
			})
		}));
	}

	render() {
		const {
			isUpsertPublicViewModalOpen,
			submitUpsertPublicView,
			closeUpsertPublicViewModal,
			viewToEdit,
			characters,
			tags,
			columns
		} = this.props;
		const { viewToEdit: requestData } = this.state;
		return (
			<Modal
				data-spec="upsert-public-view-modal"
				isOpen={isUpsertPublicViewModalOpen}
				toggle={closeUpsertPublicViewModal}
				backdrop
			>
				<AvForm
					data-spec="upsert-public-view-modal-form"
					onValidSubmit={() => submitUpsertPublicView(requestData)}
				>
					<ModalHeader data-spec="upsert-public-view-modal-header" toggle={closeUpsertPublicViewModal}>{viewToEdit.id ? 'Edit Public View' : 'Add Public View'}</ModalHeader>
					<ModalBody>
						<TooltipForm
							Renderable={UpsertPublicViewForm}
							viewToEdit={viewToEdit}
							characters={characters}
							tags={tags}
							columns={columns}
							handleInputChange={this.handleInputChange}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Submit Public View</Button>{' '}
						<Button
							data-spec="upsert-public-view-modal-close-button"
							color="secondary"
							onClick={closeUpsertPublicViewModal}
						>
							Cancel
						</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertCharacterModal.propTypes = propTypes;
export default UpsertCharacterModal;
