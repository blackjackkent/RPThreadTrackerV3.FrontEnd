// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
	openUpsertThreadModal: PropTypes.func.isRequired
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
		if (this.shouldOpenModal(nextProps)) {
			const thread = getThreadDataFromExtensionQuery(nextProps.sortedCharacters);
			this.props.openUpsertThreadModal(thread);
		}
	}
	shouldOpenModal(props) {
		if (!props.user || !props.user.id) {
			return false;
		}
		if (!props.sortedCharacters || !props.sortedCharacters.length) {
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
				data-spec="layout-loader"
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
			<div className="app" data-spec="layout-app">
				<ModalContainer />
			</div>
		);
	}
	render() {
		if (!this.state.hasOpenedModal) {
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
