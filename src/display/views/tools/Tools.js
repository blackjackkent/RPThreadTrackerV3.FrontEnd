import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import * as actions from '../../../infrastructure/actions';
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
		const {
			tags, publicViews, characters, fetchTags, fetchPublicViews, fetchCharacters
		} = this.props;
		if (!tags || !tags.length) {
			fetchTags();
		}
		if (!publicViews || !publicViews.length) {
			fetchPublicViews();
		}
		if (!characters || !characters.length) {
			fetchCharacters();
		}
	}

	onExportRequest(includeHiatused, includeArchive) {
		const { exportThreads } = this.props;
		exportThreads({ includeHiatused, includeArchive });
	}

	render() {
		const {
			activeTab,
			publicViews,
			isLoadingIconVisible,
			setActiveToolsTab,
			openUpsertPublicViewModal,
			openDeletePublicViewModal
		} = this.props;
		const options = Object.values(tabs.TOOLS);
		return (
			<div className="animated fadeIn static-container settings-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							data-spec="tools-static-dropdown-nav"
							setActiveTab={setActiveToolsTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>
						<StaticTabNav
							data-spec="tools-static-tab-nav"
							setActiveTab={setActiveToolsTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={activeTab}>
							<ExportThreadsPane onExportRequest={this.onExportRequest} />
							<ManagePublicViewsPane
								openUpsertPublicViewModal={openUpsertPublicViewModal}
								openDeletePublicViewModal={openDeletePublicViewModal}
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
	exportThreads: actions.exportThreads,
	setActiveToolsTab: actions.setActiveToolsTab,
	fetchTags: actions.fetchTags,
	fetchPublicViews: actions.fetchPublicViews,
	openUpsertPublicViewModal: actions.openUpsertPublicViewModal,
	openDeletePublicViewModal: actions.openDeletePublicViewModal,
	fetchCharacters: actions.fetchCharacters
})(Tools);
