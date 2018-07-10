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
	fetchCharacters: PropTypes.func.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	upsertCharacter: PropTypes.func.isRequired,
	openUntrackCharacterModal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		characters
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		characters,
		isLoadingIconVisible
	};
}

class ManageCharacters extends Component {
	constructor(props) {
		super(props);
		this.toggleCharacterIsOnHiatus = this.toggleCharacterIsOnHiatus.bind(this);
	}

	componentDidMount() {
		if (!this.props.characters || !this.props.characters.length) {
			this.props.fetchCharacters();
		}
	}

	toggleCharacterIsOnHiatus(character) {
		const updatedCharacter = {
			...character, isOnHiatus: !character.isOnHiatus
		};
		this.props.upsertCharacter(updatedCharacter);
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
							data-spec="manage-characters-current-character-table"
							characters={characters}
							openUpsertCharacterModal={this.props.openUpsertCharacterModal}
							toggleCharacterIsOnHiatus={this.toggleCharacterIsOnHiatus}
							openUntrackCharacterModal={this.props.openUntrackCharacterModal}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchCharacters,
	openUntrackCharacterModal,
	openUpsertCharacterModal,
	upsertCharacter
})(ManageCharacters);
