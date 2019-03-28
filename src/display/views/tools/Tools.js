import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import * as actions from '../../../infrastructure/actions';
import Style from './_styles';
import { getIsLoadingIconVisible } from '../../../infrastructure/selectors';
import ManagePublicViewsPane from './components/ManagePublicViewsPane';
import BrowserExtensionsPane from './components/BrowserExtensionsPane';
import ExportThreadsPane from './components/ExportThreadsPane';
import ManageTagsPane from './components/ManageTagsPane';
import tabs from '../../../infrastructure/constants/tabs';
import ui from '../../../infrastructure/reducers/ui';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	fetchTags: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	fetchPublicViews: PropTypes.func.isRequired,
	exportThreads: PropTypes.func.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired,
	username: PropTypes.string,
	match: PropTypes.shape({}).isRequired
};

const defaultProps = {
	username: ''
};

function mapStateToProps(state) {
	const {
		user,
		tags,
		publicViews,
		characters,
		ui,
		activeThreads,
		archivedThreads
	} = state;
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		characters,
		username: user.userName,
		tags,
		publicViews,
		isLoadingIconVisible,
		isBulkUpdateTagModalOpen: ui.isBulkUpdateTagModalOpen
	};
}

class Tools extends Component {
	constructor(props) {
		super(props);
		this.onExportRequest = this.onExportRequest.bind(this);
	}

	componentDidMount() {
		const {
			tags,
			publicViews,
			characters,
			username,
			fetchTags,
			fetchPublicViews,
			fetchCharacters,
			fetchUser
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
		if (!username) {
			fetchUser();
		}
	}

	onExportRequest(includeHiatused, includeArchive) {
		const { exportThreads } = this.props;
		exportThreads({ includeHiatused, includeArchive });
	}

	render() {
		const {
			publicViews,
			isLoadingIconVisible,
			openUpsertPublicViewModal,
			openDeletePublicViewModal,
			openBulkUpdateTagModal,
			username,
			match,
			tags,
			isBulkUpdateTagModalOpen
		} = this.props;
		const options = Object.values(tabs.TOOLS);
		return (
			<Style className="animated fadeIn static-container settings-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							data-spec="tools-static-dropdown-nav"
							activeTab={match.url}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>
						<StaticTabNav
							data-spec="tools-static-tab-nav"
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={match.params.tabId}>
							<ExportThreadsPane onExportRequest={this.onExportRequest} />
							<ManagePublicViewsPane
								openUpsertPublicViewModal={openUpsertPublicViewModal}
								openDeletePublicViewModal={openDeletePublicViewModal}
								publicViews={publicViews}
								isLoadingIconVisible={isLoadingIconVisible}
								username={username}
							/>
							<BrowserExtensionsPane />
							<ManageTagsPane
								tags={tags}
								isLoadingIconVisible={isLoadingIconVisible || isBulkUpdateTagModalOpen}
								openBulkUpdateTagModal={openBulkUpdateTagModal}
							/>
						</TabContent>
					</Col>
				</Row>
			</Style>
		);
	}
}

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	exportThreads: actions.exportThreads,
	fetchTags: actions.fetchTags,
	fetchPublicViews: actions.fetchPublicViews,
	openUpsertPublicViewModal: actions.openUpsertPublicViewModal,
	openDeletePublicViewModal: actions.openDeletePublicViewModal,
	openBulkUpdateTagModal: actions.openBulkUpdateTagModal,
	fetchCharacters: actions.fetchCharacters,
	fetchUser: actions.fetchUser
})(Tools);
