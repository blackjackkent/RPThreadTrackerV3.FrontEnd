// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardBlock } from 'reactstrap';
import PropTypes from 'prop-types';

import { fetchCharacters, fetchUser, openUpsertThreadModal } from '../../infrastructure/actions';
import { getCharactersSortedByIdentifier } from '../../infrastructure/selectors';

import LoadingIndicator from '../shared/LoadingIndicator';
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
	const {
		user,
		ui
	} = state;
	const sortedCharacters = getCharactersSortedByIdentifier(state);
	return {
		user,
		sortedCharacters,
		isUpsertThreadModalOpen: ui.isUpsertThreadModalOpen
	};
};
class AddThreadFromExtensionHandler extends Component {
	constructor() {
		super();
		this.state = { hasOpenedModal: false };
		this.shouldOpenModal = this.shouldOpenModal.bind(this);
	}
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchCharacters();
	}
	componentWillReceiveProps(nextProps) {
		if (this.shouldOpenModal(nextProps.user, nextProps.sortedCharacters)) {
			const thread = getThreadDataFromExtensionQuery(nextProps.sortedCharacters);
			this.props.openUpsertThreadModal(thread);
		}
	}
	shouldOpenModal(user, characters) {
		if (!user || !user.id) {
			return false;
		}
		if (!characters || !characters.length) {
			return false;
		}
		if (this.state.hasOpenedModal) {
			return false;
		}
		this.setState({ hasOpenedModal: true });
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
		return (
			<div className="app flex-row align-items-center" data-spec="layout-app">
				<ModalContainer />
				{this.state.hasOpenedModal && !this.props.isUpsertThreadModalOpen &&
					<Container data-spec="extension-handler-success-message">
						<Row className="justify-content-center">
							<Col md="6">
								<Card className="login-box p-4">
									<CardBlock className="card-body text-center">
										<p>
											You can now close this window.
										</p>
									</CardBlock>
								</Card>
							</Col>
						</Row>
					</Container>
				}
			</div>
		);
	}
	render() {
		if (!this.props.user.id || !this.props.sortedCharacters.length) {
			return this.showLoadingIndicator();
		}
		return this.showLayout();
	}
}

AddThreadFromExtensionHandler.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchCharacters,
	fetchUser,
	openUpsertThreadModal
})(withPageViewTracker(AddThreadFromExtensionHandler));
