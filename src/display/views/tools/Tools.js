import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToolsTabNav from './components/ToolsTabNav';
import ExportThreadsPane from './components/ExportThreadsPane';
import ManageTagsPane from './components/ManageTagsPane';
import { setActiveToolsTab } from '../../../infrastructure/actions';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user
	} = state;
	return {
		user,
		activeTab: ui.activeToolsTab
	};
}

class Tools extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab(tab) {
		const { dispatch } = this.props;
		dispatch(setActiveToolsTab(tab));
	}
	render() {
		const { activeTab } = this.props;
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col>
						<ToolsTabNav setActiveTab={this.setActiveTab} activeTab={activeTab} />
						<TabContent activeTab={activeTab}>
							<ExportThreadsPane />
							<ManageTagsPane />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Tools.propTypes = propTypes;
export default connect(mapStateToProps)(Tools);
