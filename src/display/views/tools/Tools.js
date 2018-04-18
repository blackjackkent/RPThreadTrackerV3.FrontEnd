import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExportThreadsPane from './components/ExportThreadsPane';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import { setActiveToolsTab, fetchTags, exportThreads, fetchPublicViews, openUpsertPublicViewModal } from '../../../infrastructure/actions';
import ManagePublicViewsPane from './components/ManagePublicViewsPane';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchTags: PropTypes.func.isRequired,
	fetchPublicViews: PropTypes.func.isRequired,
	setActiveToolsTab: PropTypes.func.isRequired,
	exportThreads: PropTypes.func.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user,
		tags,
		publicViews
	} = state;
	return {
		user,
		tags,
		publicViews,
		activeTab: ui.activeToolsTab
	};
}

class Tools extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
		this.onExportRequest = this.onExportRequest.bind(this);
	}
	componentDidMount() {
		if (!this.props.tags || !this.props.tags.length) {
			this.props.fetchTags();
		}
		if (!this.props.publicViews || !this.props.publicViews.length) {
			this.props.fetchPublicViews();
		}
	}
	setActiveTab(tab) {
		this.props.setActiveToolsTab(tab);
	}
	onExportRequest(includeHiatused, includeArchive) {
		this.props.exportThreads({ includeHiatused, includeArchive });
	}

	render() {
		const { activeTab } = this.props;
		const options = [
			{
				tabId: 'export-threads',
				name: 'Export Threads'
			},
			{
				tabId: 'manage-public-views',
				name: 'Manage Public Views'
			}
		];
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>
						<StaticTabNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={activeTab}>
							<ExportThreadsPane onExportRequest={this.onExportRequest} />
							<ManagePublicViewsPane openUpsertPublicViewModal={this.props.openUpsertPublicViewModal} />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Tools.propTypes = propTypes;
export default connect(mapStateToProps, {
	exportThreads,
	setActiveToolsTab,
	fetchTags,
	fetchPublicViews,
	openUpsertPublicViewModal
})(Tools);
