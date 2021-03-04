// #region imports
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';

import Card from '../shared/styled/Card';
import LoadingIndicator from '../shared/loading/LoadingIndicator';
import UpsertThreadModal from '../shared/modals/UpsertThreadModal';

import { getThreadDataFromExtensionQuery } from '../../utility';
import { useCharactersQuery } from '~/infrastructure/hooks/queries';
import { useFormReducer } from '~/infrastructure/hooks';
import { useCreateThreadMutation } from '~/infrastructure/hooks/mutations';
// #endregion imports

const AddThreadFromExtensionHandler = () => {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [thread, onInputChange, setThread] = useFormReducer();
	const {
		data: characters,
		isLoading: isCharactersLoading,
		isError: isCharactersFetchError
	} = useCharactersQuery();
	const {
		mutate: submitForm,
		isLoading: isLoadingFormSubmit,
		isSuccess: isFormSubmitSuccess,
		isError: isFormSubmitError
	} = useCreateThreadMutation();
	const isLoading = isCharactersLoading || isLoadingFormSubmit;

	useEffect(() => {
		if (!characters) {
			return;
		}
		const data = getThreadDataFromExtensionQuery(characters);
		setThread(data);
	}, [characters]);

	const onFormSubmit = () => {
		submitForm(thread);
		setIsFormSubmitted(true);
	};

	const renderLoadingIndicator = () => {
		return (
			<LoadingIndicator
				data-spec="extension-handler-loader"
				style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		);
	};

	const renderLayout = (message = '') => {
		return (
			<div className="app flex-row align-items-center" data-spec="layout-app">
				<UpsertThreadModal
					isModalOpen={!isLoading && !isFormSubmitted}
					onModalClose={null}
					thread={thread}
					onInputChange={onInputChange}
					onFormSubmit={onFormSubmit}
					characters={characters}
				/>
				{message && (
					<Container data-spec="extension-handler-success-message">
						<Row className="justify-content-center">
							<Col md="6">
								<Card className="login-box p-4">
									<CardBody className="card-body text-center">
										<p>{message}</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				)}
				)
			</div>
		);
	};
	if (isLoading) {
		return renderLoadingIndicator();
	}
	let message = '';
	if (isCharactersFetchError) {
		message = 'There was an error retrieving your account information.';
	}
	if (isFormSubmitError) {
		message = 'There was an error creating the thread.';
	}
	if (isFormSubmitSuccess) {
		message = 'You may now close this window.';
	}
	return renderLayout(message);
};

export default AddThreadFromExtensionHandler;
