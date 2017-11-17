import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Card, CardHeader, Label, Input, CardBlock, Row, Col, FormGroup } from 'reactstrap';
import columns from './_columns';
import ThreadFilterCard from './ThreadFilterCard';
import ThreadTableSubComponent from './table-components/ThreadTableSubComponent';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired
};

const ThreadTable = (props) => {
	const {
		threads,
		rawFilterData,
		isThreadFilterCardHidden,
		threadFilterHiddenToggle,
		setFilteredCharacterId
	} = props;
	return (
		<div>
			<ThreadFilterCard
				rawFilterData={rawFilterData}
				isThreadFilterCardHidden={isThreadFilterCardHidden}
				threadFilterHiddenToggle={threadFilterHiddenToggle}
				setFilteredCharacterId={setFilteredCharacterId}
			/>
			<ReactTable
				className="-striped"
				data={threads}
				columns={columns}
				defaultSorted={[
					{
						id: 'lastPostDate',
						desc: true
					}
				]}
				showPaginationTop
				SubComponent={row => <ThreadTableSubComponent thread={row.original} />}
			/>
		</div>
	);
};
ThreadTable.propTypes = propTypes;
export default ThreadTable;
