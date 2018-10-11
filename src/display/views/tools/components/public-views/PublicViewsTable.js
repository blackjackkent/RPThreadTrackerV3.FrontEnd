import React from 'react';
import PropTypes from 'prop-types';
import columns from './_columns';
import getTdProps from './_getTdProps';
import ReactTable from '../../../../shared/styled/ReactTable';

const propTypes = {
	username: PropTypes.string.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired
};

const PublicViewsTable = (props) => {
	const {
		isLoadingIconVisible,
		publicViews,
		openUpsertPublicViewModal,
		openDeletePublicViewModal,
		username
	} = props;
	return (
		<div className="public-views-table">
			<ReactTable
				className="-striped"
				data={publicViews}
				columns={columns(username)}
				defaultSorted={[{ id: 'name' }]}
				pageSize={10}
				getTdProps={getTdProps(
					openDeletePublicViewModal,
					openUpsertPublicViewModal
				)}
				noDataText={isLoadingIconVisible ? 'Loading...' : 'You have not yet created any public views.'}
			/>
		</div>
	);
};
PublicViewsTable.propTypes = propTypes;
export default PublicViewsTable;
