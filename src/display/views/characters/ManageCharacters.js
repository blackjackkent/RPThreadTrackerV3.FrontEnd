// #region imports
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentCharacterTable from './components/CurrentCharacterTable';
import * as selectors from '../../../infrastructure/selectors';
import * as actions from '../../../infrastructure/actions';
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
	const isLoadingIconVisible = selectors.getIsLoadingIconVisible(state);
	const threadCounts = selectors.getThreadCountsByCharacter(state);
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
		const {
			characters, activeThreads, fetchCharacters, fetchActiveThreads
		} = this.props;
		if (!characters || !characters.length) {
			fetchCharacters();
		}
		if (!activeThreads || !activeThreads.length) {
			fetchActiveThreads();
		}
	}

	toggleCharacterIsOnHiatus(character) {
		const { upsertCharacter } = this.props;
		const updatedCharacter = {
			...character, isOnHiatus: !character.isOnHiatus
		};
		upsertCharacter(updatedCharacter);
	}

	render() {
		const {
			characters,
			isLoadingIconVisible,
			threadCounts,
			openUpsertCharacterModal,
			openUntrackCharacterModal
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<CurrentCharacterTable
							data-spec="manage-characters-current-character-table"
							characters={characters}
							openUpsertCharacterModal={openUpsertCharacterModal}
							toggleCharacterIsOnHiatus={this.toggleCharacterIsOnHiatus}
							openUntrackCharacterModal={openUntrackCharacterModal}
							isLoadingIconVisible={isLoadingIconVisible}
							threadCounts={threadCounts}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchActiveThreads: actions.fetchActiveThreads,
	fetchCharacters: actions.fetchCharacters,
	openUntrackCharacterModal: actions.openUntrackCharacterModal,
	openUpsertCharacterModal: actions.openUpsertCharacterModal,
	upsertCharacter: actions.upsertCharacter
})(ManageCharacters);
