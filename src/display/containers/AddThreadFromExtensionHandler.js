// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCharacters, fetchUser, openUpsertThreadModal } from '../../infrastructure/actions';
import { getCharactersSortedByIdentifier } from '../../infrastructure/selectors';

import LoadingIndicator from '../shared/LoadingIndicator';
import ModalContainer from '../shared/modals/ModalContainer';

import withPageViewTracker from '../../infrastructure/withPageViewTracker';

import { getQuery } from '../../utility';
// #endregion imports

const propTypes = {
	sortedCharacters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string.isRequired
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
		this.isUserLoaded = this.isUserLoaded.bind(this);
		this.areCharactersLoaded = this.areCharactersLoaded.bind(this);
	}
	componentDidMount() {
		if (!this.isUserLoaded()) {
			this.props.fetchUser();
		}
		if (!this.areCharactersLoaded()) {
			this.props.fetchCharacters();
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.shouldOpenModal(nextProps)) {
			const thread = this.buildThreadToEditFromParams();
			this.props.openUpsertThreadModal(thread);
		}
	}
	isUserLoaded() {
		return this.props.user && this.props.user.id;
	}
	areCharactersLoaded() {
		return this.props.sortedCharacters && this.props.sortedCharacters.length;
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
	buildThreadToEditFromParams() {
		const query = getQuery();
		const { sortedCharacters } = this.props;
		const threadToEdit = {
			postId: query.tumblrPostId
		};
		if (!sortedCharacters.length) {
			return threadToEdit;
		}
		const character = sortedCharacters.find(c => c.urlIdentifier === query.tumblrBlogShortname);
		if (!character) {
			threadToEdit.characterId = sortedCharacters[0].characterId;
		} else {
			threadToEdit.characterId = character.characterId;
		}
		return threadToEdit;
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
		if (!this.isUserLoaded(this.props) || !this.areCharactersLoaded(this.props)) {
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
