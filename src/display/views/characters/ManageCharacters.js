// #region imports
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentCharacterTable from './components/CurrentCharacterTable';
import { getIsLoadingIconVisible, getThreadCountsByCharacter } from '../../../infrastructure/selectors';
import { openUpsertCharacterModal, fetchCharacters, fetchActiveThreads, upsertCharacter, openUntrackCharacterModal } from '../../../infrastructure/actions';
// #endregion imports

const propTypes = {
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchActiveThreads: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	upsertCharacter: PropTypes.func.isRequired,
	openUntrackCharacterModal: PropTypes.func.isRequired,
	threadCounts: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		activeThreads
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	const threadCounts = getThreadCountsByCharacter(state);
	return {
		characters,
		activeThreads,
		isLoadingIconVisible,
		threadCounts
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
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			this.props.fetchActiveThreads();
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
			isLoadingIconVisible,
			threadCounts
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
							threadCounts={threadCounts}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchActiveThreads,
	fetchCharacters,
	openUntrackCharacterModal,
	openUpsertCharacterModal,
	upsertCharacter
})(ManageCharacters);
