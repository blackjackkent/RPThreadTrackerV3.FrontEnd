// #region imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';
import TooltipForm from '~/display/forms/TooltipForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
import { useFormReducer } from '~/infrastructure/hooks';
import UpsertPublicViewForm from '~/display/forms/upsert-public-view/UpsertPublicViewForm';
import useUpdatePublicViewMutation from '~/infrastructure/hooks/mutations/public-views/useUpdatePublicViewMutation';
import useCreatePublicViewMutation from '~/infrastructure/hooks/mutations/public-views/useCreatePublicViewMutation';
import LoadingIndicator from '../loading/LoadingIndicator';
// #endregion imports

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})),
	tags: PropTypes.arrayOf(PropTypes.string),
	columns: PropTypes.shape({}).isRequired,
	actedView: PropTypes.shape({})
};

const UpsertPublicViewModal = (props) => {
	const [publicView, onInputChange, setFormData] = useFormReducer();
	const { createPublicView, isLoading: isCreatePublicViewLoading } =
		useCreatePublicViewMutation();
	const { updatePublicView, isLoading: isUpdatePublicViewLoading } =
		useUpdatePublicViewMutation();
	const isLoading = isCreatePublicViewLoading || isUpdatePublicViewLoading;
	const { actedView, characters, tags, columns, isModalOpen, setIsModalOpen } = props;
	useEffect(() => {
		if (!actedView) {
			return;
		}
		setFormData(actedView);
	}, [setFormData, actedView]);
	const activeCharacters = [].concat(
		characters.sort(sortCharacters).filter((c) => !c.isOnHiatus)
	);

	const submitForm = () => {
		const upsertFn = publicView.id ? updatePublicView : createPublicView;
		upsertFn(publicView)
			.then(() => {
				setIsModalOpen(false);
				toast.success(publicView.id ? 'View updated!' : 'View created!');
			})
			.catch(() => {
				toast.error(
					`There was an error ${publicView.id ? 'updating' : 'creating'} this view.`
				);
			});
	};

	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<AvForm onValidSubmit={() => submitForm(publicView)}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{publicView && publicView.id ? 'Edit Public View' : 'Add New Public View'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertPublicViewForm}
						publicView={publicView}
						onInputChange={onInputChange}
						characters={activeCharacters}
						tags={tags}
						columns={columns}
					/>
				</ModalBody>
				<ModalFooter>
					{isLoading && <LoadingIndicator />}
					<Button color="primary">
						{publicView.id ? 'Edit Public View' : 'Add Public View'}
					</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</AvForm>
		</Modal>
	);
};

UpsertPublicViewModal.propTypes = propTypes;
UpsertPublicViewModal.defaultProps = {
	characters: [],
	tags: [],
	actedView: {}
};
export default UpsertPublicViewModal;
