import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	Renderable: PropTypes.func.isRequired
};

class TooltipForm extends Component {
	constructor() {
		super();
		this.showTooltip = this.showTooltip.bind(this);
		this.hideTooltip = this.hideTooltip.bind(this);
		this.state = {
			displayTooltip: {}
		};
	}

	showTooltip(e) {
		const { name } = e.target;
		this.setState({
			displayTooltip: Object.assign({}, this.state.displayTooltip, {
				[name]: true
			})
		});
	}

	hideTooltip(e) {
		const { name } = e.target;
		this.setState({
			displayTooltip: Object.assign({}, this.state.displayTooltip, {
				[name]: false
			})
		});
	}

	render() {
		const {
			Renderable
		} = this.props;
		return (
			<Renderable
				tooltipDisplayData={this.state.displayTooltip}
				showTooltip={this.showTooltip}
				hideTooltip={this.hideTooltip}
				{...this.props}
			/>
		);
	}
}

TooltipForm.propTypes = propTypes;
export default TooltipForm;
