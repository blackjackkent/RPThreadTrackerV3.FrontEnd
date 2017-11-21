import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewCharacterFormCard from '../components/characters/NewCharacterFormCard';
import CurrentCharacterTable from '../components/characters/CurrentCharacterTable';
import EditCharacterModal from '../components/characters/EditCharacterModal';
import { openEditCharacterModal, fetchCharacters, closeEditCharacterModal } from '../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getQueuedThreads, getRecentActivity } from '../../infrastructure/selectors';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		ui,
		characterToEdit
	} = state;
	return {
		characters,
		ui,
		characterToEdit
	};
}

class ManageCharacters extends Component {
	constructor(props) {
		super(props);
		this.openEditCharacterModal = this.openEditCharacterModal.bind(this);
		this.closeEditCharacterModal = this.closeEditCharacterModal.bind(this);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}

	openEditCharacterModal(character) {
		const { dispatch } = this.props;
		dispatch(openEditCharacterModal(character));
	}

	closeEditCharacterModal() {
		const { dispatch } = this.props;
		dispatch(closeEditCharacterModal());
	}

	render() {
		const {
			characters,
			ui,
			characterToEdit
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<NewCharacterFormCard />
					</Col>
				</Row>
				<Row>
					<Col>
						<CurrentCharacterTable characters={characters} openEditCharacterModal={this.openEditCharacterModal} />
					</Col>
				</Row>
				<EditCharacterModal isEditCharacterModalOpen={ui.isEditCharacterModalOpen} closeEditCharacterModal={this.closeEditCharacterModal} characterToEdit={characterToEdit} />
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps)(ManageCharacters);
