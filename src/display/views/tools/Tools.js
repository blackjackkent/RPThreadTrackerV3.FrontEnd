import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import Style from './_styles';
import ManagePublicViewsPane from './components/ManagePublicViewsPane';
import BrowserExtensionsPane from './components/BrowserExtensionsPane';
import ExportThreadsPane from './components/ExportThreadsPane';
import ManageTagsPane from './components/ManageTagsPane';
import tabs from '../../../infrastructure/constants/tabs';
import { useGenerateExportedThreadsDocumentMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	fetchTags: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	isManageTagsLoadingIconVisible: PropTypes.bool.isRequired,
	fetchPublicViews: PropTypes.func.isRequired,
	exportThreads: PropTypes.func.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired,
	openBulkUpdateTagModal: PropTypes.func.isRequired,
	openBulkDeleteTagModal: PropTypes.func.isRequired,
	username: PropTypes.string,
	match: PropTypes.shape({
		url: PropTypes.string,
		params: PropTypes.shape({
			tabId: PropTypes.string
		})
	}).isRequired
};

const defaultProps = {
	username: ''
};

const Tools = ({
	publicViews,
	isLoadingIconVisible,
	openUpsertPublicViewModal,
	openDeletePublicViewModal,
	openBulkUpdateTagModal,
	openBulkDeleteTagModal,
	username,
	match,
	tags
}) => {
	const { generateDocument } = useGenerateExportedThreadsDocumentMutation();

	const onExportRequest = (includeHiatused, includeArchive) => {
		generateDocument({ includeHiatused, includeArchive });
	};

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
					<StaticTabNav data-spec="tools-static-tab-nav" options={options} />
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={match.params.tabId}>
						<ExportThreadsPane onExportRequest={onExportRequest} />
						{/*
						<ManagePublicViewsPane
							openUpsertPublicViewModal={openUpsertPublicViewModal}
							openDeletePublicViewModal={openDeletePublicViewModal}
							publicViews={publicViews}
							isLoadingIconVisible={isLoadingIconVisible}
							username={username}
						/> */}
						<BrowserExtensionsPane />
						<ManageTagsPane
							tags={tags}
							openBulkUpdateTagModal={openBulkUpdateTagModal}
							openBulkDeleteTagModal={openBulkDeleteTagModal}
						/>
					</TabContent>
				</Col>
			</Row>
		</Style>
	);
};

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;
export default Tools;
