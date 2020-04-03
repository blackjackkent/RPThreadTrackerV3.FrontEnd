// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import * as actions from '../../infrastructure/actions';
import * as selectors from '../../infrastructure/selectors';

import Card from '../shared/styled/Card';
import LoadingIndicator from '../shared/loading/LoadingIndicator';
import ModalContainer from '../shared/modals/ModalContainer';

import withPageViewTracker from '../../infrastructure/withPageViewTracker';

import { getThreadDataFromExtensionQuery } from '../../utility';
// #endregion imports

const propTypes = {
	sortedCharacters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};
const mapStateToProps = (state) => {
	const { user, ui } = state;
	const sortedCharacters = selectors.getCharactersSortedByIdentifier(state);
	return {
		user,
		sortedCharacters,
		isUpsertThreadModalOpen: ui.isUpsertThreadModalOpen
	};
};
class AddThreadFromExtensionHandler extends Component {
	constructor() {
		super();
		this.state = {
			hasOpenedModal: false
		};
		this.shouldOpenModal = this.shouldOpenModal.bind(this);
	}

	componentDidMount() {
		const { fetchUser, fetchCharacters } = this.props;
		fetchUser();
		fetchCharacters();
	}

	componentWillReceiveProps(nextProps) {
		const { openUpsertThreadModal } = this.props;
		if (this.shouldOpenModal(nextProps.user, nextProps.sortedCharacters)) {
			const thread = getThreadDataFromExtensionQuery(nextProps.sortedCharacters);
			openUpsertThreadModal(thread);
		}
	}

	shouldOpenModal(user, characters) {
		const { hasOpenedModal } = this.state;
		if (!user || !user.id) {
			return false;
		}
		if (!characters || !characters.length) {
			return false;
		}
		if (hasOpenedModal) {
			return false;
		}
		this.setState({
			hasOpenedModal: true
		});
		return true;
	}

	showLoadingIndicator() {
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
	}

	showLayout() {
		const { isUpsertThreadModalOpen } = this.props;
		const { hasOpenedModal } = this.state;
		return (
			<div className="app flex-row align-items-center" data-spec="layout-app">
				<ModalContainer />
				{hasOpenedModal && !isUpsertThreadModalOpen && (
					<Container data-spec="extension-handler-success-message">
						<Row className="justify-content-center">
							<Col md="6">
								<Card className="login-box p-4">
									<CardBody className="card-body text-center">
										<p>You can now close this window.</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				)}
			</div>
		);
	}

	render() {
		const { user, sortedCharacters } = this.props;
		if (!user.id || !sortedCharacters.length) {
			return this.showLoadingIndicator();
		}
		return this.showLayout();
	}
}

AddThreadFromExtensionHandler.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchCharacters: actions.fetchCharacters,
	fetchUser: actions.fetchUser,
	openUpsertThreadModal: actions.openUpsertThreadModal
})(withPageViewTracker(AddThreadFromExtensionHandler));
