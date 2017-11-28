import React from 'react';
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

const AsideContainer = props => <Aside news={props.news} />;

AsideContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AsideContainer);
