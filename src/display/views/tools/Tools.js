import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import { setActiveToolsTab, fetchTags, exportThreads, fetchPublicViews, openUpsertPublicViewModal, openDeletePublicViewModal, fetchCharacters } from '../../../infrastructure/actions';
import { getIsLoadingIconVisible } from '../../../infrastructure/selectors';
import ManagePublicViewsPane from './components/ManagePublicViewsPane';
import BrowserExtensionsPane from './components/BrowserExtensionsPane';
import ExportThreadsPane from './components/ExportThreadsPane';
import tabs from '../../../infrastructure/constants/tabs';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	fetchTags: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	fetchPublicViews: PropTypes.func.isRequired,
	setActiveToolsTab: PropTypes.func.isRequired,
	exportThreads: PropTypes.func.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user,
		tags,
		publicViews,
		characters
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		characters,
		user,
		tags,
		publicViews,
		isLoadingIconVisible,
		activeTab: ui.activeToolsTab
	};
}

class Tools extends Component {
	constructor(props) {
		super(props);
		this.onExportRequest = this.onExportRequest.bind(this);
	}
	componentDidMount() {
		if (!this.props.tags || !this.props.tags.length) {
			this.props.fetchTags();
		}
		if (!this.props.publicViews || !this.props.publicViews.length) {
			this.props.fetchPublicViews();
		}
		if (!this.props.characters || !this.props.characters.length) {
			this.props.fetchCharacters();
		}
	}
	onExportRequest(includeHiatused, includeArchive) {
		this.props.exportThreads({ includeHiatused, includeArchive });
	}
	render() {
		const { activeTab, publicViews, isLoadingIconVisible } = this.props;
		const options = Object.values(tabs.TOOLS);
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							data-spec="tools-static-dropdown-nav"
							setActiveTab={this.props.setActiveToolsTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>
						<StaticTabNav
							data-spec="tools-static-tab-nav"
							setActiveTab={this.props.setActiveToolsTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={activeTab}>
							<ExportThreadsPane onExportRequest={this.onExportRequest} />
							<ManagePublicViewsPane
								openUpsertPublicViewModal={this.props.openUpsertPublicViewModal}
								openDeletePublicViewModal={this.props.openDeletePublicViewModal}
								publicViews={publicViews}
								isLoadingIconVisible={isLoadingIconVisible}
							/>
							<BrowserExtensionsPane />
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
	openUpsertPublicViewModal,
	openDeletePublicViewModal,
	fetchCharacters
})(Tools);
