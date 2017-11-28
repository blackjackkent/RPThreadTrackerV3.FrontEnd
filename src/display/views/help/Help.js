import React, { Component } from 'react';
import {
	Row, Col, Nav, NavItem, NavLink, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HelpTabNav from './components/HelpTabNav';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportTopicsPane from './components/SupportTopicsPane';
import ContactFormPane from './components/ContactFormPane';
import { setActiveHelpTab } from '../../../infrastructure/actions';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		activeTab: ui.activeHelpTab
	};
}

class Help extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab(tab) {
		const { dispatch } = this.props;
		dispatch(setActiveHelpTab(tab));
	}
	render() {
		const { activeTab } = this.props;
		return (
			<div className="animated fadeIn static-container help-container">
				<Row>
					<Col>
						<HelpTabNav setActiveTab={this.setActiveTab} activeTab={activeTab} />
						<TabContent activeTab={activeTab}>
							<AboutTrackerPane />
							<SupportTopicsPane />
							<ContactFormPane />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Help.propTypes = propTypes;
export default connect(mapStateToProps)(Help);
