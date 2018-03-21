// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Aside from './Aside';
import { markUnreadNews } from '../../../infrastructure/selectors';
// #endregion imports

const propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const labeledNewsItems = markUnreadNews(state);
	return { news: labeledNewsItems };
}

const AsideContainer = props => <Aside news={props.news} />;

AsideContainer.propTypes = propTypes;
export default connect(mapStateToProps)(AsideContainer);
