import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import { Card, CardHeader, Label, Input, CardBlock, Row, Col, FormGroup } from 'reactstrap';
import columns from './_columns';
import ThreadTableSubComponent from './table-components/ThreadTableSubComponent';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ThreadTable = (props) => {
	let { threads, tableFilter, rawFilterData, isThreadFilterCardHidden, threadFilterHiddenToggle, setFilteredCharacterId } = props;
	return (
		<div>
			<Card className="at-a-glance-card">
				<CardHeader>
					<i className="fa fa-filter" /> Filter
				<Label className="switch switch-sm switch-text switch-info float-right mb-0">
						<Input
							type="checkbox"
							className="switch-input"
							checked={!isThreadFilterCardHidden}
							onChange={threadFilterHiddenToggle}
						/>
						<span className="switch-label" data-on="On" data-off="Off" />
						<span className="switch-handle" />
					</Label>
				</CardHeader>
				<CardBlock className={!isThreadFilterCardHidden ? 'card-body' : 'd-none'}>
					<Row>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Character</Label>
								<Input type="select" name="characterId" id="character-id" value={rawFilterData.filteredCharacterId} onChange={setFilteredCharacterId}>
									<option value={null}>All</option>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8</option>
									<option value={9}>9</option>
									<option value={10}>10</option>
									<option value={11}>11</option>
									<option value={12}>12</option>
								</Input>
							</FormGroup>
						</Col>
					</Row>
				</CardBlock>
			</Card>
			<ReactTable
				className="-striped"
				data={threads}
				columns={columns}
				defaultSorted={[
					{
						id: "lastPostDate",
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
