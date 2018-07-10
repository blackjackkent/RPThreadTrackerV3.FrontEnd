import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsLoadingIconVisible } from '../../../infrastructure/selectors';
import { fetchCharacters, setFilteredTag, upsertThread, openUntrackThreadModal, bulkUpdateThreads, openBulkUntrackThreadsModal, openUpsertThreadModal } from '../../../infrastructure/actions';

const propTypes = {
	Renderable: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	bulkUpdateThreads: PropTypes.func.isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired,
	openUpsertThreadModal: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	const {
		threadFilter,
		characters
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		threadFilter,
		characters,
		isLoadingIconVisible
	};
}

class Threads extends Component {
	constructor(props) {
		super(props);

		this.bulkToggleThreadsAreArchived = this.bulkToggleThreadsAreArchived.bind(this);
		this.bulkToggleThreadsAreMarkedQueued = this.bulkToggleThreadsAreMarkedQueued.bind(this);
		this.toggleThreadIsArchived = this.toggleThreadIsArchived.bind(this);
		this.toggleThreadIsMarkedQueued = this.toggleThreadIsMarkedQueued.bind(this);
	}
	componentDidMount() {
		if (!this.props.characters || !this.props.characters.length) {
			this.props.fetchCharacters();
		}
	}
	toggleThreadIsArchived(thread) {
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		this.props.upsertThread(updatedThread);
	}
	toggleThreadIsMarkedQueued(thread) {
		const updatedThread = {
			...thread, dateMarkedQueued: thread.dateMarkedQueued ? null : new Date(Date.now())
		};
		this.props.upsertThread(updatedThread);
	}
	bulkToggleThreadsAreMarkedQueued(threads) {
		const updatedThreads = threads.map(t => ({
			...t, dateMarkedQueued: t.dateMarkedQueued ? null : new Date(Date.now())
		}));
		this.props.bulkUpdateThreads(updatedThreads);
	}
	bulkToggleThreadsAreArchived(threads) {
		const updatedThreads = threads.map(t => ({
			...t, isArchived: !t.isArchived
		}));
		this.props.bulkUpdateThreads(updatedThreads);
	}
	render() {
		const {
			characters,
			Renderable,
			threadFilter,
			isLoadingIconVisible
		} = this.props;
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<Renderable
							bulkToggleThreadsAreArchived={this.bulkToggleThreadsAreArchived}
							bulkToggleThreadsAreMarkedQueued={this.bulkToggleThreadsAreMarkedQueued}
							openBulkUntrackThreadsModal={this.props.openBulkUntrackThreadsModal}
							characters={characters}
							openUntrackThreadModal={this.props.openUntrackThreadModal}
							openEditThreadModal={this.props.openUpsertThreadModal}
							setFilteredTag={this.props.setFilteredTag}
							threadFilter={threadFilter}
							toggleThreadIsArchived={this.toggleThreadIsArchived}
							toggleThreadIsMarkedQueued={this.toggleThreadIsMarkedQueued}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps, {
	setFilteredTag,
	bulkUpdateThreads,
	fetchCharacters,
	upsertThread,
	openBulkUntrackThreadsModal,
	openUpsertThreadModal,
	openUntrackThreadModal
})(Threads);
