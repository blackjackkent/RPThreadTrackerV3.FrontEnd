import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewCharacterFormCard from './components/NewCharacterFormCard';
import CurrentCharacterTable from './components/CurrentCharacterTable';
import EditCharacterModal from './components/EditCharacterModal';
import { openEditCharacterModal, fetchCharacters, closeEditCharacterModal } from '../../../infrastructure/actions';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired,
	isEditCharacterModalOpen: PropTypes.bool.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		ui,
		characterToEdit
	} = state;
	return {
		characters,
		isEditCharacterModalOpen: ui.isEditCharacterModalOpen,
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
			isEditCharacterModalOpen,
			characterToEdit
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<CurrentCharacterTable
							characters={characters}
							openEditCharacterModal={this.openEditCharacterModal}
						/>
					</Col>
				</Row>
				<EditCharacterModal
					isEditCharacterModalOpen={isEditCharacterModalOpen}
					closeEditCharacterModal={this.closeEditCharacterModal}
					characterToEdit={characterToEdit}
				/>
			</div >
		);
	}
}

ManageCharacters.propTypes = propTypes;
export default connect(mapStateToProps)(ManageCharacters);
