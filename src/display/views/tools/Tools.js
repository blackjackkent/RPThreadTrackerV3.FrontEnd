import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToolsTabNav from './components/ToolsTabNav';
import ExportThreadsPane from './components/ExportThreadsPane';
import ManageTagsPane from './components/ManageTagsPane';
import { setActiveToolsTab, fetchTags } from '../../../infrastructure/actions';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user,
		tags
	} = state;
	return {
		user,
		tags,
		activeTab: ui.activeToolsTab
	};
}

class Tools extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.tags || !this.props.tags.length) {
			dispatch(fetchTags());
		}
	}
	setActiveTab(tab) {
		const { dispatch } = this.props;
		dispatch(setActiveToolsTab(tab));
	}
	render() {
		const { activeTab, tags } = this.props;
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col>
						<ToolsTabNav setActiveTab={this.setActiveTab} activeTab={activeTab} />
						<TabContent activeTab={activeTab}>
							<ExportThreadsPane />
							<ManageTagsPane tags={tags} />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Tools.propTypes = propTypes;
export default connect(mapStateToProps)(Tools);
