import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	submitCallback: PropTypes.func.isRequired,
	submitButtonText: PropTypes.string,
	closeCallback: PropTypes.func.isRequired,
	closeButtonText: PropTypes.string,
	headerText: PropTypes.string.isRequired,
	bodyText: PropTypes.node.isRequired,
	data: PropTypes.oneOfType([
		PropTypes.shape({}),
		PropTypes.array
	]).isRequired
};

const defaultProps = {
	submitButtonText: 'OK',
	closeButtonText: 'Cancel'
};

const GenericConfirmationModal = (props) => {
	const {
		isModalOpen,
		submitCallback,
		submitButtonText,
		closeCallback,
		closeButtonText,
		data,
		headerText,
		bodyText
	} = props;
	return (
		<Modal
			isOpen={isModalOpen}
			toggle={closeCallback}
			backdrop
			data-spec="generic-confirmation-modal"
		>
			<ModalHeader
				toggle={closeCallback}
				data-spec="generic-confirmation-modal-header"
			>
				{headerText}
			</ModalHeader>
			<ModalBody>
				{bodyText}
			</ModalBody>
			<ModalFooter>
				<Button
					color="primary"
					data-spec="generic-confirmation-ok-button"
					onClick={() => submitCallback(data)}
				>
					{submitButtonText}
				</Button>{' '}
				<Button
					color="secondary"
					data-spec="generic-confirmation-cancel-button"
					onClick={closeCallback}
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
