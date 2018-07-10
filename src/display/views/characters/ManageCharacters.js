// #region imports
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentCharacterTable from './components/CurrentCharacterTable';
import { getIsLoadingIconVisible } from '../../../infrastructure/selectors';
import { openUpsertCharacterModal, fetchCharacters, upsertCharacter, openUntrackCharacterModal } from '../../../infrastructure/actions';
// #endregion imports

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		characterToEdit
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		characters,
		characterToEdit,
		isLoadingIconVisible
	};
}

class ManageCharacters extends Component {
	constructor(props) {
		super(props);
		this.openUpsertCharacterModal = this.openUpsertCharacterModal.bind(this);
		this.toggleCharacterIsOnHiatus = this.toggleCharacterIsOnHiatus.bind(this);
		this.openUntrackCharacterModal = this.openUntrackCharacterModal.bind(this);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}

	openUpsertCharacterModal(character) {
		const { dispatch } = this.props;
		dispatch(openUpsertCharacterModal(character));
	}

	toggleCharacterIsOnHiatus(character) {
		const { dispatch } = this.props;
		const updatedCharacter = {
			...character, isOnHiatus: !character.isOnHiatus
		};
		dispatch(upsertCharacter(updatedCharacter));
	}

	openUntrackCharacterModal(character) {
		const { dispatch } = this.props;
		dispatch(openUntrackCharacterModal(character));
	}

	render() {
		const {
			characters,
			isLoadingIconVisible
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<CurrentCharacterTable
							characters={characters}
							openUpsertCharacterModal={this.openUpsertCharacterModal}
							toggleCharacterIsOnHiatus={this.toggleCharacterIsOnHiatus}
							openUntrackCharacterModal={this.openUntrackCharacterModal}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps)(ManageCharacters);
