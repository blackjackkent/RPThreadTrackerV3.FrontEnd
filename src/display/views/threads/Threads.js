import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters, upsertThread, openUntrackThreadModal, bulkUpdateThreads, openBulkUntrackThreadsModal, openUpsertThreadModal } from '../../../infrastructure/actions';

const propTypes = {
	Renderable: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		threadFilter,
		characters,
		ui
	} = state;
	return {
		threadFilter,
		characters,
		isThreadFilterCardHidden: ui.isThreadFilterCardHidden
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);
		this.bulkToggleThreadsAreArchived = this.bulkToggleThreadsAreArchived.bind(this);
		this.bulkToggleThreadsAreMarkedQueued = this.bulkToggleThreadsAreMarkedQueued.bind(this);
		this.openUntrackThreadModal = this.openUntrackThreadModal.bind(this);
		this.openBulkUntrackThreadsModal = this.openBulkUntrackThreadsModal.bind(this);
		this.openEditThreadModal = this.openEditThreadModal.bind(this);
		this.toggleThreadIsArchived = this.toggleThreadIsArchived.bind(this);
		this.toggleThreadIsMarkedQueued = this.toggleThreadIsMarkedQueued.bind(this);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}
	toggleThreadIsArchived(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		dispatch(upsertThread(updatedThread));
	}
	toggleThreadIsMarkedQueued(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, dateMarkedQueued: thread.dateMarkedQueued ? null : new Date(Date.now())
		};
		dispatch(upsertThread(updatedThread));
	}
	openUntrackThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUntrackThreadModal(thread));
	}
	openEditThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUpsertThreadModal(thread));
	}
	openBulkUntrackThreadsModal(thread) {
		const { dispatch } = this.props;
		dispatch(openBulkUntrackThreadsModal(thread));
	}
	bulkToggleThreadsAreMarkedQueued(threads) {
		const { dispatch } = this.props;
		const updatedThreads = threads.map(t => ({
			...t, dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now())
		}));
		dispatch(bulkUpdateThreads(updatedThreads));
	}
	bulkToggleThreadsAreArchived(threads) {
		const { dispatch } = this.props;
		const updatedThreads = threads.map(t => ({
			...t, isArchived: !t.isArchived
		}));
		dispatch(bulkUpdateThreads(updatedThreads));
	}
	render() {
		const {
			characters,
			Renderable
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<Renderable
							bulkToggleThreadsAreArchived={this.bulkToggleThreadsAreArchived}
							bulkToggleThreadsAreMarkedQueued={this.bulkToggleThreadsAreMarkedQueued}
							openBulkUntrackThreadsModal={this.openBulkUntrackThreadsModal}
							characters={characters}
							openUntrackThreadModal={this.openUntrackThreadModal}
							openEditThreadModal={this.openEditThreadModal}
							setFilteredCharacterId={this.setFilteredCharacterId}
							setFilteredTag={this.setFilteredTag}
							threadFilterHiddenToggle={this.isThreadFilterCardHiddenToggle}
							toggleThreadIsArchived={this.toggleThreadIsArchived}
							toggleThreadIsMarkedQueued={this.toggleThreadIsMarkedQueued}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
