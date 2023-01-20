// #region imports
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';
import { useCharactersQuery } from '~/infrastructure/hooks/queries';
import { useCreateThreadMutation } from '~/infrastructure/hooks/mutations';
import Card from '../shared/styled/Card';
import LoadingIndicator from '../shared/loading/LoadingIndicator';
import UpsertThreadModal from '../shared/modals/UpsertThreadModal';
import { getThreadDataFromExtensionQuery } from '../../utility';
// #endregion imports

const AddThreadFromExtensionHandler = () => {
	const [threadData, setThreadData] = useState({});
	const [isUpsertThreadModalOpen, setIsUpsertThreadModalOpen] = useState(false);
	const {
		data: characters,
		isLoading: isCharactersLoading,
		isError: isCharactersFetchError
	} = useCharactersQuery();
	const { isSuccess: isFormSubmitSuccess } = useCreateThreadMutation();
	useEffect(() => {
		if (characters) {
			setThreadData(getThreadDataFromExtensionQuery(characters));
			setIsUpsertThreadModalOpen(true);
		}
	}, [characters]);

	const renderLoadingIndicator = () => {
		return (
			<LoadingIndicator
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
			<div className="app flex-row align-items-center">
				<UpsertThreadModal
					actedThread={threadData}
					characters={characters}
					isModalOpen={isUpsertThreadModalOpen}
					setIsModalOpen={setIsUpsertThreadModalOpen}
				/>
				{message && (
					<Container>
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
	if (isCharactersLoading) {
		return renderLoadingIndicator();
	}
	let message = '';
	if (isCharactersFetchError) {
		message = 'There was an error retrieving your account information.';
	}
	if (isFormSubmitSuccess) {
		message = 'You may now close this window.';
	}
	return renderLayout(message);
};

export default AddThreadFromExtensionHandler;
