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
	bodyText: PropTypes.string.isRequired,
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
		<Modal isOpen={isModalOpen} toggle={closeCallback} backdrop>
			<ModalHeader toggle={closeCallback}>{headerText}</ModalHeader>
			<ModalBody>
				{bodyText}
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={() => submitCallback(data)}>{submitButtonText}</Button>{' '}
				<Button color="secondary" onClick={closeCallback}>{closeButtonText}</Button>
			</ModalFooter>
		</Modal>
	);
};

GenericConfirmationModal.propTypes = propTypes;
GenericConfirmationModal.defaultProps = defaultProps;
export default GenericConfirmationModal;
