import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock, Table } from 'reactstrap';
import YourCharactersCardRow from './YourCharactersCardRow';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		characterName: PropTypes.string,
		urlIdentifier: PropTypes.string.isRequired,
		isOnHiatus: PropTypes.bool.isRequired
	})).isRequired
};

const YourCharactersCard = (props) => {
	const { characters } = props;
	return (
		<Card className="your-characters-card">
			<CardHeader>
				<i className="fa fa-users" /> Your Characters
			</CardHeader>
			<CardBlock className="card-body">
				<Table>
					<tbody>
						{characters.map(item => <YourCharactersCardRow item={item} key={item.id} />)}
					</tbody>
				</Table>
			</CardBlock>
		</Card>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
