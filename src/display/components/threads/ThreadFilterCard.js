import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Card, CardHeader, Label, Input, CardBlock, Row, Col, FormGroup } from 'reactstrap';
import columns from './_columns';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired
};

const ThreadFilterCard = (props) => {
	const {
		rawFilterData,
		isThreadFilterCardHidden,
		threadFilterHiddenToggle,
		setFilteredCharacterId
	} = props;
	return (
		<div>
			<Card className="thread-filter-card">
				<CardHeader>
					<span onClick={threadFilterHiddenToggle}>
						Filter <i className="fa fa-filter" />
					</span>

				</CardHeader>
				<CardBlock className={!isThreadFilterCardHidden ? 'card-body' : 'd-none'}>
					<Row>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Character</Label>
								<Input
									type="select"
									name="characterId"
									id="character-id"
									value={rawFilterData.filteredCharacterId}
									onChange={setFilteredCharacterId}
								>
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
		</div>
	);
};
ThreadFilterCard.propTypes = propTypes;
export default ThreadFilterCard;
