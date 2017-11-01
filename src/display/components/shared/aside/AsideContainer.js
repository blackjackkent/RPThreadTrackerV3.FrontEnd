import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Aside from './Aside';
import { fetchNews } from '../../../../infrastructure/actions';

const propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		userTitle: PropTypes.string.isRequired,
		lastPostDate: PropTypes.string.isRequired
	})
	).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { news } = state;
	return { news };
}

class AsideContainer extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.news || !this.props.news.length) {
			dispatch(fetchNews());
		}
	}

	render() {
		return (
			<Aside news={this.props.news} />
		);
	}
}

AsideContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AsideContainer);
