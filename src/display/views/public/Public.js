import React, { Component, useState } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../infrastructure/actions';
import ThreadTable from './PublicThreadTable';
import PublicHeader from './PublicHeader';
import PublicThreadFilterSelect from './PublicThreadFilterSelect';
import getColumns from './_columns';
import * as selectors from '../../../infrastructure/selectors';
import PublicStyle from './_styles';
import ThreadTableStyles from '~/display/shared/styled/TrackerTable';
import {
	legacyPublicSlugs,
	buildLegacyView
} from '../../../infrastructure/constants/legacyPublicValues';
import { getQuery } from '../../../utility';
import Footer from '~/display/shared/footer/Footer';
import { useUserProfileQuery } from '~/infrastructure/hooks/queries';
import publicThreadFilterKeys from '~/infrastructure/constants/publicThreadFilterKeys';
import usePublicViewThreadsQuery from '~/infrastructure/hooks/queries/usePublicViewThreadsQuery';
import usePublicFilteredThreads from '~/infrastructure/hooks/derived-data/usePublicFilteredThreads';

const propTypes = {
	slug: PropTypes.string,
	username: PropTypes.string
};

const defaultProps = {
	slug: '',
	username: ''
};

const Public = ({ slug, username }) => {
	const queryString = getQuery();
	const [filter, setFilter] = useState(publicThreadFilterKeys.ALL);
	const { viewData, isLoading } = usePublicViewThreadsQuery(slug, username, queryString);
	const filteredThreads = usePublicFilteredThreads(
		viewData.threads,
		viewData.threadsStatus,
		viewData.view,
		filter
	);
	return (
		<PublicStyle>
			<ThreadTableStyles className="animated fadeIn threads-container">
				<PublicHeader
					title={viewData?.view?.name}
					slug={slug}
					isLoadingIconVisible={isLoading}
				/>
				<PublicThreadFilterSelect
					setPublicThreadFilter={setFilter}
					publicThreadFilter={filter}
				/>
				<Row>
					<Col>
						<ThreadTable
							columns={getColumns(viewData?.view?.columns)}
							threads={filteredThreads}
							view={viewData?.view}
							isLoadingIconVisible={isLoading}
						/>
					</Col>
				</Row>
				<Footer />
			</ThreadTableStyles>
		</PublicStyle>
	);
};

Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
export default Public;
