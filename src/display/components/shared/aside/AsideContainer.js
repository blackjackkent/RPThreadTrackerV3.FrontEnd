import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Aside from './Aside';

const propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		userTitle: PropTypes.string.isRequired,
		lastPostDate: PropTypes.string.isRequired
	})).isRequired
};

function mapStateToProps(state) {
	const { news } = state;
	return { news };
}

class AsideContainer extends Component {
	render() {
		return (
			<Aside news={this.props.news} />
		);
	}
}

AsideContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AsideContainer);
