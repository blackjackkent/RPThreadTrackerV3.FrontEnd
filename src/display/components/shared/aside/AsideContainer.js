import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNewsIfNeeded } from '../../../../state/news/actions';
import Aside from './Aside';

const propTypes = {
	news: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			userTitle: PropTypes.string.isRequired,
			lastPostDate: PropTypes.instanceOf(Date).isRequired
		}))
	}).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { news } = state;
	return { news };
}

class AsideContainer extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchNewsIfNeeded());
	}

	render() {
		return (
			<Aside news={this.props.news.items} />
		);
	}
}

AsideContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AsideContainer);
