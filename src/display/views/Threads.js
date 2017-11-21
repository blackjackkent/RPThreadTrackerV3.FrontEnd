import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadTable from '../components/threads/ThreadTable';
import { setFilteredCharacterId, setFilteredTag, toggleIsThreadFilterCardHidden, fetchCharacters } from '../../infrastructure/actions';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../utility';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired
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
		this.setFilteredCharacterId = this.setFilteredCharacterId.bind(this);
		this.setFilteredTag = this.setFilteredTag.bind(this);
		this.isThreadFilterCardHiddenToggle = this.isThreadFilterCardHiddenToggle.bind(this);
	}
	componentDidMount() {
		this.initView(this.props);
	}
	componentWillReceiveProps(nextProps) {
		this.initView(nextProps);
	}

	initView(props) {
		const { dispatch } = props;
		if (!props.characters || !props.characters.length) {
			dispatch(fetchCharacters());
		}
	}
	setFilteredCharacterId(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredCharacterId(e.target.value));
	}
	setFilteredTag(e) {
		const { dispatch } = this.props;
		dispatch(setFilteredTag(e.target.value));
	}
	isThreadFilterCardHiddenToggle() {
		const { dispatch, isThreadFilterCardHidden } = this.props;
		dispatch(toggleIsThreadFilterCardHidden(isThreadFilterCardHidden));
	}
	getFilteredThreadTags() {
		const { filteredThreads } = this.props;
		const tagArrays = filteredThreads.map(t => t.tags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened);
		return filtered;
	}
	render() {
		const {
			filteredThreads,
			threadFilter,
			isThreadFilterCardHidden,
			characters
		} = this.props;
		const tags = this.getFilteredThreadTags();
		return (
			<div className="animated fadeIn threads-container">
				<Row>
					<Col>
						<ThreadTable
							threads={filteredThreads}
							characters={characters}
							tags={tags}
							rawFilterData={threadFilter}
							setFilteredCharacterId={this.setFilteredCharacterId}
							setFilteredTag={this.setFilteredTag}
							isThreadFilterCardHidden={isThreadFilterCardHidden}
							threadFilterHiddenToggle={this.isThreadFilterCardHiddenToggle}
						/>
					</Col>
				</Row>
			</div >
		);
	}
}

Threads.propTypes = propTypes;
export default connect(mapStateToProps)(Threads);
