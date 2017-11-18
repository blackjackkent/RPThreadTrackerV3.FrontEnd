import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Card, CardHeader, Label, Input, CardBlock, Row, Col, FormGroup } from 'reactstrap';
import columns from './_columns';
import CharacterFilterSelect from './filter-components/CharacterFilterSelect';
import TagFilterSelect from './filter-components/TagFilterSelect';

const propTypes = {
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired
};

const ThreadFilterCard = (props) => {
	const {
		rawFilterData,
		characters,
		tags,
		isThreadFilterCardHidden,
		threadFilterHiddenToggle,
		setFilteredCharacterId,
		setFilteredTag
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
							<CharacterFilterSelect characters={characters} rawFilterData={rawFilterData} setFilteredCharacterId={setFilteredCharacterId} />
						</Col>
						<Col xs="4">
							<TagFilterSelect tags={tags} rawFilterData={rawFilterData} setFilteredTag={setFilteredTag} />
						</Col>
					</Row>
				</CardBlock>
			</Card>
		</div>
	);
};
ThreadFilterCard.propTypes = propTypes;
export default ThreadFilterCard;
