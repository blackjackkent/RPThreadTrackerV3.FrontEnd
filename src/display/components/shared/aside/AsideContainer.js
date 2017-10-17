import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from '../../../../state/news/actions';
import Aside from './Aside';

const propTypes = {
	news: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			userTitle: PropTypes.string.isRequired,
			lastPostDate: PropTypes.string.isRequired
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
		if (!this.props.news.items || !this.props.news.items.length) {
			dispatch(fetchNews());
		}
	}

	render() {
		return (
			<Aside news={this.props.news.items} />
		);
	}
}

AsideContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AsideContainer);
