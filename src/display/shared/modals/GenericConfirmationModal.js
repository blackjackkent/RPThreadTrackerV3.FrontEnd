import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Modal from '../styled/Modal';
import LoadingIndicator from '../loading/LoadingIndicator';

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	submitButtonText: PropTypes.string,
	closeButtonText: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	headerText: PropTypes.string.isRequired,
	bodyText: PropTypes.node.isRequired,
	data: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array])
};

const defaultProps = {
	submitButtonText: 'OK',
	closeButtonText: 'Cancel',
	data: null
};

const GenericConfirmationModal = (props) => {
	const {
		isModalOpen,
		setIsModalOpen,
		submitForm,
		submitButtonText,
		closeButtonText,
		data,
		headerText,
		bodyText,
		isLoading
	} = props;
	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<ModalHeader
				toggle={() => setIsModalOpen(!isModalOpen)}
				data-spec="generic-confirmation-modal-header"
			>
				{headerText}
			</ModalHeader>
			<ModalBody>{bodyText}</ModalBody>
			<ModalFooter>
				{isLoading && <LoadingIndicator />}
				<Button
					color="primary"
					data-spec="generic-confirmation-ok-button"
					onClick={() => submitForm(data)}
				>
					{submitButtonText}
				</Button>{' '}
				<Button
					color="secondary"
					data-spec="generic-confirmation-cancel-button"
					onClick={() => setIsModalOpen(false)}
				>
					{closeButtonText}
				</Button>
			</ModalFooter>
		</Modal>
	);
};

GenericConfirmationModal.propTypes = propTypes;
GenericConfirmationModal.defaultProps = defaultProps;
export default GenericConfirmationModal;
