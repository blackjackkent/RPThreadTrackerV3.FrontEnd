import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer';
import * as actions from '../../../infrastructure/actions';

const propTypes = {
	setSiteTheme: PropTypes.func.isRequired,
	useLightTheme: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	const { ui } = state;
	return {
		useLightTheme: ui.useLightTheme
	};
}

class FooterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.themeToggle = this.themeToggle.bind(this);
	}

	themeToggle() {
		const { useLightTheme, setSiteTheme } = this.props;
		setSiteTheme(!useLightTheme);
	}

	render() {
		const { useLightTheme } = this.props;
		return (
			<Footer {...this.props} useLightTheme={useLightTheme} toggleTheme={this.themeToggle} />
		);
	}
}

FooterContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	setSiteTheme: actions.setSiteTheme
})(FooterContainer);
